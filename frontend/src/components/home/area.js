import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Area extends Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked area', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (

            <div>
                <br />
                <br />
                <br />
                <br />
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>International Destinations</Radio>
                    <Radio value={2}>Destinations within Thailand</Radio>
                </RadioGroup>
            </div>
        );
    }
}

export default Area;


