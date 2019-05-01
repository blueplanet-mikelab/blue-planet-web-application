import React, { Component } from "react"
import { Button, Spin } from 'antd';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import worldMap from './world-50m.json'
import Search from './search';
import axios from 'axios';

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

var randomColor = require('randomcolor'); 
var color = randomColor({hue: 'pink', count: 18});

class BasicMap extends Component {

  constructor() {
    super()
    this.state = {
      value: 1,
      data: [],
      markedCountries: [],
    }
  }

  createTop = data => {
    if (data.length === 0) {
      return []
    }
    const topCountries = [...Array(10).keys()].map(function (i) {
      return data[i].countryEng
    })
    return topCountries
  }

  componentDidMount() {
    axios
      .get('/explores')
      .then(result => this.setState({
        data: result.data,
        markedCountries: this.createTop(result.data)
      }))
  }

  render() {
    console.log(this.state)
    if (this.state.markedCountries.length === 0)
      // return <div><Button style={{ width: '120px',
      //   height: '120px', border: '16px solid #f3f3f3' /* Light grey */}}shape="circle" loading /></div>
      return  <div><Spin size="large" /></div>
    return (
      <div style={wrapperStyles}>
      <Search/>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography={worldMap}>
            
              {(geographies, projection) => geographies.map((geography, i) => (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      // fill: this.state.markedCountries.includes(geography.properties.name) ? `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` : "#ECEFF1",
                      fill: this.state.markedCountries.includes(geography.properties.name) ? "#483D8B" : "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
                
              ))}
              
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <Button 
        shape="circle" 
        icon="search" 
        href="/explore" 
        className="homeButton"
        style={{marginLeft:'50%'}}/>
      </div>
    )
  }
}

export default BasicMap