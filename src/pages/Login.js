import React, { useState } from "react";
import { signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword } from "../firebase";

export default function Login() {
  var [loginEmail, setLoginEmail] = useState("");
  var [loginPassword, setLoginPassword] = useState("");
  var [SignUpEmail, setSignUpEmail] = useState("");
  var [SignUpPassword, setSignUpPassword] = useState("");
  return (
    <div id="login">
        <div className="formWrapper">
            <span className="logo">CChat</span>
            <span className="title">REGISTER</span>
            <form>
            <input
                type="text"
                value={SignUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                placeholder="E-mail Address"
            />
            <input
                type="password"
                value={SignUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                placeholder="Password"
            />
            <button
                className="login__btn"
                onClick={() => registerWithEmailAndPassword(SignUpEmail, SignUpPassword)}
            >
                Register
            </button>
            </form>
            <br />
            <hr />
            <span className="title">LOGIN</span>
            <form>
            <input
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="E-mail Address"
            />
            <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Password"
            />
            <button
                className="login__btn"
                onClick={() => logInWithEmailAndPassword(loginEmail, loginPassword)}
            >
                Login
            </button>
            </form>
            <br />
            <hr />
            <button className="google" onClick={signInWithGoogle}>
            Login with Google
            </button>
            <br />
            <hr />
        </div>
    </div>
  );
}
