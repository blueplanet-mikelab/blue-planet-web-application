import React, { Component } from 'react';
import { Slider, Card, Carousel } from 'antd';
import '../../css/duration.css'
import { getSmartData } from '../../actions/dataActions'

const { Meta } = Card;

const marks = {
    0: {
        style: {
            color: '#fff',
        },
        label: <strong>'1 to 3 Days'</strong>,
    },
    25: {
        style: {
            color: '#fff',
        },
        label: <strong>'4 to 6 Days'</strong>,
    },
    50: {
        style: {
            color: '#fff',
        },
        label: <strong>'7 to 9 Days'</strong>,
    },
    75: {
        style: {
            color: '#fff',
        },
        label: <strong>'10 to 12 Days'</strong>,
    },
    100: {
        style: {
            color: '#fff',
        },
        label: <strong>More</strong>,
    },
};

class Duration extends Component {
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
        console.log('radio checked area', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    createCard = () => {
        const { data } = this.state
        if (data.length === 0) {
            return ""
        }
        const durationCountries = [...Array(5).keys()].map(function (i) {
            // return <div>{data[i].countryEng}<br /></div>
            return <Card
            key={i}
            hoverable
            style={{ width: "200px", height: "190px", marginRight: "10px" }}
            cover={<img style={{height: "120px"}} alt="example" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/11/nara-park.jpg" />}
            >
                <Meta
                key={i}
                title={data[i].countryEng}
                />
            </Card>
        })
        return durationCountries
    }

    render() {
        return (
            <div style={{ background: "#181741",marginLeft: '110px', marginRight: '110px' }}>
                <h4 style={{color: "#FFFFFF"}} >Duration</h4>
                <Slider marks={marks} step={null} defaultValue={0} />
                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            {this.createCard()}
                        </div>
                    </h3></div>
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            {/* {this.createCard()} */}
                        </div>
                    </h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>,
            </div >
        );
    }
}

export default Duration;


