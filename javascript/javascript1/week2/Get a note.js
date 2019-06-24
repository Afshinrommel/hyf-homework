
// Save a note 
var note ="";
var noteId = 0;
var notes = [];
function addNote(noteId,note){
    let temp = {
        noteId:note
    }
    notes.push(temp);
totalNote = notes.length;
}
addNote(1,"one");
addNote(2,"two");
addNote(3,"three");
addNote(4,"four");
addNote(5,"five");
console.log(totalNote);

console.log(notes[3].noteId);

// Get a note
function getNoteFromId(noteId){
    //use temporary2 variable to calculate total members of array
    var temporary2 = notes.length;
    for (i= 0;i < temporary2;i++){
        if (i === noteId){
 // use temporary variable 3 to add objects to array           
            var temporary3 = notes[i].noteId;
            console.log(temporary3);
        }
    }
}
getNoteFromId(3);
getNoteFromId(1);
getNoteFromId(4);
