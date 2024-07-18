// const btnDiv = document.querySelector('.buttons');


// ne zaman değiştireceğim
// btnDiv.addEventListener("click", (event) => {
// const id = event.target.id;
// res.classList.toggle(id)
// })

// Neyi değiştireceğim
// const res = document.querySelector('.res');



// tıklanan butonun id => biliyoruz
// id'ye göre => classList => css ne yapabiliyorsam yapabilirim
// id'ye göre => innerHTML => element de ekleyebilirim

const ham = document.querySelector("ul");
const btnHam = document.querySelector(".hamburger")

function toggleHam() {
  if (ham.classList.contains("show")) {
    ham.classList.remove("show")
  } else {
    ham.classList.add("show")
  }
  // ham.classList.toggle("show")
}

// btnHam.addEventListener("click", () => toggleHam())
// const userInput = document.querySelector(".userInput");

// userInput.addEventListener("input", (event) => {
//   if (event.target.value.includes("@")) {
//     alertP.innerHTML = ""
//   } else {
//     alertP.innerHTML = "Lütfen geçerli bir mail adresi giriniz"

//   }
// })

// const alertP = document.querySelector(".alert");



// window.addEventListener("blur", () => {
//   alertP.innerHTML = "Sayfa dışında"
// })

// window.addEventListener("focus", () => {
//   alertP.innerHTML = "Sayfaya dönüldü"
// })


// document.addEventListener("mousemove", (event) => {
//   document.querySelector("h3").innerHTML = `X: ${event.clientX} Y: ${event.clientY}`
// })



const list = document.querySelector(".list");
const userInput = document.querySelector(".userInput");

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    list.innerHTML += `<li>${userInput.value}</li>`
    userInput.value = ""
  }
})
