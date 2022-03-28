import CounterStore from './CounterStore'
import TodosStore from './TodosStore'

const counterStore = new CounterStore()

export const todosStore = new TodosStore()
export default {
   counterStore
}
