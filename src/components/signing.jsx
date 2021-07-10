import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/action';
import './sign.css'
const Signing = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
   
    const login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user,history))
    }
    return (
        <div>
            <div className="main_div">
                  <h1 className='heading' style={{padding:"10px"}}> Hotel Management System</h1>
                <div className="box">
                    <h2>Login Form</h2>
                    <form action>
                        <div className="inputBox">
                            <input type="text" name="Email" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <label htmlFor>Email</label>
                        </div>

                        <div className="inputBox">
                            <input type="password" name="username" required onChange={(e) => setPassword(e.target.value)} value={password}/>
                            <label htmlFor>Password</label>
                        </div>
                        <input type="button" defaultValue="login" onClick={login} style={{padding:'5px', backgroundColor:'#02ABDC'}}/><br></br><br></br>
                        <Link to='/sign'>
                       Signup
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signing