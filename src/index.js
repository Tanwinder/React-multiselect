import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const List = (props)=>{
  return (
    <div className="list-items">
    <label htmlFor={props.value}>
    <input id={props.value} type="checkbox" value={props.value} onChange={props.handleChange} />
    {props.value}</label>
    </div>
  )
}
class Multiselect extends Component{
  constructor(props){
    super(props);
    this.state = {
      options: [],
      value: '',
      multiSelectData: [
        { label: 'Chocolate', value: 'chocolate' },
        { label: 'Vanilla', value: 'vanilla' },
        { label: 'Strawberry', value: 'strawberry' },
        { label: 'Caramel', value: 'caramel' },
        { label: 'Cookies and Cream', value: 'cookiescream' },
        { label: 'Peppermint', value: 'peppermint' },
        { label: 'bmw', value: 'bmw' },
        { label: 'saab', value: 'saab' },
      ],
      arrData:[],
      displayList: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.displayList);
    event.preventDefault();
  }
  handleChange(event) {
    let arr = this.state.displayList;
    let val = event.target.value;
    if(arr.length === 0 ){
      arr.push(val);
      this.setState({displayList: arr});
      return;
    } else {
    for(let i = 0; i < arr.length; i++) {
        if(val === arr[i]){
          arr.splice(i,1);
          this.setState({displayList: arr});
          console.log('hi');
          return;
        }
      }
      arr.push(val);
      this.setState({displayList: arr});
    }
  }
  filterItems(value) {
    if(value === ''){
      this.setState({
        arrData: [],
      });
      return;
    }
      const data = this.state.multiSelectData;
      const filteredList = data.filter((item) => {
          return item.label.toLowerCase().search(
              value.toLowerCase()) == 0;
      });
      this.setState({
        arrData: filteredList,
      })
      // this.renderPizzaItems(filteredList); 
  }
  onInputChange(e){
    let val = e.target.value;
    
      this.filterItems(val);
      this.setState({
        value: e.target.value,
      });
  }
  render(){
    let arr = this.state.arrData;
    let c = arr.map((item)=>{
      return(<List
      key={item.label}
      value={item.label}
      handleChange={this.handleChange}
      />)
    });
    return(
      <div className='main'>
      <div className="search-container">
      <div>{this.state.displayList}</div>
      <input type='text' placeholder="tap to find and add" value={this.state.value} onChange={(e)=> {this.onInputChange(e)}} />
      </div>
      <div className="dropdowm-items">
        {c}
      </div>
      <button className="submit-button" type="button" onClick={(e)=> {this.handleSubmit(e)}}>Submit</button>
      </div>
    )
  }
}


ReactDOM.render(<Multiselect />, document.querySelector('.app-container'));