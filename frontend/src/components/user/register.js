import React, { Component } from 'react';
import { Tooltip, Icon, Checkbox, Select, Input, Button } from 'antd';
import {withRouter } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'
import countrylist from 'country-list';
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
            residence: '',
            country: '',
            phoneNumber: '',
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
            lastName: this.state.lastName,
            residence: this.state.residence,
            country: this.state.country,
            phoneNumber: this.state.phoneNumber
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
                        <div className="form-group">
                            <label>Email: </label>
                            <span className="red-text">{errors.email}</span>
                            <Input type="email"

                                id="email"
                                className={classnames("", { invalid: errors.email })}
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}

                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <span className="red-text">{errors.password}</span>
                            <Input type="password"
                                id="password"
                                className={classnames("", { invalid: errors.password })}
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password: </label>
                            <span className="red-text">{errors.password2}</span>
                            <Input type="password"
                                id="password2"
                                className={classnames("", { invalid: errors.password2 })}
                                value={this.state.password2}
                                onChange={this.onChange}
                                error={errors.password2}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username </label>
                            <span className="red-text">{errors.username}</span>
                            <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            :&nbsp;
                        <Input type="text"
                                id="username"
                                className={classnames("", { invalid: errors.username })}
                                value={this.state.username}
                                onChange={this.onChange}
                                error={errors.username}
                            />
                        </div>
                        <div className="form-group">
                            <label>First name: </label>
                            <span className="red-text">{errors.firstName}</span>
                            <Input type="text"
                                id="firstName"
                                className={classnames("", { invalid: errors.firstName })}
                                value={this.state.firstName}
                                onChange={this.onChange}
                                error={errors.firstName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name: </label>
                            <span className="red-text">{errors.lastName}</span>
                            <Input type="text"
                                id="lastName"
                                className={classnames("", { invalid: errors.lastName })}
                                value={this.state.lastName}
                                onChange={this.onChange}
                                error={errors.lastName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Habitual Residence: </label>
                            <span className="red-text">{errors.residence}</span>
                            <Input style={{ width: 400 }}
                                type="text"
                                id="residence"
                                className={classnames("", { invalid: errors.residence })}
                                value={this.state.residence}
                                onChange={this.onChange}
                                error={errors.residence}
                            />
                        </div>
                        <div className="form-group">
                            <label>Country: </label>
                            <Select
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a country"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                            >
                                {countrylist.getNames().map(name =>
                                    <Option key={name}
                                        type="text"
                                        id="country"
                                        className={classnames("", { invalid: errors.country })}
                                        value={name}
                                        error={errors.country}
                                    >{name}</Option>
                                )}
                            </Select>
                            <span className="red-text">{errors.country}</span>
                        </div>
                        <div className="form-group">
                            <label>Phone number: </label>
                            <span className="red-text">{errors.phoneNumber}</span>
                            <Input type="tel"
                                id="phoneNumber"
                                className={classnames("", { invalid: errors.phoneNumber })}
                                value={this.state.phoneNumber}
                                onChange={this.onChange}
                                error={errors.phoneNumber}
                            />
                        </div>
                        <div>
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                        </div>

                        <div className="form-group">
                            <Button type="primary" className="submitButton">
                                Register<Icon type="right" />
                            </Button>
                            {/* <input type="submit" value="Register" /> */}
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