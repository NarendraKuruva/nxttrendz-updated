import { inject, observer } from 'mobx-react'
import React from 'react'
import TodosStore from '../../stores/TodosStore'
import { TodosListContainer } from '../styledComponents'
import TodoItem from '../TodoItem'

interface TodosListProps {
   todosStore: TodosStore
}

const TodosList = inject('todosStore')(
   observer((props: TodosListProps) => {
      const { todosStore } = props
      const { todosList } = todosStore
      return (
         <TodosListContainer>
            {todosList.map(eachTodo => (
               <TodoItem
                  id={eachTodo.id}
                  todoText={eachTodo.todoText}
                  key={eachTodo.id}
                  todosStore={todosStore}
               />
            ))}
         </TodosListContainer>
      )
   })
)

export default TodosList
