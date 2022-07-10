import React, {
    useState
} from 'react'
import { Link} from 'react-router-dom'
import './login.css'
export default function Login() {
       
          
       
    return (
        
        <div>
            <div id='box'>
            <div id='container'>
                <div className="App">
                    <h1>Login Form</h1>
                </div>
                <div className='btns'>
                    <button className='active' ><Link className='link' to="/Login"> Login</Link></button>
                    <button><Link className='link' to="/Signup">Sign up</Link></button>
                </div>
                
                <div className='inp'>
                <input type="text" id="email" name="email" placeholder='Email Address'/>
                </div>
                <div className='inpp'>
                <input type="password" id="pwd" name="pwd" placeholder='Password'/>
                </div>
                <h4>Forgot password?</h4>
                <div className='btns'>
                    <button  id='login' > Login</button>
                </div>
                <div id='last'>
                    <p>Not a member? <span>Signup now</span></p>
                </div>
            </div>
            </div>
        </div>
    )
}
