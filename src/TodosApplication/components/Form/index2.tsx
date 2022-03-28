import React, { Component } from 'react'
// import TodosContext from '../../Context'
// import TodosHome from '../Home'

// interface TodosStateProps {
//    todosList: { id: string; todoText: string; isChecked: boolean }[]
// }
// class TodoProject extends Component<any, TodosStateProps> {
//    state: TodosStateProps = { todosList: [] }
//    deleteTodoItem = (id: string) => {
//       const { todosList } = this.state
//       const updatedList = todosList.filter(
//          eachCartItem => eachCartItem.id !== id
//       )
//       this.setState({ todosList: updatedList })
//    }

//    onAddTodoItem = (todo: {
//       id: string
//       todoText: string
//       isChecked: boolean
//    }) => {
//       const { todosList } = this.state
//       this.setState({ todosList: [...todosList, todo] })
//    }
//    render() {
//       const { todosList } = this.state
//       return (
//          <TodosContext.Provider
//             value={{
//                todosList: todosList,
//                deleteTodo: this.deleteTodoItem,
//                addTodo: this.onAddTodoItem,
//                saveTodos: this.saveTodoItems
//             }}
//          >
//             {<TodosHome />}
//          </TodosContext.Provider>
//       )
//    }
// }

// export default TodoProject
