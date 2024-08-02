import axios from "axios";

const recipeBtn = document.querySelector("#recipeBtn");
const recipeDiv = document.querySelector("#recipeDiv");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const recipeName = document.querySelector("#name")
const recipeIng = document.querySelector("#ing")

// const data = [
//   {
//     id: 1,
//     name: "Pizza"
//   },
//   {
//     id: 2,
//     name: "Burger"
//   },
//   {
//     id: 3,
//     name: "Pasta"
//   }
// ]

// recipeBtn.addEventListener("click", () => {
// for (let i = 0; i < data.length; i++) {
//   const newDiv = document.createElement("div");
//   const obj = data[i];
//   newDiv.innerHTML = obj.name;
//   recipeDiv.appendChild(newDiv);
// }
//   data.forEach(obj => {
//     const newDiv = document.createElement("div");
//     newDiv.innerHTML = obj.name;
//     recipeDiv.appendChild(newDiv);
//   })
// })














recipeBtn.addEventListener("click", () => {
  recipeDiv.innerHTML = "";
  searchInput.value = "";
  axios.get("https://dummyjson.com/recipes")
    .then(response => {
      response.data.recipes.forEach(item => {
        recipeDiv.innerHTML += `
        <div id="${item.id}" class="recipeItem"> ${item.id} ${item.name} </div>
      `
      })
      console.log(response.data)
    })
})

searchBtn.addEventListener("click", () => {
  recipeDiv.innerHTML = "";
  const searchValue = searchInput.value;
  axios.get('https://dummyjson.com/recipes/search?q=' + searchValue)
    .then(response => {
      response.data.recipes.forEach(item => {
        recipeDiv.innerHTML += `
      <div> ${item.id} ${item.name} </div>
    `
      })
    })
})

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value;
  console.log(value.length)
  if (value.length > 2) {
    axios.get('https://dummyjson.com/recipes/search?q=' + value)
      .then(response => {
        recipeDiv.innerHTML = "";
        response.data.recipes.forEach(item => {
          recipeDiv.innerHTML += `
      <div> ${item.id} ${item.name} </div>
    `
        })
      })
  }
})

recipeDiv.addEventListener("click", (event) => {
  const id = event.target.id;
  axios.get('https://dummyjson.com/recipes/' + id)
    .then(response => {
      console.log(response.data)
      recipeName.innerHTML = response.data.name;
      recipeIng.innerHTML = "";
      response.data.ingredients.forEach(item => {
        recipeIng.innerHTML += `
         ${item},
      `
      })
    })
})





// Controller => URL kontrol eder ve işlem yapar
// Fonksiyonlar var => Database gider sonucu verir         =>      SQL, NoSQL
// response => Data