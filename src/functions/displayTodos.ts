import { generateNewRow } from './generateNewRow';

function displayTodos(todos) {
  let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
  console.log(todoListHtml)
  if (todoListHtml != null) {
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i]
      let newRow = generateNewRow(todo.title)
      todoListHtml.appendChild(newRow)
    }
  }
}

export { displayTodos }