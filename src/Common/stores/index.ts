import TodosStore from '../../TodosApplication/stores/TodosStore'
import { networkCallWithFetch } from '../utils/APIUtils'
import NxtTrendzServiceApi from '../../NxtTrendz/services/NxtTrendzService/index.api'
import NxtTrendzStore from '../../NxtTrendz/stores/NxtTrendzStore'
import CounterStore from './CounterStore'

const nxtTrendzServiceApi = new NxtTrendzServiceApi(networkCallWithFetch)

const counterStore = new CounterStore()

const todosStore = new TodosStore()

const nxtTrendzStore = new NxtTrendzStore(nxtTrendzServiceApi)
export default {
   counterStore,
   todosStore,
   nxtTrendzStore
}
