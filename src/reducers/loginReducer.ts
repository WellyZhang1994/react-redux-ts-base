import {
    LOGIN,
    LOGOUT
} from '../actions/type'

export const loginReducer = (state = {}, action: any) => {
    switch(action.type){
        case LOGIN:
            return action.payload
        case LOGOUT:
            return {}
        default:
            return state
    }
}