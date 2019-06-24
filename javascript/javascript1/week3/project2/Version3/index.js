let booksWriter = [
  "Jason West",
  "Good, Bad, & Downright Ugly",
  "Samuel A. Malone",
  "Samuel A. Malone",
  "Raymond John Protheroe",
  "Georgios P. Piperopoulos",
  "John Kyriazoglou",
  "Paul Newton",
  "MTD Training",
  "Paul Newton"
];
let booksName = [
  "I Still Can’t Speak English",
  "Psychopathic Leadership",
  "Models for Trainers",
  "Models for Trainers: An A to I Guide",
  "Essential Electromagnetism: Solutions",
  "Psychologically Safe Workplaces: Utopia Revisited",
  "IT-Business Alignment: Part I",
  "How to Overcome Procrastination",
  "Advanced Communication Skills",
  "Team Development"
];
let booksImage = [
  "i-still-cant-speak-english.jpg",
  "9781855734289.jpg",
  "models-for-trainers-a-j-to-z-guide.jpg",
  "models-for-trainers-an-a-to-i-guide.jpg",
  "essential-electromagnetism-solutions.jpg",
  "psychologically-safe-workplaces-utopiare-visited.jpg",
  "it-business-alignment-part-i.jpg",
  "how-to-overcome-procrastination.jpg",
  "advanced-communication-skills.jpg",
  "team-development.jpg"
];
let booksLanguage = [
  "english", "english", "english",
  "english", "english", "english",
  "english", "english", "english",
  "english"
];
let authorBookTable = "";
let languageBookTable = "";
let imageBookTable = "";
let nameBookTable = "";
// create array with all books
let books = [];
for (i = 0; i < booksName.length; i++) {
  let book = {
    title: booksName[i],
    author: booksWriter[i],
    image: booksImage[i],
    language: booksLanguage[i]
  }
  books.push(book);
}
let selectIDs = ['title', 'author', 'language', 'image'];
for (let j = 0; j < selectIDs.length; j++) {
  let createNewElement = document.createElement('select');
  createNewElement.setAttribute('id', selectIDs[j]);
  document.body.appendChild(createNewElement);
  for (i = 0; i < books.length; i++) {
    let createNewOption = document.createElement('option');
    let createText = document.createTextNode(books[i][selectIDs[j]]);
    createNewOption.appendChild(createText);
    createNewElement.appendChild(createNewOption);
  }
}
window.addEventListener('load', makeList, false);
function makeList() {
  document.getElementById('title').addEventListener('change', addTitle, false);
  document.getElementById('author').addEventListener('change', addAuthor, false);
  document.getElementById('image').addEventListener('change', addImage, false);
}
function addTitle() {
  let selectedItem = document.getElementById('title').value;
  for (i = 0; i < booksName.length; i++) {
    let index = booksName[i];
    if (index == selectedItem) {

      SelectIndex = i
    }
  }
  authorBookTable = booksWriter[SelectIndex];
  languageBookTable = booksLanguage[SelectIndex];
  imageBookTable = booksImage[SelectIndex];
  nameBookTable = booksName[SelectIndex];
  makeListBook();
}
function addAuthor() {
  let selectedItem = document.getElementById('author').value;
  for (i = 0; i < booksWriter.length; i++) {
    let index = booksWriter[i];
    if (index == selectedItem) {
      //alert(i);
      SelectIndex = i
    }
  }
  authorBookTable = booksWriter[SelectIndex];
  languageBookTable = booksLanguage[SelectIndex];
  imageBookTable = booksImage[SelectIndex];
  nameBookTable = booksName[SelectIndex];
  makeListBook();
}
function addImage() {
  let selectedItem = document.getElementById('image').value;
  for (i = 0; i < booksImage.length; i++) {
    let index = booksImage[i];
    if (index == selectedItem) {
      //alert(i);
      SelectIndex = i
    }
  }
  authorBookTable = booksWriter[SelectIndex];
  languageBookTable = booksLanguage[SelectIndex];
  imageBookTable = booksImage[SelectIndex];
  nameBookTable = booksName[SelectIndex];
  makeListBook();
}
function makeListBook() {

  let bookInTable = document.createElement('ul');
  let bookTitle = document.createElement('h1');

  let titleText = document.createTextNode(nameBookTable);
  bookTitle.appendChild(titleText);
  let bookLanguage = document.createElement('li');
  let languageText = document.createTextNode(languageBookTable);
  bookLanguage.appendChild(languageText);
  let bookAuthor = document.createElement('li');
  let authorText = document.createTextNode(authorBookTable);
  bookAuthor.appendChild(authorText);
  bookInTable.appendChild(bookAuthor);
  bookInTable.appendChild(bookLanguage);
  let bookPic = document.createElement('li');
  let img = document.createElement('img');
  img.style.height = '120px'
  img.src = imageBookTable;
  bookPic.appendChild(img);
  bookInTable.appendChild(bookPic);
  document.body.appendChild(bookTitle);
  document.body.appendChild(bookInTable);
}

