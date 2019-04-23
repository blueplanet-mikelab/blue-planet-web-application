import React, { Component } from 'react';
import { Select, Radio, DatePicker, Button } from 'antd';
import countrylist from 'country-list';
import Searchmini from '../../Components/home/minisearch';

const Option = Select.Option;

class AddThread extends Component {

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
            <div >
                <Searchmini />
                Country :&nbsp;&nbsp;
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

                Location :&nbsp;&nbsp;
                <Radio.Group>
                    <Radio value={1}>International Destinations</Radio>
                    <Radio value={2}>Destinations within Thailand</Radio>
                </Radio.Group>

                Duration :&nbsp;&nbsp;
                <Select style={{ width: 200 }}
                        placeholder="Please select duration">
                    <Option value="type1">1-3</Option>
                    <Option value="type2">4-5</Option>
                 </Select>

                 Season :&nbsp;&nbsp;
                 <Select style={{ width: 200 }}
                        placeholder="Please select season">
                    <Option value="type1">1-3</Option>
                    <Option value="type2">4-5</Option>
                 </Select>

                 Budget :&nbsp;&nbsp;
                 <Select style={{ width: 200 }}
                        placeholder="range of budget">
                    <Option value="type1">under 10,000</Option>
                    <Option value="type2">4-5</Option>
                 </Select>

            </div>


        );
    }
}

export default AddThread;


