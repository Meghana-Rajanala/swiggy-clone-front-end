import { useEffect, useState } from "react";
import { API_URL } from "../../pages/api";
import { useParams } from 'react-router-dom';

export default function Products() {
    const { firmId } = useParams();
    const [products, setProducts] = useState([]);
    const [resutarantName,setRestuarantName] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/product/${firmId}/get-products`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(data)
                setProducts(data.products); // Update to access the products array
                setRestuarantName(data.restaurant);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        if (firmId) {
            fetchProducts();
        }
    }, [firmId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (products.length === 0) {
        return <div>No products found for this firm</div>;
    }

    return (
        <>
        <div className="restuarantName">
            <h1>{resutarantName}</h1>
        </div>
        <div className="products">
            {products.map((item) => (
                
                <div className="productItem" key={item._id}>
                    <div className="productsDetails">
                        <h4>{item.productName}</h4>
                        <h5>Price: {item.price}Rs</h5>
                    </div>
                    <div className="productImage ">
                        <img src={`${API_URL}/uploads/${item.productImage}`} alt={item.productName} />
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
