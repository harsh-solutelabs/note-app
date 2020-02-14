const notes = require("./note");
const validator = require("validator");
const color = require("chalk");
const yargs = require("yargs");

// console.log(process.argv);

yargs.version("1.0.1");

//Add Commands
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: String
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: String
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

//create remove commands
yargs.command({
  command: "remove",
  describe: "Removing notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: String
    }
  },
  handler(argv) {
    notes.remove(argv.title);
  }
});

//Listing notes
yargs.command({
  command: "list",
  describe: "Listing Notes",
  handler() {
    console.log("Listing All Notes");
  }
});

//Reading note
yargs.command({
  command: "read",
  describe: "Reading List",
  handler() {
    console.log("Reading a Notes");
  }
});

//add,remove,read,list
yargs.parse();
// console.log(yargs.argv);

// const msg = getNotes();
// const command = process.argv[2];
// if (command == "add") {
//   console.log("note Added");
// } else if (command == "remove") {
//   console.log("note remove");
// }

// console.log(validator.isEmail("harsh@gmail.com"));

// console.log(color.blue("success"));
// console.log(color.blue.inverse.bold("Hello world!"));
// const fs = require("fs");
// const utils_name = require("./utils");
// // fs.writeFileSync("notes", "Auto created file.");
// // fs.appendFileSync("notes", "Text Added");

// console.log(utils_name);
