# npmeye

oclif command line interface example that uses [npm-api](https://github.com/doowb/npm-api) to access the [npm package registry](https://www.npmjs.com)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/npmeye)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/npmeye)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/jkoutavas/npmeye/blob/main/package.json)

<!-- toc -->
* [npmeye](#npmeye)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g npmeye
$ npmeye COMMAND
running command...
$ npmeye (--version)
npmeye/0.1.1 darwin-x64 node-v14.17.3
$ npmeye --help [COMMAND]
USAGE
  $ npmeye COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`npmeye help [COMMAND]`](#npmeye-help-command)
* [`npmeye maintainer MAINTAINER`](#npmeye-maintainer-maintainer)
* [`npmeye repo dependencies REPO [DEV]`](#npmeye-repo-dependencies-repo-dev)

## `npmeye help [COMMAND]`

Display help for npmeye.

```
USAGE
  $ npmeye help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for npmeye.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `npmeye maintainer MAINTAINER`

List repos for a maintainer

```
USAGE
  $ npmeye maintainer [MAINTAINER]

ARGUMENTS
  MAINTAINER  maintainer's name

DESCRIPTION
  List repos for a maintainer

EXAMPLES
  $ npmi maintainer doowb
```

_See code: [dist/commands/maintainer/index.ts](https://github.com/jkoutavas/npmeye/blob/v0.1.1/dist/commands/maintainer/index.ts)_

## `npmeye repo dependencies REPO [DEV]`

List a repo's dependencies for the specified version.

```
USAGE
  $ npmeye repo dependencies [REPO] [DEV] [-v <value>]

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
