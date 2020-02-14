const fs = require("fs");
const chalk = require("chalk");

//Add Notes------------------------------------------------
const addNotes = (title, body) => {
  const notes = loadNotes();
  // duplicate = notes.filter(note => note.title === title);
  duplicate = notes.find(note => note.title === title);

  // duplicate = notes.filter(function(note) {
  //   return note.title === title;
  // });

  if (!duplicate) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note Added Successfully"));
  } else {
    console.log(chalk.red.inverse("Note Title Taken"));
  }
};

//Save note------------------------------------------------------------
const saveNotes = notes => {
  const jsonNotes = JSON.stringify(notes);
  fs.writeFileSync("note.json", jsonNotes);
};

//Load note------------------------------------------------------------
const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("note.json");
    const datajson = bufferData.toString();
    return JSON.parse(datajson);
  } catch (e) {
    return [];
  }
};
//list note-------------------------------------------------------------
const listNotes = () => {
  console.log(chalk.yellow.inverse("list of notes:-"));
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title);
  });
};
//Removing note---------------------------------------------------------
const remove = title => {
  const notes = loadNotes();

  notesExist = notes.filter(note => note.title !== title);

  // notesExist = notes.filter(function(note) {
  //   return note.title !== title;
  // });
  if (notes.length > notesExist.length) {
    saveNotes(notesExist);
    console.log(chalk.green.inverse("Note Remove"));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};
//Read Notes-------------------------------------------------------------
const readNotes = title => {
  const notes = loadNotes();
  const displayNotes = notes.find(note => note.title === title);
  if (!displayNotes) {
    console.log(chalk.red.inverse("No Note Found"));
  } else {
    console.log(chalk.white.inverse("Note Title:-"));
    console.log(displayNotes.title);
    console.log(chalk.white.inverse("Note Body:-"));
    console.log(displayNotes.body);
  }
};

module.exports = {
  addNotes: addNotes,
  remove: remove,
  listNotes: listNotes,
  readNotes: readNotes
};
