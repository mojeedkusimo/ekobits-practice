let enterTodo = document.querySelector(".enterTodo");
let addTodoBtn = document.querySelector(".addTodoBtn");
let todoList = document.querySelector(".todoList");

let todoArray = []; // A collection for all todos is created

// let key = 0;
function addTodo(e){
    let list = document.createElement("li");
    list.innerText = enterTodo.value;

    let value = enterTodo.value;
    todoArray.push(value); // push each new todo to the collection
  
    // Now let's create a localstorage for the todos but first
    // we need to convert the array to a string because
    // localstorage only stores data in string format
  
    let strigifiedArray = JSON.stringify(todoArray);
  
    localStorage.setItem("todos", strigifiedArray);
  
    // The first parameter of the setItem() method is just a key or name
    // for whatever you have in the second parameter and that is what we will 
    // use to retrieve anything we stored.
    // For example let's say we want to print whatever we stored in the
    // localstorage out to the console, we would do this
    
    let retrievedTodos = localStorage.getItem("todos");
    let retrievedArrays = JSON.parse(retrievedTodos);
    console.log(retrievedArrays);


    if(enterTodo.value){
    todoList.appendChild(list);
    }
    enterTodo.value="";
    enterTodo.focus();
    list.addEventListener("mouseover", function(){
        list.style.textDecoration = "line-through";
    })
    list.addEventListener("click", function(){
        list.remove();
    })

//   key +=0;
}

// To confirm our localstorage is working, let's try to retrieve the
// data from the localstorage when the page reloads.
// I am just going to create a function and call it.

function getTodosAfterReload () {
    let retrievedTodos = localStorage.getItem("todos");
    let retrievedArrays = JSON.parse(retrievedTodos);
    console.log(retrievedArrays);
}

getTodosAfterReload();