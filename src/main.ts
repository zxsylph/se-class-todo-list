import './style.css'

console.log('App Start')

let todoRowTemplate = `<tr>
              <td class="col-1"><input type="checkbox" /></td>
              <td>
                <div class="display-name">Name</div>
              </td>
              <td class="col-3">
                <div class="d-flex jc-center">
                  <button>Del</button>
                </div>
              </td>
            </tr>`

let addButtonHtml = document.querySelector('#addButton')
if (addButtonHtml != null) {
  addButtonHtml.addEventListener('click', () => {
    console.log('Add Button Clicked')

    let todoNameHtml = document.querySelector<HTMLInputElement>('#todoName')
    let todoNameValue = todoNameHtml?.value

    if (todoNameValue == '') {
      alert('Todo Name is Empty')
      return
    }

    console.log('Todo Name is not Empty')
    console.log('todoname', todoNameValue)

    let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
    if (todoListHtml != null) {
      todoListHtml.innerHTML = todoRowTemplate
    }

  })
}