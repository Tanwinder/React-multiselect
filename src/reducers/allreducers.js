import { combineReducers } from 'redux';
import UsersReducer from './users-reducer';

const AllReducers = combineReducers({
    users: UsersReducer
});

export default AllReducers;