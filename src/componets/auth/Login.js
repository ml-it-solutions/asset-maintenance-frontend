import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

import TextInput from '../shared/TextInput';

class Login extends Component {
    constructor() {
        super();
        this.state = {
        username: '',
        password: '',
        errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
        username: this.state.username,
        password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return(
            <div className="login">
                <div className="container mr-0">
                    <div className="row">
                        <div className="login-form col-12 col-md-8 col-lg-5 ml-auto">
                            <div className="row align-items-center">
                                <div className="col-8 mx-auto">
                                    <h1 className="text-center">WELCOME</h1>
                                    <h4 className="text-center">Login to get started</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <TextInput className="form-group" label="Username" type="text" name="username"/>
                                        <TextInput className="form-group" label="Password" type="password" name="password"/>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
    
const mapStateToProps = state => ({
auth: state.auth,
errors: state.errors
});
    
export default connect(mapStateToProps, { loginUser })(Login);