import './style.css'

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
  let tr = document.createElement('tr')
  // tr = <tr></tr>
  let col1 = document.createElement('td')
  col1.classList.add('col-1')
  let input = document.createElement('input')
  input.type = 'checkbox'
  col1.appendChild(input)
  // col1 = <td class="col-1"><input type="checkbox"></td>
  tr.appendChild(col1)
  // col1 = <td class="col-1"></td>
  // <tr><td class="col-1"></td></tr>

  let col2 = document.createElement('td')
  let nameDiv = document.createElement('div')
  nameDiv.classList.add('display-name')
  nameDiv.innerText = todoValue
  col2.appendChild(nameDiv)
  tr.appendChild(col2)

  let col3 = document.createElement('td')
  col3.classList.add('col-3')
  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('d-flex', 'jc-center')
  let button = document.createElement('button')
  button.innerText = 'Del'
  button.addEventListener('click', () => {
    console.log('del button click')
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

      let newRow = todoRowTemplate.replace('{{name}}', todoNameValue)
      todoListHtml.innerHTML += newRow

      let buttonHtml = document.querySelectorAll('td > div > button')
      console.log(buttonHtml)

      buttonHtml.forEach((button) => {
        button.addEventListener('click', () => {
          console.log('del button click')
        })
      })

      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          buttonHtml[i].addEventListener('click', () => {
            console.log('del button click')
          })
        }
      }

      // let newRow = generateNewRow(todoNameValue)
      // console.log(newRow)
      // todoListHtml.appendChild(newRow)
    }

    todoNameHtml.value = ''
  })
}