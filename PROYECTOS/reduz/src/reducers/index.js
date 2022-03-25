//este archivo combina todos los reducers, en un gran objeto

import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import ActiveUser from './reducer-active-user'



const allReducers = combineReducers({
    users: UserReducer, //esto equivale al archivo reducer-user, es decir puedo acceder a cualquiera de los usuarios desde aca   
    activeUser: ActiveUser //esto equivale al archivo reducer-active-user. El active user retorna un estado
});


export default allReducers;