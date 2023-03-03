import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';


const SkeletonCol = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const StyledCardImg = styled(Card.Img)`
  height: 10rem;
  object-fit: contain;
  padding-top: 1.5rem;
`;

const StyledCardBody = styled(Card.Body)`
  padding: 1.25rem;
`;

const StyledCardTitle = styled(Card.Title)`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StyledCardText = styled(Card.Text)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;    
  justify-content: space-between;
  flex-direction: row;
`;

const StyledPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 500;  
  margin-right: 1rem;

`;

const StyledButton = styled(Button)`
  border-radius: 1rem;
  font-weight: 500;
`;
const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStar = styled.span`
  color: #f8ce0b;
  font-size: 1.25rem;
  margin-right: 0.25rem;
`;

interface StyledRatingProps {
    rating: {
        rate: number;
        count: number;
    };
}



type Product = {
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

    const StyledRating: React.FC<StyledRatingProps> = ({ rating }) => {
        const { rate, count } = rating;

        // Redondea el valor de `rate` al número entero más cercano
        const roundedRate = Math.round(rate);

        // Crea un array de elementos `span` con las estrellas correspondientes
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRate) {
                stars.push(<StyledStar key={i}>&#9733;</StyledStar>);
            } else {
                stars.push(<StyledStar key={i}>&#9734;</StyledStar>);
            }
        }

        return (
            <StyledRatingWrapper>
                {stars}
                <span>{rate.toFixed(1)}</span>
                <span>({count})</span>
            </StyledRatingWrapper>
        );
    };

    const ShowProducts: React.FC = () => {
        return (
            <>
                <div className="butttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => filterProduct("men's clothing")}>
                        Men´s Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => filterProduct("women's clothing")}>
                        Women´s Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2 border-0 shadow-sm" onClick={() => filterProduct("electronics")}>
                        Electronic
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        {filter.map((product) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 mb-4 " key={product.id}>
                                    <StyledCard>
                                        <StyledCardImg variant="top" src={product.image} />
                                        <StyledCardBody>
                                            <StyledCardTitle>{product.title.substring(0, 12)}</StyledCardTitle>
                                            {product.rating && <StyledRating rating={product.rating} />}
                                            <StyledCardText>{product.description.substring(0, 75) + "..."}</StyledCardText>
                                            <StyledButtonWrapper>
                                                <StyledPrice>${product.price}</StyledPrice>
                                                <StyledButton to={`/products/${product.id}`} variant="primary">Add to Cart</StyledButton>
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
