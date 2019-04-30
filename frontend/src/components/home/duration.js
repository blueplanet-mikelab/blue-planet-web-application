import React, { Component } from 'react';
import { Slider, Card, Carousel } from 'antd';
import '../../css/duration.css'
import axios from 'axios';

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
        axios
            .get('/explores')
            .then(result => this.setState({
                data: result.data
            }))
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
        // console.log(data)
        const topCountries = [...Array(10).keys()].map(function (i) {
            return <div>{data[i].countryEng}<br /></div>
        })

        let parent = []
        for (let i = 0; i < 5; i++) {
            let children = []
            children.push(<Meta
                key={i}
                // title={}
                title={data[i].countryEng}
            />)
            parent.push(<Card
                key={i}
                hoverable
                style={{ width: 200, height: 190, marginRight: '10px' }}
                cover={<img alt="example" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/11/nara-park.jpg" />}
            >
                {children}
            </Card>)
        }
        return parent
    }

    render() {

        return (
            <div style={{ marginLeft: '110px', marginRight: '110px' }}>
                <h4>Duration</h4>
                {/* {topCountries} */}
                <Slider marks={marks} step={null} defaultValue={0} />
                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            {this.createCard()}
                        </div>
                    </h3>   </div>
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            {this.createCard()}
                        </div></h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>,
            </div >
        );
    }
}

export default Duration;


