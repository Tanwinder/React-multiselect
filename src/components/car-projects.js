import React, { Component } from 'react';
import ProjectItems from './projectItems';

export default class CarProjects extends Component{
    constructor(){
        super();
        
    }
    render(){
        let cars = this.props.projects.map(car => {
            return <ProjectItems  key={car.model} item={car}/>;
        });
        return(
            <div>
                <h1>cars</h1>
                {cars}
            </div>
        );
    }
}