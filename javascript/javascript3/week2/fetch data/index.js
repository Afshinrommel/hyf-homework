const fetch = require("node-fetch");
let url = "https://api.giphy.com/v1/gifs/search?api_key=N4J7y5alm4URdNP9zJnWIyEmL8fabgwI&q=leopard&limit=50&offset=0&rating=G&lang=en"
// Promise
let loadData = new Promise(function (resolve, reject) {
    fetch(url).
        then(function (response) {
            if (response.status === 200) {
                console.log(response.statusText)
                response.json().then
                    (
                        // (obj) => {
                        //     resolve(obj);
                        // }
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
let showOff = function (obj) {
    console.log(typeof (obj));
    let message = JSON.stringify(obj);
    return Promise.resolve(message);
};
// call our promise
let askMom = function () {
    loadData
        .then(showOff)
        .then(function (message) { setTimeout(() => { console.log(message) }, 8000) })
        .catch(error => console.log(error.message)); // fat arrow
};
askMom();
