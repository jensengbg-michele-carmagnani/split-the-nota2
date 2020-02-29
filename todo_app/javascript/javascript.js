

let todosList = [];
let todoItems = '';


document.getElementById('submit-todo').addEventListener('click', function(){
    let todo = document.getElementById('todo').value;
    todos = todo;
    todosList.push(todo)
    //console.log(todosList);
    // lopar igenom vår array 
    // för varje element skapa en li-tagg
    // sedan lägga till vår li-tagg 
    todoItems = '';

    for (let i = 0, i < todosList.length; i++){
       // console.log[i];
       todoItems += '<li>' + todoItems[i] + '</li>';
    }
    document.getElementById('todo-list').innerHTML = todoItems;
});
