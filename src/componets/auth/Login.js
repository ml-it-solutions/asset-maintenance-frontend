import React, { Component, useState } from 'react';

import TextInput from '../shared/TextInput';

class Login extends Component {
    render() {
        return(
            <div className="login">
                <div className="container mr-0">
                    <div className="row">
                        <div className="login-form col-12 col-md-8 col-lg-5 ml-auto">
                            <div className="row align-items-center">
                                <div className="col-8 mx-auto">
                                    <h1 className="text-center">WELCOME</h1>
                                    <h4 className="text-center">Login to get started</h4>
                                    <form action="post">
                                        <TextInput className="form-group" label="Username" type="text"/>
                                        <TextInput className="form-group" label="Password" type="password" />
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block">LOGIN</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;