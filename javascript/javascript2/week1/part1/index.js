let bookIds = ["a _luke_stone_thriller—book_#_1",
   "a_gripping_british_mystery_thriller",
   "evidence_of_trust", "enough",
   "arouse", "forbidden",
   "his_to_protect",
   "slow_burn_(lost_kings_mc_#_1)",
   "mission_improbable",
   "bitter_roots","I Still Can’t Speak English",
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
let authorBooks = ["jack_mars",
   "david_bradwell",
   "stacey_joy_netzel", "danielle_norman",
   "nina_lane", "christina_phillips",
   "elena_aitken",
   "autumn_jones_lake",
   "j_j_green",
   "c_j_carmichael",
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


let bookImages = ["any-means-necessary-a-luke-stone-thriller-book-1.jpg",
   "cold-press-a-gripping-british-mystery-thriller.jpg",
   "evidence-of-trust-colorado-trust-series-1.jpg",
   "enough-40.jpg", "arouse-a-spiral-of-bliss-novel-book-one.jpg",
   "forbidden-200.jpg", "his-to-protect-5.jpg",
   "slow-burn-lost-kings-mc-1.jpg", "mission-improbable.jpg",
   "bitter-roots-3.jpg",
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
let bookLanguage = ["english", "english", "english", "english", "english", "english", "english", "english",
	 "english", "english", "english",
    "english", "english", "english",
    "english", "english", "english",
    "english",
	"english", "english"]
let show = document.createElement('button');
show.setAttribute('id', 'cleanPage');
let deleteAllPage = document.createTextNode('deleteAll');
show.appendChild(deleteAllPage);
document.body.appendChild(show);
document.getElementById('cleanPage').onclick = function () {
   allTags = document.getElementsByTagName('*');

   $("h1").detach();
   $("ul").detach();
   $("li").detach();
};

function drawPage() {
   let command = document.createElement('button');
   command.setAttribute('id', 'randomSort');
   let nameButton = document.createTextNode('random');
   command.appendChild(nameButton);
   document.body.appendChild(command);
   let randomCommand = document.getElementById('randomSort');
};
drawPage();
document.getElementById('randomSort').onclick = function () {
   let backUpBookIds = [];
   backUpBookIds = bookIds.slice();
   let RandomBookIds = [];
   let RandomAuthorBooks = [];
   let RandomBookImages = [];
   let RandomBookLanguage = [];
   function getArrayRandomElement(arr) {
      if (arr && arr.length) {
         return arr[Math.floor(Math.random() * arr.length)];
      }
   };
   let kIndex = -1;
   let totalIndex = bookIds.length;
   for (j = 0; j < totalIndex; j++) {
      let item = getArrayRandomElement(bookIds);
      let indexSelectByRandom = bookIds.indexOf(item);
      RandomBookIds.push(item);
      kIndex = kIndex + 1;
      for (let i = 0; i < bookIds.length; i++) {
         if (bookIds[i] === item) {
            bookIds.splice(bookIds.indexOf(item), 1);
            console.log(bookIds.length);
         };
      };

   };
   let compareValue;
   for (j = 0; j < RandomBookIds.length; j++) {
      compareValue = RandomBookIds[j];
      for (k = 0; k < backUpBookIds.length; k++) {
         if (backUpBookIds[k] === compareValue) {

            RandomAuthorBooks.push(authorBooks[k]);
            RandomBookImages.push(bookImages[k]);
            RandomBookLanguage.push(bookLanguage[k]);
         }
      }
   }
   bookIds = [];
   authorBooks = [];
   bookImages = [];
   bookLanguage = [];
   bookIds = RandomBookIds.slice();
   authorBooks = RandomAuthorBooks.slice();
   bookImages = RandomBookImages.slice();
   bookLanguage = RandomBookLanguage.slice();
   createPage();

};
window.onload = createPage();
function createPage() {
   let bookObject = {};
   let bookArray = [];
   for (i = 0; i < bookIds.length; i++) {
      let book = {
         bookId: bookIds[i],
         author: authorBooks[i],
         language: bookLanguage[i],
         imageSrc: bookImages[i]
      }
      bookArray.push(book);
   }
   Object.assign(bookObject, bookArray);
   index = -1;
   makeListBook();
   function makeListBook() {
      for (let propt in bookObject) {
         index = index + 1;
         let bookInTable = document.createElement('ul');
         let bookTitle = document.createElement('h1');
         let titleText = document.createTextNode(bookObject[propt]['bookId']);
         bookTitle.appendChild(titleText);
         let bookLanguage = document.createElement('li');
         let languageText = document.createTextNode(bookObject[propt]['author']);
         bookLanguage.appendChild(languageText);
         let bookAuthor = document.createElement('li');
         let authorText = document.createTextNode(bookObject[propt]['language']);
         bookAuthor.appendChild(authorText);
         bookInTable.appendChild(bookAuthor);
         bookInTable.appendChild(bookLanguage);
         let bookPic = document.createElement('li');

         let img = document.createElement('img');

         img.style.height = '220px'
         img.src = bookObject[propt]['imageSrc']
         bookPic.appendChild(img);
         bookInTable.appendChild(bookPic);
         document.body.appendChild(bookTitle);
         document.body.appendChild(bookInTable);
      }
   };
   addCss();
};
function addCss() {
   let allTags = document.getElementsByTagName('*');
   for (j = 0; j < allTags.length; j++) {
      if (allTags[j].nodeName === "H1") {
         allTags[j].style.border = "2px black solid";
         allTags[j].style.padding = "25px";
         allTags[j].style.backgroundColor = "yellow";
         allTags[j].style.fontSize = "25px";
      }
      else {
         allTags[j].style.backgroundColor = "pink"
         allTags[j].style.fontSize = "25px";
         allTags[j].style.border = "2px grey solid"
      }
   }
}




