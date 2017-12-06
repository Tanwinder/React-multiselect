import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import VideoList from './components/video_list';

export default class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    
    }
  }

  render() {
    return (
      <div>
      <h1>jokes</h1>
      </div>
    )
  }
}