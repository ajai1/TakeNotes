const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "To add notes !",
  builder: {
    title: {
      describe: "Add the title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Information to store",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "To remove notes !",
  builder: {
    title: {
      describe: "Add the title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "To list notes !",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "To read notes !",
  builder: {
    title: {
      description: "Title to find",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
