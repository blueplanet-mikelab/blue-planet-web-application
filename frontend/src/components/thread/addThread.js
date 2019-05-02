import React, { Component } from 'react';
import { Select, Radio, DatePicker, Button, Input } from 'antd';
import { withRouter } from "react-router-dom";
import countrylist from 'country-list';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addThread } from '../../actions/threadActions';
import Searchmini from '../home/minisearch';

const Option = Select.Option;

class AddThread extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            desc: '',
            // thumbnail: '',
            // country: '',
            // duration: '',
            // season: '',
            // theme: '',
            // budget: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({
            country: value
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    // onChange = (value) => {
    //     // console.log(e.format())
    //     // console.log('Country selected', e.target.value);
    //     this.setState({
    //         month: value.format()
    //     });
    // }

    onSubmit = e => {
        e.preventDefault();

        const newThread = {
            title: this.state.title,
            desc: this.state.desc,
            // thumbnail: this.state.thumbnail,
            // country: this.state.country,
            // duration: this.state.duration,
            // season: this.state.season,
            // theme: this.state.theme,
            // budget: this.state.budget,
        }

        this.props.addThread(newThread, this.props.history);

        // this.setState({
        //     title: '',
        //     desc: '',
        // })
    }

    render() {
        return (
            <div>
                <Searchmini/>
                <h3 style={{paddingLeft: '25%'}}>Create a thread</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" style={{paddingLeft: '26%', paddingBottom:'1%'}}> 
                        <label>Title: </label>
                        <Input style={{width: '30%'}}
                            type="text"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group" style={{paddingLeft: '24%', paddingBottom:'1%'}}>
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
                            {countrylist.getNames().map(name => 
                                <Option key={name}
                                        value={name}
                                        id="country"
                                >
                                    {name}
                                </Option>
                            )}
                        </Select> &nbsp;&nbsp;
                    </div>
                    <div className="form-group" style={{paddingLeft: '24%', paddingBottom:'1%'}}>
                        Location :&nbsp;&nbsp;
                        <Radio.Group>
                            <Radio value={1}>International Destinations</Radio>
                            <Radio value={2}>Destinations within Thailand</Radio>
                        </Radio.Group>        
                    </div>
                    <div className="form-group" style={{paddingLeft: '24%', paddingBottom:'1%'}}>
                        Duration :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="Please select duration"
                                onChange={this.onChange}
                        >
                            <Option value="type1">1-3</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>
                    <div className="form-group" style={{paddingLeft: '25%', paddingBottom:'1%'}}>
                        Season :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="Please select season"
                                onChange={this.onChange}
                        >
                            <Option value="type1">1-3</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>
                    <div className="form-group" style={{paddingLeft: '25%', paddingBottom:'1%'}}>
                        Budget :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="range of budget"
                                onChange={this.onChange}
                        >
                            <Option value="type1">under 10,000</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>
                    <div className="form-group" style={{paddingLeft: '23%', paddingBottom:'1%'}}> 
                        <label>Description: </label>
                        <Input style={{width: '60%', height: '200px'}}
                            type="text"
                            id="desc"
                            value={this.state.desc}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group" style={{paddingLeft: '29%'}}>
                        <input type="submit" value="Add Thread" />
                    </div>
                </form>
            </div>
        );
    }
}

AddThread.propTypes = {
    addThread: PropTypes.func.isRequired,
    thread: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    thread: state.thread,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addThread }
)(withRouter(AddThread));;


