import { Command } from "@oclif/core";

export default class Repo extends Command {
  // hide the command from help
  static hidden = true;

  async run(): Promise<void> {
    console.log("");
  }
}
