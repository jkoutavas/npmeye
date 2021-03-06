import { Command, Flags } from "@oclif/core";
const NpmApi = require("npm-api");
const npm = new NpmApi();
export default class Dependencies extends Command {
  static description = "List a repo's dependencies for the specified version.";

  static examples = [`$ npmeye repo dependencies npm-api`];

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

  listDependencies = (pkg: any) => {
    console.log(pkg);
  };

  showError = (err: any) => {
    console.error(err);
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Dependencies);
    const repo = npm.repo(args.repo);
    if (args.dev !== undefined) {
      repo
        .devDependencies(flags.version)
        .then((pkg: any) => this.listDependencies(pkg))
        .catch((err: any) => this.showError(err));
    } else {
      repo
        .dependencies(flags.version)
        .then((pkg: any) => this.listDependencies(pkg))
        .catch((err: any) => this.showError(err));
    }
  }
}
