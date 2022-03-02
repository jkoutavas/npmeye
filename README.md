# npmi
oclif command line interface example that uses [npm-api](https://github.com/doowb/npm-api) to access the [npm package registry](https://www.npmjs.com)


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/npmi)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/npmi)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/jkoutavas/npmi/blob/main/package.json)

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
