import { Command } from "@oclif/core";
const NpmApi = require("npm-api");
const npm = new NpmApi();
export default class Maintainer extends Command {
  static description = "List repos for a maintainer";

  static examples = [`$ npmi maintainer doowb`];

  static args = [
    {
      name: "maintainer",
      description: "maintainer's name",
      required: true,
    },
  ];

  async run(): Promise<void> {
    const { args } = await this.parse(Maintainer);
    const maintainer = npm.maintainer(args.maintainer);
    const repos = await maintainer.repos();
    console.log(repos);
  }
}
