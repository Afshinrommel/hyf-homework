passTime = false;
let newPromise = new Promise(function (resolve, reject) {
    setTimeout(() => { console.log("time is passed") }, 10000)
    setTimeout(() => {
        passTime = true;
     //   let text = "time is passed";
        resolve(passTime)
    }, 7000)
    if (passTime === false) {
        let message = new Error('time is not reached')
        reject(message)
    }
})
newPromise
    .then(() => {
        console.log('Called after 3 seconds')
    })
    .catch(error => console.log(error.message)) 