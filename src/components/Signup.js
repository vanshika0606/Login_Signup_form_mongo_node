import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const backHome = async (e) => {
    e.preventDefault();
    // console.log(user)

    const { email, password, confirmPassword } = user;
    const res = await fetch("/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
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
        confirmPassword: "",
      });
  };

  return (
    <div>
      <div id="box">
        <div id="container">
          <div className="App">
            <h1>Signup Form</h1>
          </div>
          <div className="btns">
            <Link className="link" to="/">
              <div>
                <button> Login</button>
              </div>
            </Link>
            <Link className="link" to="/Signup">
              <div>
                <button className="active">Sign up</button>
              </div>
            </Link>
          </div>
          <form method="post">
            <div className="inp">
              <input
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Email Address"
              />
            </div>
            <div className="inpp">
              <input
                type="password"
                id="pwd"
                onChange={handleInput}
                name="password"
                value={user.password}
                placeholder="Password"
              />
            </div>
            <div className="inpp">
              <input
                type="password"
                id="pwd"
                onChange={handleInput}
                name="confirmPassword"
                value={user.confirmPassword}
                placeholder="Confirm password"
              />
            </div>
            <br />
            <div className="btns btnn">
              <button type="submit" id="signup" onClick={backHome}>
                Signup
              </button>
            </div>
          </form>
          <br />
        </div>
      </div>
      <ToastContainer
position="top-center"
/>
    </div>
  );
}
