import React, { Component } from 'react';
import Season from '../components/home/season';
import Themes from '../components/home/themes';
import Area from '../components/home/area';
import Searchmini from '../components/home/minisearch';
import Duration from '../components/home/duration';

class Explore extends Component {
  render() {
    return (
      <div className="App" >
        <Searchmini />
        <Area />
        <Duration />
        <Season />
        <Themes />
      </div>

    );
  }
}

export default Explore;
