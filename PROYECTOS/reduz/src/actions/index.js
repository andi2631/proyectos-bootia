export const selectUser = (user) => { //ACTION CREATOR
    return{
        //ACTION
        type: "USER_SELECTED",
        payload: user
    }
}



//action type: es un string que define la accion de la action 
//payload: es la informacion que se le da a la app con la accion 
//Aca se crea la acción, que tiene un type, que es el nombre y el payload que devuevle