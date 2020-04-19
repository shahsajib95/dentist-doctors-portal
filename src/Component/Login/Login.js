import React from 'react';
import loginPic from '../../img/Group.png'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <div className="login-form">
                        <h3 className="text-center mb-5">Login</h3>
                    <div className="form-group p-5">
                    <p className="mb-2 text-muted">User name</p>
                    <input type="text" className="form"></input>
                    <p  className="mt-5 text-muted">Password</p>
                    <input type="text" className="form"></input>
                    <button className="btn btn-use mt-4">Sign in</button>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="w-100" src={loginPic} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default Login;