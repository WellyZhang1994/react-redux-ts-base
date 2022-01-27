import {
    FETCH_IP_INFO
} from '../actions/type'

export const ipInfoReducer = (state = {}, action: any) => {
    switch(action.type){
        case FETCH_IP_INFO:
            return action.payload
        default:
            return state
    }
}