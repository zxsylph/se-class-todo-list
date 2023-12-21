import './style.css'

console.log('App Start')

let todoRowTemplate = `
<tr>
  <td class="col-1"><input type="checkbox" /></td>
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
      todoListHtml.innerHTML = todoListHtml.innerHTML + newRow
    }

    todoNameHtml.value = ''
  })
}