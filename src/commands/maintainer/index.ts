import { Command } from "@oclif/core";
const NpmApi = require("npm-api");
const print = require("pretty-print");

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
    if (repos.length) {
      print(repos, { leftPadding: 0 });
    } else {
      console.log(`${args.maintainer} has no published public repos.`);
    }
  }
}
