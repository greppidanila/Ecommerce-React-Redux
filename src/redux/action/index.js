//agregar o eliminar un producto al carrito de compras
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    };
};

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};

//Funciones que exportan una acción de Redux que se puede llamar desde cualquier lugar en el código. 
// Ambas reciben un objeto product como argumento que contiene información sobre el producto que se agregará o eliminará del carrito.

