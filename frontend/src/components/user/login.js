import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import Searchmini from '../home/minisearch';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard'); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Searchmini />
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                        <Input style={{ width: '300px' }}
                            type="email"
                            id="email"
                            className={classnames("", { invalid: errors.email || errors.emailnotfound })}
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <span className="red-text">{errors.password}{errors.passwordincorrect}</span>
                        <Input style={{ width: '300px' }}
                            type="password"
                            id="password"
                            className={classnames("", { invalid: errors.password || errors.passwordincorrect })}
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
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

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);