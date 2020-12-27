let enterTodo = document.querySelector(".enterTodo");
let addTodoBtn = document.querySelector(".addTodoBtn");
let todoList = document.querySelector(".todoList");

let key = 0;
function addTodo(e){
    let list = document.createElement("li");
    list.innerText = enterTodo.value;
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

  key +=0;
  let value = enterTodo.value;

  localStorage.setItem("key", "value");

}