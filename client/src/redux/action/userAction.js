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
import axios from 'axios'

//---------- GET LIST OF USERS ----------//

export const fetchUsers = () => (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get('/api/users').then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
}
    
  export const fetchUsersRequest = () => {
      return {
        type: USER_LIST_REQUEST
      }
  }
  
  export const fetchUsersSuccess = users => {
      return {
        type: USER_LIST_SUCCESS,
        payload: users
      }
  }
  
  export const fetchUsersFailure = error => {
      return {
        type: USER_LIST_FAIL,
        payload: error
      }
  }

  //------------- ADD USER -------------//

export const addUser = (fullname, username, password, email) => async (dispatch) => {
  try{
    dispatch(addUserRequest())
    const newUser = { fullname, username, password, email }
    axios.post("/api/adduser", newUser).then(() => {
      dispatch(addUserSuccess(newUser))
      dispatch(fetchUsers())
    })
  }catch(error){
    dispatch(addUserFailure(error.message))
  }
}


export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST
  }
}

export const addUserSuccess = user => {
  return {
    type: ADD_USER_SUCCESS,
    payload: user
  }
}

export const addUserFailure = error => {
  return {
    type: ADD_USER_FAIL,
    payload: error
  }
}


//------------- DELETE USER -------------//

export const deleteUser = (id) => async (dispatch) => {
  try{
    dispatch(deleteUserRequest())
    axios.delete(`/api/delete/${id}`, id).then(() => {
      dispatch(deleteUserSuccess(id))
      dispatch(fetchUsers())
    })
  }catch(error){
    dispatch(addUserFailure(error.message))
  }
}

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  }
}

export const deleteUserSuccess = id => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: id
  }
}

export const deleteUserFailure = error => {
  return {
    type: DELETE_USER_FAIL,
    payload: error
  }
}   