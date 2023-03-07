import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

type ProductType = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return <>Loading...</>;
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product?.image} alt={product?.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50"> {product?.category} </h4>
                    <h1 className="display-5">{product?.title}</h1>
                    <p className="lead fw-bolder">
                        {' '}
                        Rating {product?.rating && product?.rating.rate} <i className="fa fa-star"></i>{' '}
                    </p>
                    <h3 className="display-6 fw-bold my-4"> ${product?.price} </h3>
                    <p className="lead">{product?.description}</p>
                    <button className="btn btn-outline-dark"> Add to Cart</button>
                    <NavLink to="/" className="btn btn-dark">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        );
    };

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
                </div>
            </div>
        </>
    );
};

export default Product;
