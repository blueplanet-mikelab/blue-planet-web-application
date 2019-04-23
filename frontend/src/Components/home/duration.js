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
    state = {
        value: 1,
        data: [],
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
    render() {
        const {data} = this.state
        const topCountries =   [...Array(10).keys()].map(function(i){
            if (data.length === 0) {
                return ""
            }
            return JSON.parse(data.topCountries)[i].tags
        })
    
        console.log(topCountries)
        return (
            <div style={{ marginLeft: '110px', marginRight: '110px' }}>

                <h4>Duration</h4>
               {topCountries}
{/*                    
                  {  [...Array(10).keys()].map(function(i){
                        return JSON.parse(this.state.data.topCoutries)[i].tags
                    })
                } */}

                <Slider marks={marks} step={null} defaultValue={0} />


                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>

                            <Card
                                hoverable
                                style={{ width: 200, height: 190, marginRight: '10px' }}
                                cover={<img alt="example" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/11/nara-park.jpg" />}
                            >
                                <Meta
                                    title="Nara, Japan"
                                // description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190, marginRight: '10px' }}
                                cover={<img alt="example" src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/Switzerland-%C2%A9-Boris-Stroujko-Shutterstock.jpg" />}
                            >
                                <Meta
                                    title="Switzerland"
                                // description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190, marginRight: '10px' }}
                                cover={<img alt="example" src="http://gotravelaz.com/wp-content/uploads/images/Rothenburg_25634.jpg" />}
                            >
                                <Meta
                                    title="Germany"
                                // description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190, marginRight: '10px' }}
                                cover={<img alt="example" src="https://s-ec.bstatic.com/images/hotel/max400/166/166379438.jpg" />}
                            >
                                <Meta
                                    title="Finland"
                                // description="www.instagram.com"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://s-ec.bstatic.com/images/hotel/max400/166/166379438.jpg" />}
                            >
                                <Meta
                                    title="Finland"
                                // description="www.instagram.com"
                                />
                            </Card>
                        </div>
                    </h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>,
            </div >
        );
    }
}

export default Duration;


