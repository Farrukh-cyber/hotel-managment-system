import React from 'react';
import './sign.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { signupUser } from '../store/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const Sign = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const signup_user = () => {
        let user = {
            username,
            email,
            password
        }
        dispatch(signupUser(user, history))
    }
    return (
        <div>
            <div className="main_div">
            <h1 className='heading' style={{padding:"10px"}}> Hotel Management System</h1>
                <div className="box">
                    <h2>Signup</h2>
                    <form action>
                        <div className="inputBox">
                            <input type="text" name="username" required onChange={(e) => setUsername(e.target.value)} value={username}/>
                            <label htmlFor>Fullname</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="username" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label htmlFor>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="username" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label htmlFor>Password</label>
                        </div>
                        <input type="button" defaultValue="Signup" onClick={signup_user} style={{padding:'5px', backgroundColor:'#02ABDC'}}/><br></br><br></br>
                        <Link to='/'>
                        Login
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Sign