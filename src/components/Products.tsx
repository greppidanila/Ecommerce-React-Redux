import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SkeletonCol = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const ProductImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* Hace que el div sea cuadrado */
  position: relative;
  background-color: #fff;
`;

const ProductImage = styled.img`
  position: absolute;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: contain; /* Para que la imagen el div sin deformarse ni recortarse */
`;

const ProductCard = styled.div`
    margin-bottom: 2rem;
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
    border: none;
    border-radius: var(--bs-card-border-radius);
`;

const ProductTitle = styled.h5`
  margin-bottom: 0;
  margin-top: 2rem;
`;

const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ProductBuyButton = styled(NavLink)`
  display: block;
  margin-top: 2rem;
`;
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
};

const Products: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const [filter, setFilter] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            };
        };
        getProducts();
    }, []);

    const Loading: React.FC = () => {
        return (
            <>
                <SkeletonCol className="col-md-3">
                    <Skeleton height={350} />
                </SkeletonCol>
                <SkeletonCol className="col-md-3">
                    <Skeleton height={350} />
                </SkeletonCol>
                <SkeletonCol className="col-md-3">
                    <Skeleton height={350} />
                </SkeletonCol>
                <SkeletonCol className="col-md-3">
                    <Skeleton height={350} />
                </SkeletonCol>
            </>
        );
    };

    const filterProduct = (cat: string) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts: React.FC = () => {
        return (
            <>
                <div className="butttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        Men´s Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        Women´s Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filter.map((product) => {
                        return (
                            <div className="col mb-4" key={product.id}>
                                <ProductCard className="card h-100 text-center p-4">
                                    <ProductImageWrapper>
                                        <ProductImage src={product.image} alt={product.title} />
                                    </ProductImageWrapper>
                                    <div className="card-body">
                                        <ProductTitle className="card-title">{product.title.substring(0, 12)}</ProductTitle>
                                        <ProductDescription className="card-text">
                                            {product.description.substring(0, 60) + "..."}
                                        </ProductDescription>
                                        <ProductPrice className="card-text lead fs-bold">${product.price}</ProductPrice>
                                        <ProductBuyButton to={`/products/${product.id}`} className="btn btn-dark">
                                            View Details
                                        </ProductBuyButton>
                                    </div>
                                </ProductCard>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
