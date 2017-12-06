import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarProjects from '../components/car-projects';
import AddCars from '../components/add-cars';
import { Link } from 'react-router';
// import VideoList from './components/video_list';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    console.log(this);
  }
  componentWillMount(){
    let cars = [
      {
        model: 'bmw',
        category: 'suv'
      },
      {
        model: 'audi',
        category: 'sedan'
      }
    ];
    this.setState({cars:cars});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
        <div>LOGO</div>
        <Link to="coinbase">Coinbase</Link>
        <Link to="jokes">Jokes</Link>
        </nav>
      <h1>Layout</h1> <br/>
      <AddCars />
      <CarProjects projects={this.state.cars}/>
      {this.props.children}
      </div>
    )
  }
}


