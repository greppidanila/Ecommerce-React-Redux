import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    interface Product {
        id: number;
        title: string;
        description: string;
        price: number;
        image: string;
        category: string;
    }
    
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>({} as Product);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <>
                Loading..
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product