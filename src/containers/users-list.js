import React, {Component} from 'react';
import {connect} from 'react-redux';

class UsersList extends Component {
    constructor(props){
        super(props);
    }
    displaylist(){
        console.log('props',this.props);
        return this.props.users.map((user) => {
                return(
                    <li key={user.age}>{user.age} {user.name}</li>
                )
            });
    }
    render(){
        return(
            <ul>
              {this.displaylist()} 
            </ul>
        )
    }
}

function mapsStateToProps(state){
    return {
        users: state.users
    }
}

export default connect(mapsStateToProps)(UsersList);

