
const fetch = require("node-fetch");


let url1 = 'https://api.github.com/search/repositories?q=user:kseniiazar';
let url2 = 'https://api.github.com/search/repositories?q=user:AbodHassam';
let url3 = 'https://api.github.com/search/repositories?q=user:Nabbotsio';
 
 
let firstPromise = new Promise(function (resolve, reject) {
 fetch(url1).
        then(function (response) {
            if (response.status === 200) {
                console.log(response.statusText)
                response.json().then
                    (
                        function (obj) { resolve(obj) }
                    )
            }
            else {
                const reason = new Error('Can not get Data');
                reject(reason);
            }
        }
        )
}
)

let secondPromise = new Promise(function (resolve, reject) {
    fetch(url2).
           then(function (response) {
               if (response.status === 200) {
                   console.log(response.statusText)
                   response.json().then
                       (
                           function (obj) { resolve(obj) }
                       )
               }
               else {
                   const reason = new Error('Can not get Data');
                   reject(reason);
               }
           }
           )
   }
   )
   let thirdPromise = new Promise(function (resolve, reject) {
    fetch(url3).
           then(function (response) {
               if (response.status === 200) {
                   console.log(response.statusText)
                   response.json().then
                       (
                           function (obj) { resolve(obj) }
                       )
               }
               else {
                   const reason = new Error('Can not get Data');
                   reject(reason);
               }
           }
           )
   }
   )
   let showJson = function (obj) {
        console.log(typeof (obj));
        let message = JSON.stringify(obj);
        return Promise.resolve(message);
    };
    let testPromise = function () {
      Promise.all([firstPromise, secondPromise, thirdPromise])
            .then(showJson)
            .then(function (message) { setTimeout(() => { console.log(message) }, 8000) })
            .catch(error => console.log(error.reason)); // fat arrow
    };
    testPromise();



