import React, { Component } from 'react';
import { Radio, Card, Carousel } from 'antd';
import '../../css/season.css';
import { getSmartData } from '../../actions/dataActions'

const RadioGroup = Radio.Group;
const { Meta } = Card;

class Season extends Component {
    constructor() {
        super()
        this.state = {
            value: 1,
            data: []
        }
    }

    componentDidMount() {
        getSmartData().then(res => {
            this.setState({
                data: res
            })
        })
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    createCard = () => {
        const { data } = this.state
        if (data.length === 0) {
            return ""
        }
        const seasonCountries = [...Array(5).keys()].map(function (i) {
            return  <a href={data[i].link}>
                <Card
                key={i}
                hoverable
                style={{ width: 200, height: 190, marginRight: '10px' }}
                cover={<img style={{height: "120px"}} alt="example" src={data[i].thumbnail} />}
                >
                    ><Meta
                    title={data[i].title}
                    />
                </Card>
            </a>
        })
        return seasonCountries
    }


    render() {
        return (
            <div style={{marginLeft: '110px', marginRight: '110px', background: "#181741", color: "#FFFFFF"}}>
                <h4 style={{color: "#FFFFFF"}}>Pick for each season</h4>
                <RadioGroup style={{color: "#FFFFFF"}} onChange={this.onChange} value={this.state.value}>
                    Select your month of Travel:&nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio style={{color: "#FFFFFF"}} value={1}>Jan-Feb-Mar</Radio>
                    <Radio style={{color: "#FFFFFF"}} value={2}>Apr-May-Jun</Radio>
                    <Radio style={{color: "#FFFFFF"}} value={3}>Jul-Aug-Sep</Radio>
                    <Radio style={{color: "#FFFFFF"}} value={4}>Oct-Nov-Dec</Radio>
                </RadioGroup>
                <br />
                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            {this.createCard()}
                        </div>
                    </h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>,

            </div>
        );
    }
}

export default Season;


