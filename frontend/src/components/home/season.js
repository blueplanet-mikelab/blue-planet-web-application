import React, { Component } from 'react';
import { Radio, Card, Carousel } from 'antd';
import '../../css/season.css';

const RadioGroup = Radio.Group;
const { Meta } = Card;

class Season extends Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }


    render() {
        return (

            <div style={{marginLeft: '120px', marginRight: '120px'}}>
                <br />
                <br />
                <br />
                Pick for each season
                <br />
                <br />
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    Select your month of Travel:&nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio value={1}>Jan-Feb-Mar</Radio>
                    <Radio value={2}>Apr-May-Jun</Radio>
                    <Radio value={3}>Jul-Aug-Sep</Radio>
                    <Radio value={4}>Oct-Nov-Dec</Radio>
                </RadioGroup>
                <br />

                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/11/nara-park.jpg" />}
                            >
                                <Meta
                                    title="Nara, Japan"
                                // description="www.instagram.com"
                                />
                            </Card>,
                <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/Switzerland-%C2%A9-Boris-Stroujko-Shutterstock.jpg" />}
                            >
                                <Meta
                                    title="Switzerland"
                                // description="www.instagram.com"
                                />
                            </Card>,
                <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="http://gotravelaz.com/wp-content/uploads/images/Rothenburg_25634.jpg" />}
                            >
                                <Meta
                                    title="Germany"
                                // description="www.instagram.com"
                                />
                            </Card>,
                    <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://s-ec.bstatic.com/images/hotel/max400/166/166379438.jpg" />}
                            >
                                <Meta
                                    title="Finland"
                                // description="www.instagram.com"
                                />
                            </Card>,
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

            </div>
        );
    }
}

export default Season;


