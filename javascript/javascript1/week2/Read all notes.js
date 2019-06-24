//save a note with function addNote
let notes = [];
function addNote(noteId,note){
     //temp is name of temporary object    
    let temp = {
        noteId:note
    }
    // add temporary object to array notes.   
    notes.push(temp);
totalNote = notes.length;
}
addNote(1,"I am a student");
addNote(2,"My name is Afshin");
addNote(3,"I am living in Iran");
addNote(4,"I will go to France");
addNote(5,"I do not have time");
console.log(totalNote);

console.log(notes[3].noteId);

// Get a note
function getNoteFromId(noteId){
    let temporary2 = notes.length;
    for (i= 0;i < temporary2;i++){
        if (i === noteId){
            let temporary3 = notes[i].noteId;
     // temporary3 is temporary variable
            console.log("Note "+ noteId + " is "+": " + temporary3);
        }
    }
}
getNoteFromId(3);
/////Read all notes 
let sampleText ="some example note";
let noteId = 1;
notes[1].noteId = sampleText;


noteId = -1;
for (j= 0;j<notes.length ;j++){
    noteId++;
     // temporary4 is temporary variable
let temporary4 = notes[j].noteId;
//let temporary4 = notes[j];
console.log(temporary4);
}

