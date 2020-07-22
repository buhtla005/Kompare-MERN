import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../../redux/action/userAction'
import './UserTable.css'

const UserTable = (props) => {

    const userData = useSelector((state) => state.listUser)
    const { loading, users, error } = userData
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div className="table-content">
        {
            loading ? (<h2 className="extra-info">Loading...</h2>) : 
            ( error ? (<h2 className="extra-info">{ error }</h2>) : 
            (
                <table className="table-main">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map( user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.fullname}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td><button className="table-button" onClick={() => dispatch(deleteUser(user._id))}>Delete</button></td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>    
            ))
        }
        </div> 
    )
}

export default UserTable
