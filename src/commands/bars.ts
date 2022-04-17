import { Command, Flags } from "@oclif/core";
import { AlpacaClient } from "@master-chief/alpaca";
import { writeToStream, writeToPath } from "@fast-csv/format";

export default class Bars extends Command {
  static description = "Download bars";

  static args = [
    { name: "symbol", description: "Stock symbol", required: true },
  ];

  static flags = {
    start: Flags.string({
      char: "s",
      description: "Start date / datetime",
    }),
    end: Flags.string({
      char: "e",
      description: "End date / datetime",
    }),
    output: Flags.string({
      char: "o",
      description: "Output file",
    }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Bars);

    const client = new AlpacaClient({
      credentials: {
        key: process.env.ALPACA_KEY ?? "",
        secret: process.env.ALPACA_SECRET ?? "",
        paper: process.env.ALPACA_PAPER === "1",
      },
      rate_limit: true,
    });

    const startDate = flags.start ? new Date(flags.start) : new Date();
    const endDate = flags.end ? new Date(flags.end) : new Date();

    const bars: Record<string, unknown>[] = [];
    let pageToken = "";

    while (pageToken != null) {
      const resp = await client.getBars({
        symbol: args.symbol,
        start: startDate,
        end: endDate,
        timeframe: "1Day",
        page_token: pageToken,
      });
      pageToken = resp.next_page_token;

      resp.bars.forEach((bar) => {
        bars.push({
          timestamp: bar.t,
          open: bar.o,
          high: bar.h,
          low: bar.l,
          close: bar.c,
          volume: bar.v,
        });
      });
    }

    if (flags.output) {
      writeToPath(flags.output, bars, {
        headers: true,
        includeEndRowDelimiter: true,
      });
    } else {
      writeToStream(process.stdout, bars, {
        headers: true,
        includeEndRowDelimiter: true,
      });
    }
  }
}
