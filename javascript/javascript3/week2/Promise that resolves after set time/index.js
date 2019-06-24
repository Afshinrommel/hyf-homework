
let notThisFunctionName = function(num){
let newpromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
       // console.log("I am called asynchronously")
        let text = "I am called asynchronously"
        console.log(text);
        resolve(text)
    },num)
})
}
notThisFunctionName(5000)






















// promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve({
//         message: "The man likes to keep his word",
//         code: "aManKeepsHisWord"
//       });
//     }, 10 * 1000);
//     console.log(resolve);
//   });
//   console.log(promise2);


// const oneSecondTimeoutPromise = new Promise((resolve) => {
//     //console.log(typeof resolve);
//     setInterval(() => {
//         const resolveObject = {
//             name: 'benjamin'
//         };
//         console.log(resolveObject);
//         resolve(resolveObject);
//     }, 1000);
// });