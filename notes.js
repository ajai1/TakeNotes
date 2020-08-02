const fs = require("fs");
const { default: chalk } = require("chalk");

const readNote = function (title) {
  const notes = loadNotes();
  const readNote = notes.find((note) => {
    return note.title === title;
  });
  if (readNote) {
    console.log(chalk.yellowBright.inverse("Title : " + readNote.title));
    console.log(chalk.cyan.inverse("Body : " + readNote.body));
  } else {
    console.log(chalk.red.inverse(title + " not found"));
  }
  return "Your Notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const dupNote = notes.find((note) => {
    return note.title === title;
  });
  if (!dupNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Tile of the note exists");
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  let noteFound = false;
  const removedNotes = notes.filter((note) => {
    if (note.title === title) {
      noteFound = true;
      return false;
    }
    return true;
  });
  if (noteFound) {
    saveNotes(removedNotes);
    console.log("Removed the note : " + title);
  } else {
    console.log("Note doesnot exists : " + title);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes !!!"));
  notes.forEach((note) => console.log(note.title));
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { readNote, addNote, removeNotes, listNotes };
