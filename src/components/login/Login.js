import React from 'react';
import LoggedOutNavigation from '../navigation/LoggedOutNavigation'
import TextInput from '../shared/TextInput';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="login">
            <LoggedOutNavigation />
            <div className="login-form">
                <div>
                    <h1 className="cl-white text-center">Welcome</h1>
                    <h3 className="cl-white text-center">Login to get started</h3>
                    <TextInput type="text" className="form-group" name="username" label="Username" />
                    <TextInput type="password" className="form-group" name="password" label="Password" />
                    <div className="my-3 d-flex"><a className="cl-white ml-auto" href="#">Forgot Password?</a></div>
                    <Link to="/dashboard" className="btn btn-primary mx-auto">Login</Link>
                </div>
            </div>
        </div>
    )
}