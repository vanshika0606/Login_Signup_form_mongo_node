import React, {
    useState
} from 'react'
import './login.css'
import { Link} from 'react-router-dom'
export default function Signup() {
    // 
    return (

        <div>
            <div id='box'>
            <div id='container'>
                <div className="App">
                    <h1>Signup Form</h1>
                </div>
                <div className='btns'>
                    <button className='link' ><Link className='link' to="/Login"> Login</Link></button>
                    <button className='active'><Link className='link' to="/Signup">Sign up</Link></button>
                </div>
                
                <div className='inp'>
                <input type="text" id="email" name="email" placeholder='Email Address'/>
                </div>
                <div className='inpp'>
                <input type="password" id="pwd" name="pwd" placeholder='Password'/>
                </div>
                <div className='inpp'>
                <input type="password" id="pwd" name="pwd" placeholder='Confirm password'/>
                </div>
                <br/>
                <div className='btns'>
                    <button  id='login' > Signup</button>
                </div>
                <br/>
            </div>
            </div>
        </div>
    )
}
