import * as mutations from './mutations_types'

export default {
  [mutations.setDados] (state, data) {
    state.dados = data
  }
}
