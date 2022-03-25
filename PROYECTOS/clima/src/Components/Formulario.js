import React from 'react';

const Formulario = () => {
    //input-field col s12, significa que va a tomar todo el espacio disponible
  return(
        <form> 
            <div className='input-field col s12'> 
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="ciudad">Ciudad: </label>

            </div>

        </form>

  )
};

export default Formulario;
