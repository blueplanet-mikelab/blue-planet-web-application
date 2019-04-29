import React, { Component } from 'react';
import { Select, Radio, DatePicker, Button } from 'antd';
import { withRouter } from "react-router-dom";
import countrylist from 'country-list';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addThread } from '../../actions/threadActions';

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

        this.props.addThread(newThread);

        // this.setState({
        //     title: '',
        //     desc: '',
        // })
    }

    render() {
        return (
            <div>
                <h3>Create a thread</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  
                            type="text"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  
                            type="text"
                            id="desc"
                            value={this.state.desc}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
                        Location :&nbsp;&nbsp;
                        <Radio.Group>
                            <Radio value={1}>International Destinations</Radio>
                            <Radio value={2}>Destinations within Thailand</Radio>
                        </Radio.Group>        
                    </div>
                    <div className="form-group">
                        Duration :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="Please select duration"
                                onChange={this.onChange}
                        >
                            <Option value="type1">1-3</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        Season :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="Please select season"
                                onChange={this.onChange}
                        >
                            <Option value="type1">1-3</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        Budget :&nbsp;&nbsp;
                        <Select style={{ width: 200 }}
                                placeholder="range of budget"
                                onChange={this.onChange}
                        >
                            <Option value="type1">under 10,000</Option>
                            <Option value="type2">4-5</Option>
                        </Select>
                    </div>

                    <div className="form-group">
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


