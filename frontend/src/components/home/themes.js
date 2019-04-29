import React, { Component } from 'react';
import palm from '../../images/palm-trees.svg';
import pray from '../../images/pray.svg';
import world from '../../images/world.svg';
import mountain from '../../images/mountain.svg';

class Themes extends Component {

    onClick = () => {

    }

    render() {
        return (
            <div>
                <br />
                <br />
                Holiday THEMES
                <br />
                <br />
                <div style={{ display: 'flex', width: '70vw', margin: 'auto' }}>
                    <div style={{ margin: 'auto', border: '1px solid #DEDFEC', width: 180, height: 120, padding: '5px' }}><img src={world} alt="Adventrue" style={{ width: 86, height: 120, height: 80 }} /><br />Adventrue</div>
                    <div style={{ margin: 'auto', border: '1px solid #DEDFEC', width: 180, height: 120, padding: '5px' }}><img src={palm} alt="Nature" style={{ width: 86, height: 120, height: 80 }} /><br />Water Activities</div>
                    <div style={{ margin: 'auto', border: '1px solid #DEDFEC', width: 180, height: 120, padding: '5px' }}><img src={pray} alt="Religion" style={{ width: 86, height: 120, height: 80 }} /><br />Religion</div>
                    <div style={{ margin: 'auto', border: '1px solid #DEDFEC', width: 180, height: 120, padding: '5px' }}><img src={mountain} alt="Mountain" style={{ width: 80, height: 80 }} /> <br />Mountain</div>
                </div >
                < br />
                <br />
                <br />
                <br />
            </div >
        );
    }
}

export default Themes;


