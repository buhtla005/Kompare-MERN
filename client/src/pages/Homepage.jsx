import React from 'react'
import UserTable from '../components/user-table/UserTable'
import RegisterForm from '../components/register/RegisterForm'
import './Homepage.css'


function Homepage() {
    return (
        <div className="container">
            <div className="content-to-mid">
                <div className="register-container">
                    <div className="naslov">
                        <h2>Register form</h2>
                    </div>
                    <div className="register">
                        <RegisterForm/>
                    </div>
                </div>
                <div className="table-container">
                    <div className="naslov">
                        <h2>User table</h2>
                    </div>
                    <div className="table">
                        <UserTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
