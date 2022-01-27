import { combineReducers } from 'redux';

import { 
    themeReducer,
    themeSelectedReducer
} from './themeReducer'

import {
    loginReducer
} from './loginReducer'

import
{
    ipInfoReducer
} from './ipInfoReducer'

export const rootReducer = combineReducers({
    theme: themeReducer,
    themeSelected: themeSelectedReducer,
    loginUser: loginReducer,
    ipInfo: ipInfoReducer
})

export type RootState = ReturnType<typeof rootReducer>