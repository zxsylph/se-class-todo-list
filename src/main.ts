import './style.css'

import { generateNewRow } from './functions/generateNewRow'
import { saveTodosToLocalStorage } from './functions/saveTodosToLocalStorage'
import { clearTodoHtml } from './functions/clearTodoHtml'
import { displayTodos } from './functions/displayTodos'

type Todo = {
  id: number;
  title: string | undefined;
  completed: boolean;
}

let todos: Todo[] = []

console.log('App Start')

let addButtonHtml = document.querySelector('#addButton')
if (addButtonHtml != null) {
  addButtonHtml.addEventListener('click', () => {
    console.log('Add Button Clicked')

    let todoNameHtml = document.querySelector<HTMLInputElement>('#todoName')
    let todoNameValue = todoNameHtml?.value

    document.querySelector('#errorMessage').classList.add('d-none')
    if (todoNameValue == '') {
      document.querySelector('#errorMessage').classList.remove('d-none')
      return
    }

    console.log('Todo Name is not Empty')
    console.log('todoname', todoNameValue)

    let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
    if (todoListHtml != null) {

      let newTodo: Todo = {
        id: todos.length + 1,
        title: todoNameValue,
        completed: false
      }

      todos.push(newTodo)
      console.log('todos', todos)

      // saveTodosToLocalStorage()

      // let newRow = generateNewRow(todoNameValue)
      // console.log(newRow)
      // todoListHtml.appendChild(newRow)

      clearTodoHtml()
      displayTodos(todos)
    }

    todoNameHtml.value = ''
  })
}

document.querySelector('#saveButton').addEventListener('click', saveTodosToLocalStorage(todos))

document.querySelector('#loadButton').addEventListener('click', () => {
  console.log('load button clicked')

  let todosText = window.localStorage.getItem('todos')
  console.log(todosText)
  todos = JSON.parse(todosText)

  console.log(todos)

  clearTodoHtml()
  displayTodos(todos)
})