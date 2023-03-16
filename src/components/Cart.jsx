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
  
  console.log(handleCart);

  return (
    <div className="container py-5">
      {handleCart.length === 0 ? (
        <div className="row py-5">
          <div className="col-md-12">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      ) : (
        <div className="row py-5">
          {handleCart.map((product) => (
            <div className="col-md-12" key={product.id}>
              <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        height="200px"
                        width="180px"
                      />
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
          <div className="col-md-12">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
