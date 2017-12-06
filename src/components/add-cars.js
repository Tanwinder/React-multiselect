import React, { Component } from 'react';

export default class AddCars extends Component{
    static defaultProps = {
       categories: ['suv','sedan','crossover']  
    }
    render(){
        let carOptions = this.props.categories.map(car => {
            console.log(car);
            return <option key={car} value={car}>{car}</option>;
        });
        return(
            <div>
            <form>
            <div>
                <label>model</label>
                <input type="text" ref="title"/> <br />
                <label>category</label>
                <select>
                {carOptions}
              </select>
            </div>
            </form>
            </div>
        );
        }
}