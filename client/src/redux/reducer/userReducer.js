import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
  } from '../constants'

  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
const usersReducer = (state = initialState, action) => {  
    switch (action.type) {
      case USER_LIST_REQUEST: return {
          ...state,
          loading: true
      }
      case USER_LIST_SUCCESS: return {
          ...state,
          loading: false,
          users: action.payload,
      }
      case USER_LIST_FAIL: return {
          ...state,
          loading: false,
          error: action.payload
      }
      case ADD_USER_REQUEST: return {
        ...state,
        loading: true
      }
      case ADD_USER_SUCCESS: return {
        ...state,
        loading: false,
        users: [...state.users, action.payload]
      }
      case ADD_USER_FAIL: return {
        ...state,
        error: action.payload
      }
      case DELETE_USER_REQUEST: return {
        ...state,
        loading: true
      }
      case DELETE_USER_SUCCESS: return {
        ...state,
        loading: false,
        users: state.users.filter(users => users._id !== action.payload)
      }
      case DELETE_USER_FAIL: return {
        ...state,
        error: action.payload
      }
      default: return state
    }
  }

  export default usersReducer 