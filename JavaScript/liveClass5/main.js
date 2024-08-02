// Elements

const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const toast = document.getElementById('toast');

// Variables
const localTodos = JSON.parse(localStorage.getItem("todos"));

// Event Listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
})

if (localTodos) {
  localTodos.forEach(todo => addTodo(todo))
}


// Functions

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  const todoLi = document.createElement('li');
  // <li> </li>
  todoLi.innerText = todoText;
  if (todo && todo.completed) {
    todoLi.classList.add('completed');
  }

  todoLi.addEventListener("click", () => {
    todoLi.classList.toggle('completed');
    funcLocalTodos();
  })

  todoLi.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoLi.remove();
    funcLocalTodos();
  })

  todos.appendChild(todoLi);
  input.value = '';

  funcLocalTodos();

}

function funcLocalTodos() {
  const allTodos = todos.querySelectorAll("li");
  const addToLocal = [];
  allTodos.forEach(todo => {
    addToLocal.push({
      text: todo.innerText,
      completed: todo.classList.contains('completed')
    })
  })
  localStorage.setItem("todos", JSON.stringify(addToLocal));
  console.log(addToLocal);
}


// Text, complete


// const localStorageSample = {
//   number: 1,
//   text: "Hello",
//   Array: [1, 2, 3],
// }

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

yellow.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("yellow clicked");
})

blue.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("blue clicked");
})

red.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("red clicked");
})



const local = {
  mycat: {
    name: "Kitty",
    age: 2,
    color: "white"
  }
}


// localStorage.setItem(param1-key, param2-value);
// localStorage.getItem(param1-key); => return-value

// function getItem(key) {
//   return value
// }