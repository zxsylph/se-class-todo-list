function createNewRow(todoName: string): HTMLTableRowElement {
  let tr = document.createElement('tr')
  let col1 = document.createElement('td')
  let col2 = document.createElement('td')
  let col3 = document.createElement('td')
  let checkbox = document.createElement('input')
  let divName = document.createElement('div')
  let divButton = document.createElement('div')
  let delButton = document.createElement('button')

  checkbox.type = "checkbox"
  col1.classList.add('col-1')
  col1.append(checkbox)

  divName.classList.add('display-name')
  divName.innerText = todoName
  col2.classList.add('col-2')
  col2.append(divName)

  delButton.innerText = 'Del'
  divButton.classList.add('d-flex', 'jc-center')
  divButton.append(delButton)
  col3.classList.add('col-3')
  col3.append(divButton)

  tr.append(col1)
  tr.append(col2)
  tr.append(col3)

  return tr
}

export { createNewRow }