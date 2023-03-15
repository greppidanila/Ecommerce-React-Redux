import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import {
    SkeletonCol,
    StyledCard,
    StyledCardImg,
    StyledCardBody,
    StyledCardTitle,
    StyledCardText,
    StyledButtonWrapper,
    StyledPrice,
    StyledButton,
    StyledBestSeller,
    StyledRatingWrapper,
    StyledStar
} from './ProductsStyles';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);    
    const [loading, setLoading] = useState(false);
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
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            };
        };
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                {[...Array(4)].map((_, index) => (
                    <SkeletonCol className="col-md-3" key={index}>
                        <Skeleton height={350} />
                    </SkeletonCol>
                ))}
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter(({ category }) => category === cat);
        setFilter(updatedList);
    };


    const StyledRating = ({ rating: { rate, count } }) => {
        const roundedRate = Math.round(rate);
        const stars = Array.from({ length: 5 }, (_, index) => (
            <StyledStar key={index} style={{ color: index < roundedRate ? 'gold' : 'gray' }}>
                &#9733;
            </StyledStar>
        ));
        return (
            <StyledRatingWrapper>
                {stars}
                <span>({count})</span>
            </StyledRatingWrapper>
        );
    };

    const ShowProducts = () => {
        const bestSellers = data.filter((product) => product.rating.rate > 4.4);
        return (
            <>
                <div className="butttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => setFilter(bestSellers)}>
                        Best Sellers
                    </button>
                    {['men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'].map((category) => (
                        <button className="btn btn-outline-dark me-2 border-0 shadow-sm" key={category} onClick={() => filterProduct(category)}>
                            {category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>
                <div className="container">
                    <div className="row">
                        {filter.map((product) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 " key={product.id}>
                                    <StyledCard>
                                        <StyledCardImg variant="top" src={product.image} />
                                        <StyledCardBody>
                                            <StyledCardTitle>{product.title.substring(0, 12) + ".."}</StyledCardTitle>
                                            {product.rating.rate > 4.4 && (
                                                <div>
                                                    <StyledBestSeller>
                                                        Best Seller
                                                    </StyledBestSeller>
                                                    <span style={{ color: 'black', background: 'none', marginLeft: '0.5rem' }}>in {product.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}  </span>
                                                </div>
                                            )}
                                            <StyledRating rating={product.rating} />
                                            <StyledCardText>{product.description.substring(0, 75) + "..."}</StyledCardText>
                                            <StyledButtonWrapper>
                                                <StyledPrice>${product.price}</StyledPrice>
                                                <NavLink to={`/products/${product.id}`}>
                                                    <StyledButton variant="primary">More Details
                                                    </StyledButton>
                                                </NavLink>
                                            </StyledButtonWrapper>
                                        </StyledCardBody>
                                    </StyledCard>
                                </div>
                            );
                        })}
                    </div>
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
