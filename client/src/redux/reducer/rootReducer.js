import { combineReducers } from 'redux'
import usersReducer from './userReducer'

const rootReducer = combineReducers({
    listUser: usersReducer
})

export default rootReducer