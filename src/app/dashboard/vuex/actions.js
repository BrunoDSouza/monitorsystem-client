import * as mutations from './mutations_types'
import { getDados } from '../services'

export const setDados = (context) => context.commit(mutations.setDados, getDados())
