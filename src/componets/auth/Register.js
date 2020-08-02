import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import TextInput from '../shared/TextInput';

class Register extends Component {
    render() {
        return(
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="register-form col-12 ml-auto">
                            <form action="post" className="w-100">
                            <div className="row">
                                    <div className="col-12">
                                        <h1>Register</h1>
                                    </div>
                                    <TextInput className="form-group col-12 col-md-6" label="Name" type="text"/>
                                    <TextInput className="form-group col-12 col-md-6" label="Surname" type="text"/>
                                    <TextInput className="form-group col-12 col-md-6" label="Email Address" type="text"/>
                                    <TextInput className="form-group col-12 col-md-6" label="Password" type="password"/>
                                    <TextInput className="form-group col-12 col-md-6" label="Confirm Password" type="password"/>
                                    <div className="form-group col-10 col-md-6 mx-auto">
                                        <input type="checkbox" /> <label htmlFor="">Active</label>
                                    </div>
                                    <div className="form-group col-10 col-md-6 mx-auto">
                                        <button className="btn btn-primary btn-block">REGISTER</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Register);