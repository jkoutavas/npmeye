# npmi
NPM registry command line interface


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [npmi](#npmi)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g npmi
$ npmi COMMAND
running command...
$ npmi (--version)
npmi/0.0.0 darwin-x64 node-v14.17.3
$ npmi --help [COMMAND]
USAGE
  $ npmi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`npmi help [COMMAND]`](#npmi-help-command)
* [`npmi maintainer MAINTAINER`](#npmi-maintainer-maintainer)
* [`npmi plugins`](#npmi-plugins)
* [`npmi plugins:inspect PLUGIN...`](#npmi-pluginsinspect-plugin)
* [`npmi plugins:install PLUGIN...`](#npmi-pluginsinstall-plugin)
* [`npmi plugins:link PLUGIN`](#npmi-pluginslink-plugin)
* [`npmi plugins:uninstall PLUGIN...`](#npmi-pluginsuninstall-plugin)
* [`npmi plugins update`](#npmi-plugins-update)
* [`npmi repo dependencies REPO [DEV]`](#npmi-repo-dependencies-repo-dev)

## `npmi help [COMMAND]`

Display help for npmi.

```
USAGE
  $ npmi help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for npmi.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `npmi maintainer MAINTAINER`

List repos for a maintainer

```
USAGE
  $ npmi maintainer [MAINTAINER]

ARGUMENTS
  MAINTAINER  maintainer's name

DESCRIPTION
  List repos for a maintainer

EXAMPLES
  $ npmi maintainer doowb
```

_See code: [dist/commands/maintainer/index.ts](https://github.com/jkoutavas/npmi/blob/v0.0.0/dist/commands/maintainer/index.ts)_

## `npmi plugins`

List installed plugins.

```
USAGE
  $ npmi plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ npmi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `npmi plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ npmi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ npmi plugins:inspect myplugin
```

## `npmi plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ npmi plugins:install PLUGIN...

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
  $ npmi plugins add

EXAMPLES
  $ npmi plugins:install myplugin 

  $ npmi plugins:install https://github.com/someuser/someplugin

  $ npmi plugins:install someuser/someplugin
```

## `npmi plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ npmi plugins:link PLUGIN

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
  $ npmi plugins:link myplugin
```

## `npmi plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ npmi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ npmi plugins unlink
  $ npmi plugins remove
```

## `npmi plugins update`

Update installed plugins.

```
USAGE
  $ npmi plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `npmi repo dependencies REPO [DEV]`

List a repo's dependencies for the specified version.

```
USAGE
  $ npmi repo dependencies [REPO] [DEV] [-v <value>]

ARGUMENTS
  REPO  repo's name
  DEV   if specified, lists dev dependencies instead

FLAGS
  -v, --version=<value>  [default: latest]

DESCRIPTION
  List a repo's dependencies for the specified version.

EXAMPLES
  $ npmi repo dependencies npm-api
```
<!-- commandsstop -->
