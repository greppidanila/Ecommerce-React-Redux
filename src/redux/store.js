//ALMACENAR la información del carrito de compras

//Importa la función createStore de Redux y el objeto rootReducers (reductor raíz) desde "reducers". 
import {createStore} from "redux"
import rootReducers from "./reducers";

// Crea un store de Redux que se utilizará para almacenar el estado de la aplicación. 
const store = createStore(rootReducers)

export default store;
//Finalmente, exporta el store para que se pueda utilizar en otras partes del código.
