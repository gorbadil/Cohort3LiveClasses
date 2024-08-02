// Promise
// Async/Await

// Fonksiyonun sayfa yüklendiğinde tetik almaması için
// Promise, başarılı yada başarısız bilinmeyen, ne kadar sürmesi gerektiği bilinmeyen




// Fetching => Backend / DB veri çekme

// Async/await

// async function deneme() {
//     console.log("Start");
//     await sleep()
//     console.log("Continue");




//     await sleep()
//     console.log("End");



//     sleep().then(() => {
//         console.log("Continue");
//     })




// }

// deneme()

// Promise => return bekleme
// resolve, reject

// function sleep() {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, 1000)
//     })
// }

// Promise => then, catch, finally



// fetch

// function getir() {
// const data = await fetch("https://dummyjson.com/users") // => return
// const json = await data.json()
// console.log(json)

//     const fetchData = fetch("https://dummyjson.com/users")
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log("olmadı"))
//         .finally(() => console.log("İşlem bitti"))
// }

// getir()


// NodeJS




// const newPromise = new Promise((suc, err) => {
//     let success = true
//     if (success) {
//         suc("başarılı oldu return datası") // then
//     } else {
//         err("Error") // catch
//     }
// })






// newPromise.then((s) => {
//     console.log(s)
// }).catch((e) => {
//     console.log(e)
// })







const paraf = document.querySelector("#toTurnRed")
function turnRed() {
    paraf.classList.toggle("red")
}

const btn = document.querySelector("#turnRed")
btn.addEventListener("click", function () {
    turnRed()
})

