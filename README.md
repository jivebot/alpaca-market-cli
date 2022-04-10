oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g alpaca-market-cli
$ alpaca COMMAND
running command...
$ alpaca (--version)
alpaca-market-cli/0.0.0 darwin-x64 node-v16.14.2
$ alpaca --help [COMMAND]
USAGE
  $ alpaca COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`alpaca hello PERSON`](#alpaca-hello-person)
* [`alpaca hello world`](#alpaca-hello-world)
* [`alpaca help [COMMAND]`](#alpaca-help-command)
* [`alpaca plugins`](#alpaca-plugins)
* [`alpaca plugins:install PLUGIN...`](#alpaca-pluginsinstall-plugin)
* [`alpaca plugins:inspect PLUGIN...`](#alpaca-pluginsinspect-plugin)
* [`alpaca plugins:install PLUGIN...`](#alpaca-pluginsinstall-plugin-1)
* [`alpaca plugins:link PLUGIN`](#alpaca-pluginslink-plugin)
* [`alpaca plugins:uninstall PLUGIN...`](#alpaca-pluginsuninstall-plugin)
* [`alpaca plugins:uninstall PLUGIN...`](#alpaca-pluginsuninstall-plugin-1)
* [`alpaca plugins:uninstall PLUGIN...`](#alpaca-pluginsuninstall-plugin-2)
* [`alpaca plugins update`](#alpaca-plugins-update)

## `alpaca hello PERSON`

Say hello

```
USAGE
  $ alpaca hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jivebot/alpaca-market-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `alpaca hello world`

Say hello world

```
USAGE
  $ alpaca hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `alpaca help [COMMAND]`

Display help for alpaca.

```
USAGE
  $ alpaca help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for alpaca.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `alpaca plugins`

List installed plugins.

```
USAGE
  $ alpaca plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ alpaca plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `alpaca plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ alpaca plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ alpaca plugins add

EXAMPLES
  $ alpaca plugins:install myplugin 

  $ alpaca plugins:install https://github.com/someuser/someplugin

  $ alpaca plugins:install someuser/someplugin
```

## `alpaca plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ alpaca plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ alpaca plugins:inspect myplugin
```

## `alpaca plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ alpaca plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ alpaca plugins add

EXAMPLES
  $ alpaca plugins:install myplugin 

  $ alpaca plugins:install https://github.com/someuser/someplugin

  $ alpaca plugins:install someuser/someplugin
```

## `alpaca plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ alpaca plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ alpaca plugins:link myplugin
```

## `alpaca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ alpaca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alpaca plugins unlink
  $ alpaca plugins remove
```

## `alpaca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ alpaca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alpaca plugins unlink
  $ alpaca plugins remove
```

## `alpaca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ alpaca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alpaca plugins unlink
  $ alpaca plugins remove
```

## `alpaca plugins update`

Update installed plugins.

```
USAGE
  $ alpaca plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
