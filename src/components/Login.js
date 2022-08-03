import React, {
    useState
} from 'react'
import { Link} from 'react-router-dom'
import './login.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {
    
    
    
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      let name, value;
    
      const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
    
        setUser({ ...user, [name]: value });
      };
    
      const login = async (e) => {
        e.preventDefault();
       
    
        const { email, password } = user;
        const res = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            
          }),
        });
    
        
        const data = await res.json();
    if(data.success===true){

      toast.success(`${data.message}`);
    }else{
      toast.error(`${data.message}`);
    }
    
        setUser({
            email: "",
            password: "",
           
          });
      };
          
       
    return (
        
        <div>
            <div id='box'>
            <div id='container'>
                <div className="App">
                    <h1>Login Form</h1>
                </div>
                <div className='btns'>
                <Link className='link' to="/">
                    <div>
                    <button className='active' > Login</button>
                    </div>
                    </Link>
                    <Link className='link' to="/Signup">
                    <div>
                    <button>Sign up</button>
                    </div>
                    </Link>
                </div>
                
                <div className='inp'>
                <input type="text" id="email" name="email" 
                value={user.email}
                onChange={handleInput}
                placeholder='Email Address'/>
                </div>
                <div className='inpp'>
                <input type="password"
                value={user.password}
                onChange={handleInput}
                id="pwd" name="password" placeholder='Password'/>
                </div>
                <h4>Forgot password?</h4>
                <div className='btns btnn'>
                    <button  id='login'
                    onClick={login} > Login</button>
                </div>
                <Link className='link' to="/Signup">
                <div id='last'>
                    <p>Not a member? <span>Signup now</span></p>
                </div>
                </Link>
            </div>
            </div>
            <ToastContainer
position="top-center"

/>
        </div>
    )
}
