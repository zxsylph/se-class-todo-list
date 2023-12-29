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

export { generateNewRow }