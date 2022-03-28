import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import TodosStore from '../../stores/TodosStore'
import {
   StyledCheckboxInput,
   StyledDeleteContainer,
   StyledLabelContainer,
   StyledTodoLabel,
   TodoItemContainer
} from '../styledComponents'

interface TodoItemProps {
   id: string
   todoText: string
   todosStore: TodosStore
}

interface TodoItemStateProps {
   isChecked: boolean
}

@inject('todosStore')
@observer
class TodoItem extends Component<TodoItemProps, TodoItemStateProps> {
   state: TodoItemStateProps = { isChecked: false }

   toggleIsChecked = (): void => {
      const { isChecked } = this.state
      this.setState({ isChecked: !isChecked })
   }
   deleteTodoItem = (): void => {
      const { id, todosStore } = this.props
      todosStore.onDeleteTodo(id)
   }

   render(): JSX.Element {
      const { isChecked } = this.state
      const { id, todoText } = this.props
      const checkBoxId = `checkbox${id}`
      const todoId = `${id}`

      return (
         <TodoItemContainer id={todoId}>
            <StyledCheckboxInput
               type='checkbox'
               id={checkBoxId}
               checked={isChecked}
            />
            <StyledLabelContainer>
               <StyledTodoLabel htmlFor={checkBoxId} isChecked={isChecked}>
                  {todoText}
               </StyledTodoLabel>
               <StyledDeleteContainer>
                  <div>
                     <AiOutlineDelete
                        color='#616E7C'
                        size={20}
                        onClick={this.deleteTodoItem}
                     />
                  </div>
               </StyledDeleteContainer>
            </StyledLabelContainer>
         </TodoItemContainer>
      )
   }
}
export default TodoItem
