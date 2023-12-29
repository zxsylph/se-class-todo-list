function saveTodosToLocalStorage(todos) {
  return () => {
    let todosText = JSON.stringify(todos)
    window.localStorage.setItem('todos', todosText)
  }
}

export { saveTodosToLocalStorage }