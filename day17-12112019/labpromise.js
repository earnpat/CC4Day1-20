// var fs = require('fs');
// function readMessage(){
//  return new Promise(function (fulfill, reject){
//     fs.readFile('labcallback.js', 'utf8', function (err, res){
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }
// function writeMessage(dat){
//  return new Promise(function (fulfill, reject){
//     fs.writeFile('out.txt', dat, function (err, res){
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }
// readMessage().then(writeMessage).then(function(){
//  console.log('success');
// });






// day 06112019
// let promise = new Promise(function (resolve, reject) {
//     let answer = true;
//     if(answer==true) resolve("complete")
//     else if(answer==false) reject("error123")
//     // setTimeout(() => resolve("done"), 1000)
//     // setTimeout(() => reject(new Error("error")), 1000)
// })

// promise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })






// day 06112019 slide 17
function setTimeoutAndLog(input) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(input)
            resolve(input)
        }, 1000)
    })
}

let all_setTimeout = async () => {
await setTimeoutAndLog("a")
await setTimeoutAndLog("b")
await setTimeoutAndLog("c")
await setTimeoutAndLog("d")
}

all_setTimeout()

// setTimeoutAndLog("a").then(result => {
//     setTimeoutAndLog("b").then(result => {
//         setTimeoutAndLog("c").then(result => {
//             setTimeoutAndLog("d").then(result => {
//             })
//         })
//     })
// })








// let promise = new Promise(function setTimeoutAndLog(input) {
//     let answer = true;
//     if(answer==true) resolve("complete")
//     else if(answer==false) reject("error123")
//     // setTimeout(() => resolve("done"), 1000)
//     // setTimeout(() => reject(new Error("error")), 1000)
// })

// promise.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

// setTimeout(function () {
//     setTimeout(function () {
//         setTimeout(function () {
//             setTimeout(function () {
//                 console.log('d');
//                }, 1000);
//             console.log('c');
//            }, 1000);
//         console.log('b');
//        }, 1000);
//     console.log('a');
//    }, 1000);

   