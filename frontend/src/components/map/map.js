import React, { Component } from "react"
// import withRedux from "next-redux-wrapper"
import { Button, Spin } from 'antd';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps"
import worldMap from './world-50m.json'
import Search from './search';

import { getTopCountries } from '../../actions/dataActions'


// import {
//   Tooltip,
//   actions
// } from "redux-tooltip"

// import { initStore } from "../../store"
// const { show, hide } = actions

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

var randomColor = require('randomcolor');
var color = randomColor({ hue: 'pink', count: 18 });

class BasicMap extends Component {

  constructor() {
    super()
    this.state = {
      value: 1,
      data: [],
      markedCountries: [],
      countryName: '',
    }
    this.handleMove = this.handleMove.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleMove(geography, evt) {
    const x = evt.clientX
    const y = evt.clientY + window.pageYOffset
    // this.props.dispatch(
    //   show({
    //     origin: { x, y },
    //     content: geography.properties.name,
    //   })
    // )
    this.setState({ countryName: geography.properties.name })
  }
  handleLeave() {
    // this.props.dispatch(hide())
    this.setState({ countryName: '' })
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
    getTopCountries().then(res => {
      this.setState({
        data: res,
        markedCountries: this.createTop(res)
      })
    })
  }

  render() {
    // console.log(this.state)
    if (this.state.markedCountries.length === 0)
      // return <div><Button style={{ width: '120px',
      //   height: '120px', border: '16px solid #f3f3f3' /* Light grey */}}shape="circle" loading /></div>
      return <div><Spin size="large" /></div>
    return (
      <div style={wrapperStyles}>
        <Search />
        <div style={{ fontSize: '25px', color: !this.state.countryName ? 'white' : 'black' }}>{this.state.countryName || '___'}</div>
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
                  onMouseMove={this.handleMove}
                  onMouseLeave={this.handleLeave}
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
        {/* <Tooltip /> */}
        <Button
          shape="circle"
          icon="search"
          href="/explore"
          className="homeButton"
          style={{ marginLeft: '50%' }} />
      </div>
    )
  }
}

export default BasicMap