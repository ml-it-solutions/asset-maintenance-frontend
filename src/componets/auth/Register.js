import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import TextInput from '../shared/TextInput';

class Register extends Component {

    constructor() {
        super();
        this.state = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        password2: '',
        isActive: '',
        errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            isActive: this.state.isActive
        };

        this.props.registerUser(newUser);
    }

    render() {
        const { errors } = this.state;
        const { user } = this.props.auth
        return(
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="register-form col-12 ml-auto">
                            <form action="post" className="w-100" onSubmit={this.onSubmit}>
                            <div className="row">
                                    <div className="col-12">
                                        <h1>Register</h1>
                                    </div>
                                    <TextInput className="form-group col-12 col-md-6" label="Name" type="text" name="fname" value={this.state.fname} onChange={this.onChange}/>
                                    <TextInput className="form-group col-12 col-md-6" label="Surname" type="text" name="lname" value={this.state.lname} onChange={this.onChange}/>
                                    <TextInput className="form-group col-12 col-md-6" label="Email Address" type="text" name="email" value={this.state.email} onChange={this.onChange}/>
                                    <TextInput className="form-group col-12 col-md-6" label="Password" type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                                    <TextInput className="form-group col-12 col-md-6" label="Confirm Password" type="password" name="password2" value={this.state.password2} onChange={this.onChange}/>
                                    <div className="form-group col-12 col-md-6">
                                        <label class="form-label" for="password2">Active user</label>
                                        <select name="isActive" id="isActive" class="form-control" value={this.state.isActive} onChange={this.onChange}>
                                            <option value="true">YES</option>
                                            <option value="false">NO</option>
                                        </select>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
    };

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { registerUser })(Register);