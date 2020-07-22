import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/action/userAction'
import './RegisterForm.css'

function RegisterForm(props) {
    
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    
    return (
        <div className="form-content">
            <form>
                <div className="position-div">
                    <label htmlFor="fullname">Full Name: </label>
                    <input 
                        type="text" 
                        className="input-field" 
                        id="fullname"
                        value={fullname}
                        onChange={ e => setFullname(e.target.value)}
                        required
                        autoComplete="true" 
                    />
                </div>
                <div className="position-div">
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        className="input-field" 
                        id="username"
                        value={username}
                        onChange={ e => setUsername(e.target.value)}
                        required
                        autoComplete="true"  
                    />
                </div>
                <div className="position-div">
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        className="input-field" 
                        id="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        required
                        autoComplete="true"  
                    />
                </div>
                <div className="position-div">
                <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        className="input-field" 
                        id="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        required
                        autoComplete="true"  
                    />
                </div>
                <div className="position-div">
                    <button className="submit-button" onClick={() => { dispatch(addUser(fullname, username, password, email))}}>Add user</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
