import React, { Component } from 'react';
import { Divider } from 'antd';
class Nav extends Component {

    render() {
        return (
            <div className="nav-bar" style={{paddingTop:'1%',paddingLeft: '60%'}}>
                <a href="/">Back to home </a>
                <Divider type="vertical" />
                Already have an account?&nbsp;&nbsp;
                {/* <Divider type="vertical" /> */}
                <a href="/login">login</a>
                <Divider type="vertical" />
                <a href="/register">register</a>
            </div>
        );
    }
}
export default Nav;
