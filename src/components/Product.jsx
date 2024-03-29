import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { StyledButton } from "./ProductsStyles";
import Skeleton from "react-loading-skeleton";
import { addCart } from "../redux/action";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { Col, Container } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    // dispatch envía la acción a la tienda de Redux, la tienda de Redux manejará la acción y actualizará el estado de la aplicación de manera global.
    dispatch(addCart(product));

    Swal.fire({
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <Col xs={12} md={6} className="mb-4">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <h4 className="text-uppercase text-black-50"> {product.category} </h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            {" "}
            Rating {product.rating && product.rating.rate}{" "}
            <i style={{ color: "orange" }} className="fa fa-star"></i>{" "}
          </p>
          <h3 className="display-6 fw-bold my-4"> ${product.price} </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-primary px-4 py-2 fw-bold"
            style={{ borderRadius: "1rem" }}
            onClick={() => addProduct(product)}
          >
            {" "}
            Add to Cart
          </button>
          <NavLink to="/cart">
            <StyledButton className="btn ms-2 px-3 py-2">
              Go to Cart
            </StyledButton>
          </NavLink>
        </Col>
      </>
    );
  };

  return (
    <>
      <div>
        <Container className="container py-5">
          <div className="row py-5">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Product;
