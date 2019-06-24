
let newPromise = new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            let currentPosition = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
            resolve(currentPosition)
        })
    }
    else {
        let message = new Error("service is not active")
        reject(message)
    }
})
let showOff = function (currentPosition) {
    alert(currentPosition.lat);
    alert(currentPosition.lon);
    return Promise.resolve(currentPosition);
};
newPromise
    .then(showOff)
    .catch(error => console.log(error.message))


