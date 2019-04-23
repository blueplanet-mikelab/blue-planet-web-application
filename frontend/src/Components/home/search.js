import React, { Component } from 'react';
import { Select, DatePicker, Button } from 'antd';
import countrylist from 'country-list';
import Background from '../../images/map.png';


const { MonthPicker } = DatePicker;
const Option = Select.Option;

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            month: '',
            country: '',
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

    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${Background})`, height: 620 }}>
                <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a country"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                    // onFocus={handleFocus}
                    // onBlur={handleBlur}
                    >
                        {countrylist.getNames().map(name => <Option key={name} value={name}>{name}</Option>)}

                    </Select> &nbsp;&nbsp;
                    <MonthPicker placeholder="Select month" onChange={this.onChange} value={this.state.month} /> &nbsp;&nbsp;

                    <Button icon="search" onClick={this.onClick} style={{ background: '#E26740', color: '#FFFFFF' }}>Explore</Button>

                    
                </div>
            </div>


        );
    }
}

export default Search;


