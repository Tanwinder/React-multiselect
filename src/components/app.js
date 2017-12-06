import React, { Component } from 'react';
import UsersList from '../containers/users-list';

export default class App extends Component {
    render() {
        return(
            <div>
                <UsersList />
            </div>
        )
    }
}