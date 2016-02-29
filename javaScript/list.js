console.log("connected!")
var todos = ["buy new turtle"]

var input = prompt("what would you like to do");

while(input !== "quit") {

  if(input === "list") {
    listTodos();
    }
  else if(input === "new") {
    addTodo();
    }
  else if(input === "delete") {
    rmTodo();
    }
  input = prompt("what would you like to do");

}
console.log("end");
function listTodos() {
  console.log("**************")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**************")
}
function addTodo() {
  var newTodo = prompt("enter new todo");
  todos.push(newTodo);
}
function rmTodo() {
  var index = prompt("Enter index of todo to delete");
  todos.splice(index,1);
  console.log("Deleted Todo")
}
