import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const { handleCart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleDel = (product) => {
    dispatch(delCart(product));
  };

  const handleClose = (product) => {
    dispatch(delCart(product));
  };

  console.log(handleCart);

  const CartProducts = (product) => {
    return (
        <div className="row py-5">
          {handleCart.map((product) => (
            <div className="col-md-12" key={product.id}>
              <div className="px-4 mb-4 py-4 bg-light rounded-3">
                <div className="container">
                <button onClick={()=> handleClose(product)} className= "btn-close float-end" aria-label="Close">
                </button>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div>
                        <img
                          src={product.image}
                          alt={product.title}
                          height="240px"
                          width="220px"
                          style={{
                            borderRadius: "10%",
                            border: "1px solid white",
                            backgroundColor: "white",
                            padding: "15px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <h3>{product.title}</h3>
                      <p className="lead fw-bold">
                        {product.qty} x ${product.price} = $
                        {product.qty * product.price}
                      </p>
                      <button
                        className="btn btn-outline-dark me-4"
                        onClick={() => handleDel(product)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => handleAdd(product)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12 d-flex">
            <NavLink to="/checkout" className="btn btn-dark mb-5 w-25 mx-auto ">
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
    )
  }

  return (
    <div className="container py-5 ">
      {handleCart.length === 0 ? (
        <div className="row py-5">
          <div className="col-md-12">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      ) : (
            <CartProducts/>
      )}
    </div>
  );
};

export default Cart;
