import React, { Component } from 'react';
import { Select, DatePicker, Button, Input } from 'antd';
import countrylist from 'country-list';
import Background from '../../images/map.png';
import Nav from '../../Components/navbar/navbar';


const { MonthPicker } = DatePicker;
const Option = Select.Option;

class Searchmini extends Component {

    constructor(props) {
        super(props)
        this.state = {
            month: '',
            country: '',
            // input: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({
            country: value
        })
    }

    onChange = (value) => {
        // console.log(e.format())
        // console.log('Country selected', e.target.value);
        this.setState({
            month: value.format()
        });
    }

    onClick = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: 150, width:'100%' }}>
            <Nav/>
                <div style={{ textAlign: 'center', paddingTop: '50px'}}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a country"
                        onChange={this.handleChange}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    >
                        {countrylist.getNames().map(name => <Option
                            key={name}
                            value={name}
                        >
                            {name}
                        </Option>)}

                    </Select> &nbsp;&nbsp;
                    <MonthPicker placeholder="Select month" onChange={this.onChange} />&nbsp;&nbsp;

                    {/* <Input onChange={e => { this.setState({ input: e.target.value }) }} /> */}

                    <Button icon="search" onClick={this.onClick} style={{ background: '#E26740', color: '#FFFFFF' }}>Explore</Button>
                </div>
            </div>


        );
    }
}

export default Searchmini;


