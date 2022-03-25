import React, {Component} from "react";
import { connect } from "react-redux";


class UserDetail extends Component{

    render(){
        return(
             <div>
                 <h1> A {this.props.user.first} le gusta escuchar: </h1>
                 <h2>{this.props.user.musica}</h2>
             </div>
        );
    }
}

function mapStateToProps(state) { //agarra un pedazo de estado de la store(redux) de la aplicacion, el estado de la aplicacion y lo pasa a tu componente en forma de propiedad.
    return {
        user: state.activeUser  //Esto es para no pasarle toda la data de la store al container, sino que solo la que necesito. iguala user al activeUser, que es el estado que retorna el reducer activeUser, que es el encargado de manejar lo que hacen y devuelven las acciones
    }    
}

export default connect(mapStateToProps)(UserDetail); //De esta forma, tomamos el componente y la hacemos "consciente" de nuestro app store y de los datos de user

//Si exporto solo UserList, estoy exportando solo el componente, que no sabe nada acerca del estado de la app

//export default connect(mapStateToProps)(UserDetail); 