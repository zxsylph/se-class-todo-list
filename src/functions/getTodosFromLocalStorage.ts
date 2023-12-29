function getTodosFromLocalStorage() {
  let todosText = window.localStorage.getItem('todos')
  todos = JSON.parse(todosText)

  return todos
}