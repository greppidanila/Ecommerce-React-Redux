//Combinador de reductores en única constante

// Importa la función combineReducers de Redux y el objeto handleCart.
import handleCart from "./handleCart";
import {combineReducers} from "redux";

// Utiliza la función combineReducers para combinar varios reductores en un solo reductor raíz, que se almacena en la constante rootReducers. 
const rootReducers = combineReducers({
    //El objeto handleCart se pasa como argumento a combineReducers, lo que significa que se encargará de manejar la parte del estado relacionada con el carrito de compras. 
    handleCart,
})

export default rootReducers;