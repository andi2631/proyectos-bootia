export default function (state=null, action) { //valor default de state
    switch(action.type){
        case "USER_SELECTED" : //si el tipo de accion es USER_SELECTED, se devuelve el payload, que es un user (esta definido en el "index.js" de actions). El payload en esta caso, es el usuario seleccionado.
            return action.payload            
    }
    return state;
}

//El reducer es el encargado de ejecutar la accion, viendo el estado anterior y el nuevo.