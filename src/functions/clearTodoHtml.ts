function clearTodoHtml() {
  let todoListHtml = document.querySelector<HTMLTableElement>('#todoList')
  if (todoListHtml != null) {
    todoListHtml.innerHTML = ''
  }
}

export { clearTodoHtml }