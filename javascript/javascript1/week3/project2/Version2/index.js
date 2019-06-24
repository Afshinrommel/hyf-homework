let selectedBook = "";
let selectedAuthor = "";
let selectedImage = "";
let selectedLanguage = "";
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
let booksLan = [
    "english", "english", "english",
    "english", "english", "english",
    "english", "english", "english",
    "english"
];
let booksWriterList = document.createElement("select");
booksWriterList.id = "bookAuthors";
for (let i = 0; i < booksWriter.length; i++) {
    let bookAuthorsOption = document.createElement("option");
    bookAuthorsOption.value = i;
    bookAuthorsOption.text = booksWriter[i];
    booksWriterList.appendChild(bookAuthorsOption);
}
document.body.appendChild(booksWriterList);
let booksNameList = document.createElement("select");
booksNameList.id = "booksName";
for (let i = 0; i < booksName.length; i++) {
    let booksNameOption = document.createElement("option");
    booksNameOption.value = i;
    booksNameOption.text = booksName[i];
    booksNameList.appendChild(booksNameOption);
}
document.body.appendChild(booksNameList);
let booksImageList = document.createElement("select");
booksImageList.id = "booksImage";
for (let i = 0; i < booksImage.length; i++) {
    let booksImageOption = document.createElement("option");
    booksImageOption.value = i;
    booksImageOption.text = booksImage[i];
    booksImageList.appendChild(booksImageOption);
}
document.body.appendChild(booksImageList);
let booksLanList = document.createElement("select");
booksLanList.id = "booksLan";
for (let i = 0; i < booksLan.length; i++) {
    let booksLanOption = document.createElement("option");
    booksLanOption.value = i;
    booksLanOption.text = booksLan[i];
    booksLanList.appendChild(booksLanOption);
}
document.body.appendChild(booksLanList);

function start() {
    document.getElementById("bookAuthors").addEventListener("change", addActivityItem, false);
}
function addActivityItem() {
    selectauthors = document.getElementById("bookAuthors").value;
    selectedBook = booksName[selectauthors];
    document.getElementById("booksName").value = selectauthors;

    selectedAuthor = booksWriter[selectauthors];
    document.getElementById("booksImage").value = selectauthors;
    selectedImage = booksImage[selectauthors];
    document.getElementById("booksLan").value = selectauthors;
    selectedLanguage = booksLan[selectauthors];
    makeListBook();
}
window.addEventListener("load", start, false);
function start1() {
    document.getElementById("booksName").addEventListener("change", addActivityItem1, false);
}
function addActivityItem1() {
    selectTitles = document.getElementById("booksName").value;
    selectedBook = booksName[selectTitles];
    document.getElementById("booksImage").value = selectTitles;
    selectedAuthor = booksWriter[selectTitles];
    document.getElementById("bookAuthors").value = selectTitles;
    selectedImage = booksImage[selectTitles];
    document.getElementById("booksLan").value = selectTitles;
    selectedLanguage = booksLan[selectTitles];
    makeListBook();
}
window.addEventListener("load", start1, false);
function start2() {
    document.getElementById("booksImage").addEventListener("change", addActivityItem2, false);
}
function addActivityItem2() {
    selectImages = document.getElementById('booksImage').value;
    selectedBook = booksName[selectImages];
    document.getElementById("booksName").value = selectImages;
    selectedAuthor = booksWriter[selectImages];
    document.getElementById("bookAuthors").value = selectImages;
    selectedImage = booksImage[selectImages];
    document.getElementById("booksLan").value = selectImages;
    selectedLanguage = booksLan[selectImages];
    makeListBook();
}
window.addEventListener("load", start2, false);
function start3() {
    document.getElementById("booksLan").addEventListener("change", addActivityItem3, false);
}
function addActivityItem3() {
    selectLanguage = document.getElementById('booksLan').value;
    selectedBook = booksName[selectLanguage];
    document.getElementById("booksName").value = selectLanguage;
    selectedAuthor = booksWriter[selectLanguage];
    document.getElementById("bookAuthors").value = selectLanguage;
    selectedImage = booksImage[selectLanguage];
    document.getElementById("booksImage").value = selectLanguage;
    selectedLanguage = booksLan[selectLanguage];
    makeListBook();
}
window.addEventListener("load", start3, false);
function makeListBook() {
    let bookInTable = document.createElement('ul');
    let bookTitle = document.createElement('h1');
    let titleText = document.createTextNode(selectedBook);
    bookTitle.appendChild(titleText);
    let bookLanguage = document.createElement('li');
    let languageText = document.createTextNode(selectedLanguage);

    bookLanguage.appendChild(languageText);
    let bookAuthor = document.createElement('li');
    ;
    let authorText = document.createTextNode(selectedAuthor);
    bookAuthor.appendChild(authorText);
    bookInTable.appendChild(bookAuthor);
    bookInTable.appendChild(bookLanguage);
    let bookPic = document.createElement('li');
    let img = document.createElement('img');
    img.style.height = '120px'

    img.src = selectedImage;
    bookPic.appendChild(img);
    bookInTable.appendChild(bookPic);
    document.body.appendChild(bookTitle);
    document.body.appendChild(bookInTable);
}


