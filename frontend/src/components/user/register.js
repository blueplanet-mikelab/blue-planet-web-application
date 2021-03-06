import React, { Component } from 'react';
import { Tooltip, Icon, Select, Input, Button } from 'antd';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'
import '../../css/register.css';
import Searchmini from '../home/minisearch';

const Option = Select.Option;

class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password2: '',
            username: '',
            firstName: '',
            lastName: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({
            country: value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div >
                <Searchmini />
                <div className="register-container">
                    <h3>Register</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" style={{ paddingBottom: '2%', display: 'flex' }}>
                            <label>Email: </label>
                            <span className="red-text">{errors.email}</span>
                            <Input style={{ width: 230 }}
                                type="email"
                                id="email"
                                className={classnames("", { invalid: errors.email })}
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}

                            />

                            <label>Password: </label>
                            <span className="red-text">{errors.password}</span>
                            <Input style={{ width: 220 }}
                                type="password"
                                id="password"
                                className={classnames("", { invalid: errors.password })}
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                            />
                        </div>
                        <div className="form-group" style={{ paddingBottom: '2%', display: 'flex', textAlign: 'center' }}>
                            <label>Confirm Password: </label>
                            <span className="red-text">{errors.password2}</span>
                            <Input style={{ width: 190 }}
                                type="password"
                                id="password2"
                                className={classnames("", { invalid: errors.password2 })}
                                value={this.state.password2}
                                onChange={this.onChange}
                                error={errors.password2}
                            />

                            <label>Username </label>
                            <span className="red-text">{errors.username}</span>
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            :&nbsp;
                        <Input style={{ width: 180 }}
                                type="text"
                                id="username"
                                className={classnames("", { invalid: errors.username })}
                                value={this.state.username}
                                onChange={this.onChange}
                                error={errors.username}
                            />
                        </div>

                        <div className="form-group" style={{ paddingBottom: '2%', display: 'flex', textAlign: 'center' }}>
                            <label>First name: </label>
                            <span className="red-text">{errors.firstName}</span>
                            <Input style={{ width: 220 }} 
                            type="text"
                                id="firstName"
                                className={classnames("", { invalid: errors.firstName })}
                                value={this.state.firstName}
                                onChange={this.onChange}
                                error={errors.firstName}
                            />

                            <label>Last name: </label>
                            <span className="red-text">{errors.lastName}</span>
                            <Input style={{ width: 220 }} 
                            type="text"
                                id="lastName"
                                className={classnames("", { invalid: errors.lastName })}
                                value={this.state.lastName}
                                onChange={this.onChange}
                                error={errors.lastName}
                            />
                        </div>
                        <div className="form-group">
                            {/* <Button type="primary" className="submitButton">
                                <input type="submit"/>
                                Register<Icon type="right" />
                            </Button> */}
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));;