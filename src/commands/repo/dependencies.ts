import { Command, Flags } from "@oclif/core";
const NpmApi = require("npm-api");
const npm = new NpmApi();
export default class Dependencies extends Command {
  static description = "List a repo's dependencies for the specified version.";

  static examples = [`$ npmi repo dependencies npm-api`];

  static args = [
    {
      name: "repo",
      description: "repo's name",
      required: true,
    },
    {
      name: "dev",
      description: "if specified, lists dev dependencies instead",
    },
  ];

  static flags = {
    version: Flags.string({ char: "v", default: "latest" }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Dependencies);
    const repo = npm.repo(args.repo);
    if (args.dev !== undefined) {
      repo.devDependencies(flags.version).then(
        function (pkg: any) {
          console.log(pkg);
        },
        function (err: any) {
          console.error(err);
        }
      );
    } else {
      repo.dependencies(flags.version).then(
        function (pkg: any) {
          console.log(pkg);
        },
        function (err: any) {
          console.error(err);
        }
      );
    }
  }
}
