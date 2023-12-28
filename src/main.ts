import './style.css'

type Todo = {
  id: number;
  title: string | undefined;
  completed: boolean;
}

let todos: Todo[] = []

console.log('App Start')

let todoRowTemplate = `
<tr>
  <td class="col-1">
    <input type="checkbox" />
  </td>
  <td>
    <div class="display-name">{{name}}</div>
  </td>
  <td class="col-3">
    <div class="d-flex jc-center">
      <button>Del</button>
    </div>
  </td>
</tr>
`

function generateNewRow(todoValue: string) {
  console.log('tr in html ', document.querySelectorAll('tr').length)
  let id = document.querySelectorAll('tr').length + 1
  let tr = document.createElement('tr')
  tr.id = "id" + id
  // tr = <tr></tr>
  let col1 = document.createElement('td')
  col1.classList.add('col-1')
  let doneButton = document.createElement('button')
  doneButton.innerText = 'Done'
  // let input = document.createElement('input')
  // input.type = 'checkbox'
  // col1 = <td class="col-1"><input type="checkbox"></td>
  col1.appendChild(doneButton)
  tr.appendChild(col1)
  // col1 = <td class="col-1"></td>
  // <tr><td class="col-1"></td></tr>

  let col2 = document.createElement('td')
  let nameDiv = document.createElement('div')
  nameDiv.classList.add('display-name')
  nameDiv.innerText = todoValue
  col2.appendChild(nameDiv)
  tr.appendChild(col2)

  if (doneButton != null) {
    doneButton.addEventListener('click', () => {
      console.log('done button clicked')
      if (nameDiv.classList.contains('bg-green')) {
        nameDiv.classList.remove('bg-green')
      } else {
        nameDiv.classList.add('bg-green')
      }
    })
  }

  let col3 = document.createElement('td')
  col3.classList.add('col-3')
  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('d-flex', 'jc-center')
  let button = document.createElement('button')
  button.innerText = 'Del'
  button.addEventListener('click', () => {
    console.log('del button click', todoValue)
    let trHtml = document.querySelector('#id' + id)
    // let trHtml = document.querySelector(`#${todoValue}`)
    console.log(trHtml)
    trHtml.remove()
  })
  buttonDiv.appendChild(button)
  col3.appendChild(buttonDiv)
  tr.appendChild(col3)

  return tr
}

console.log(generateNewRow('abc'))

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

      // let newRow = todoRowTemplate.replace('{{name}}', todoNameValue)
      // todoListHtml.innerHTML += newRow

      // let buttonHtml = document.querySelectorAll('td > div > button')
      // console.log(buttonHtml)

      // buttonHtml.forEach((button) => {
      //   button.addEventListener('click', () => {
      //     console.log('del button click')
      //   })
      // })

      // for (let i = 0; i < 10; i++) {
      //   if (i % 2 == 0) {
      //     buttonHtml[i].addEventListener('click', () => {
      //       console.log('del button click')
      //     })
      //   }
      // }

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
      displayTodos()
    }

    todoNameHtml.value = ''
  })
}

function clearTodoHtml() {
  let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
  if (todoListHtml != null) {
    todoListHtml.innerHTML = ''
  }
}

function displayTodos() {
  let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
  if (todoListHtml != null) {
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i]
      let newRow = generateNewRow(todo.title)
      todoListHtml.appendChild(newRow)
    }
  }
}

document.querySelector('#saveButton').addEventListener('click', saveTodosToLocalStorage)

function saveTodosToLocalStorage() {
  let todosText = JSON.stringify(todos)
  window.localStorage.setItem('todos', todosText)
}

document.querySelector('#loadButton').addEventListener('click', () => {
  console.log('load button clicked')

  let todosText = window.localStorage.getItem('todos')
  todos = JSON.parse(todosText)

  console.log(todos)

  clearTodoHtml()
  displayTodos()
})