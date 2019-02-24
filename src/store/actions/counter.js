import { createAction } from 'redux-actions'
import { GET_DATA } from '../types/counter'
export const getdata = createAction(GET_DATA, (name, kind, val, age, sex, local) => {
    return {
        name,
        kind,
        val,
        sex,
        local,
        age
    }
})