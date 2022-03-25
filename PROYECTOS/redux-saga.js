function* mySaga(){
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

//Esto es una funcion generator, que esta escuchando el tipo de action "USER_FETCH_REQUESTED".
//Cuando ese action type se dispare, lo intercepta y se ejecuta 

function* fetchUser(action){
    try{
        const user = yield call(Api.fetchUser, action.payload.userId)
        yield put({type: "USER_FETCH_SUCCEDED", user:user})
    }catch(e){
        yield put({type: "USER_FETCH_FAILED", message:e.message});
    }
}
//Si todo esta bien, despacha el USER_FETCH_SUCCEEDED, con el payload del user, sino despacha
//el USER_FETCH_FAILED