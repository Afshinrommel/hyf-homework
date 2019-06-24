let bookObj = {
    1: {
        "title": "",
        "language": "",
        "author": ""
    },
    2: {
        "title": "",
        "language": "",
        "author": ""
    },
    3: {
        "title": "",
        "language": "",
        "author": ""
    },
    4: {
        "title": "",
        "language": "",
        "author": ""
    },
    5: {
        "title": "",
        "language": "",
        "author": ""
    },
    6: {
        "title": "",
        "language": "",
        "author": ""
    },
    7: {
        "title": "",
        "language": "",
        "author": ""
    },
    8: {
        "title": "",
        "language": "",
        "author": ""
    },
    9: {
        "title": "",
        "language": "",
        "author": ""
    },
    10: {
        "title": "",
        "language": "",
        "author": ""
    },
};
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
let bookslan = [
    "english", "english", "english",
    "english", "english", "english",
    "english", "english", "english",
    "english"
];
let index = 0;
let jIndex = -1;
for (let key in bookObj) {
    jIndex = jIndex + 1;
    index = index + 1;
    stringIndex = index.toString();
    if (key === stringIndex) {
        bookObj[key]['title'] = booksName[jIndex];
        bookObj[key]['language'] = bookslan[jIndex];
        bookObj[key]['author'] = booksWriter[jIndex];
    }
};
index = -1;
makeListBook();
function makeListBook() {
    for (let propt in bookObj) {
        index = index + 1;
        let bookInTable = document.createElement('ul');
        let bookTitle = document.createElement('h1');
        let titleText = document.createTextNode(bookObj[propt]['title']);
        bookTitle.appendChild(titleText);
        let bookLanguage = document.createElement('li');
        let languageText = document.createTextNode(bookObj[propt]['language']);
        bookLanguage.appendChild(languageText);
        let bookAuthor = document.createElement('li');
        let authorText = document.createTextNode(bookObj[propt]['author']);
        bookAuthor.appendChild(authorText);
        bookInTable.appendChild(bookAuthor);
        bookInTable.appendChild(bookLanguage);
        let bookPic = document.createElement('li');
        let img = document.createElement('img');
        img.style.height = '120px'
        img.src = booksImage[index];
        bookPic.appendChild(img);
        bookInTable.appendChild(bookPic);
        document.body.appendChild(bookTitle);
        document.body.appendChild(bookInTable);
    }
};
