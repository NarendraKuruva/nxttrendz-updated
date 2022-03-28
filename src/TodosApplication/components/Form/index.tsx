import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import TodosStore from '../../stores/TodosStore'
import TodosHome from '../Home'

interface TodoItemsProps {
   todosStore: TodosStore
}

@inject('todosStore')
@observer
class TodoProject extends Component<TodoItemsProps> {
   saveTodoItems = (): void => console.log()
   render(): JSX.Element {
      const { todosStore } = this.props
      return <TodosHome todosStore={todosStore} />
   }
}
export default TodoProject
