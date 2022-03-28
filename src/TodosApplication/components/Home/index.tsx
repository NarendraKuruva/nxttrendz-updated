import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodosStore from '../../stores/TodosStore'
import {
   AddTodoButton,
   CreateTodoHeading,
   CreateTodoHeadingSubpart,
   StyledTodosMainContainer,
   TodosMainHeading,
   TodoUserInput
} from '../styledComponents'
import TodosList from '../TodosList'

interface TodosProps {
   todosStore: TodosStore
}

@inject('todosStore')
@observer
class TodosHome extends Component<TodosProps> {
   render(): JSX.Element {
      const { todosStore } = this.props
      const { userInput } = todosStore
      const newTodo = { id: uuidv4(), todoText: userInput, isChecked: false }
      const addTodo = () => {
         todosStore.onAddTodo(newTodo)
         todosStore.setUserInputEmpty()
      }
      return (
         <StyledTodosMainContainer>
            <div>
               <TodosMainHeading>Todos</TodosMainHeading>
               <CreateTodoHeading>
                  Create
                  <CreateTodoHeadingSubpart>Task</CreateTodoHeadingSubpart>
               </CreateTodoHeading>
               <TodoUserInput
                  type='text'
                  placeholder='What needs to be done?'
                  onChange={todosStore.onChangeUserInput}
                  value={userInput}
               />
               <AddTodoButton onClick={addTodo}>Add</AddTodoButton>
               <CreateTodoHeading>
                  My <CreateTodoHeadingSubpart>Tasks</CreateTodoHeadingSubpart>
               </CreateTodoHeading>
               {<TodosList todosStore={todosStore} />}
               <AddTodoButton>Save</AddTodoButton>
            </div>
         </StyledTodosMainContainer>
      )
   }
}
export default TodosHome
