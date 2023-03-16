// Actualizar el ESTADO del carrito en función de las acciones "ADDITEM" y "DELITEM". 

// Definir el estado inicial del carrito = matriz vacía sin productos.
const cart = [];

// Definir la función reductora >> recibe dos argumentos: el estado actual y una acción que se está realizando en la app. 
const handleCart = (state = cart, action) => {
    //payload es la inform importante del producto que se envía en conjunto con la solicitud de accion.
    const product = action.payload;
    //En función del tipo de acción (mediante declaración ´switch´), la función realiza cambios en el estado y devuelve un nuevo estado actualizado.
    switch (action.type) {
        case 'ADDITEM':
            //función verifica si el producto que se está agregando, ya existe en el carrito.  
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //Si es así, se aumenta la cantidad del producto en uno.
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 }
                    //Si no es el mismo id, entonces devuelve el mismo objeto sin modificar.                    
                    : x
                );
            } else {
                const product = action.payload;
                //Si no existe, se agrega el producto al carrito con una cantidad de uno. 
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            };

        case 'DELITEM':
            // función verifica si el producto que se está eliminando, existe en el estado (´state´) del carrito. >> utiliza el método find() para buscar en el estado del carrito el elemento que tenga el mismo id que el producto que se desea eliminar.
            const exist1 = state.find((x) => x.id === product.id);
            //Si la cantidad (´qty´) de ese producto en el carrito es uno, se elimina completamente del carrito y se guarda en const exits1. >> se utiliza el método filter() para CREAR un nuevo array con elementos y la condición es que los id sean distintos del producto que estaba en carrito. (exist1 se elimina).
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                //Si la cantidad es mayor a uno, se reduce la cantidad en uno. ´map´ crea un nuevo arreglo = un nuevo objeto que copia todas las propiedades del elemento actual (...x) pero decrementa la cantidad en 1 (qty: x.qty - 1). 
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } 
                    //Si no es el mismo id, entonces devuelve el mismo objeto sin modificar.
                    : x
                );
            };

        //se devuelve un nuevo estado actualizado que contiene el carrito actualizado.
        default:
            return state;
    }
};

//Finalmente, se exporta la función handleCart para que se pueda utilizar en otras partes del código, y se puede pasar como argumento a combineReducers.
export default handleCart;
