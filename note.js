const fs = require("fs");
const chalk = require("chalk");
const getNotes = function() {
  console.log("Your Notes...");
};

//Add Notes------------------------------------------------
const addNotes = function(title, body) {
  const notes = loadNotes();
  duplicate = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicate.length === 0) {
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
const saveNotes = function(notes) {
  const jsonNotes = JSON.stringify(notes);
  fs.writeFileSync("note.json", jsonNotes);
};

//Load note------------------------------------------------------------
const loadNotes = function() {
  try {
    const bufferData = fs.readFileSync("note.json");
    const datajson = bufferData.toString();
    return JSON.parse(datajson);
  } catch (e) {
    return [];
  }
};

//Removing note---------------------------------------------------------
const remove = function(title) {
  const notes = loadNotes();
  notesExist = notes.filter(function(note) {
    return note.title !== title;
  });
  if (notes.length > notesExist.length) {
    saveNotes(notesExist);
    console.log(chalk.green.inverse("Note Remove"));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  remove: remove
};
