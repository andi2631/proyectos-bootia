import React, {Component} from "react";
import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import { selectUser } from "../actions";

//ESTE ARCHIVO ES UN CONTAINER Y COMPONENTE

class UserList extends Component {

    createListItems(){
        return this.props.users.map((user) => {
            return (
                <li 
                key={user.id}
                onClick={() => this.props.selectUser(user)} //dispara selectUser, que setea el usuario que esta seleccionado
                > {user.first} {user.last}
                </li>
            )
        }) //esto es equivalente a la lista de usuarios definida en reducers
    }

    render (){

        return (
            
            <ul>
                {this.createListItems()}
            </ul>
        )        
    }
}

function mapStateToProps(state) { //agarra un pedazo de la store de la aplicacion, el estado de la aplicacion y lo pasa a tu componente en forma de propiedad
    return {
        users: state.users   //Esto es para no pasarle toda la data de la store al container, sino que solo la que necesito 
    }
    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch) //estamos conectando el container con la action. El dispatch que va despues, es por algo behind the scenes
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList); //De esta forma, tomamos el componente y la hacemos "consciente" de nuestro app store y de los datos de user

//Si exporto solo UserList, estoy exportando solo el componente, que no sabe nada acerca del estado de la app