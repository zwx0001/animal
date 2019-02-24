import { handleActions } from 'redux-actions'
import { GET_DATA } from '../types/counter'
const initState = {
    arr: []
}
export default handleActions({
    [GET_DATA](state, action) {
        let newState = {...state };
        newState.arr.push({
            name: action.payload.name,
            sex: action.payload.sex,
            age: action.payload.age,
            val: action.payload.val,
            kind: action.payload.kind,
            local: action.payload.local
        })
        return newState;
    }
}, initState)