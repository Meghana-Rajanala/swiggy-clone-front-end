import { useEffect, useState } from 'react';
import { API_URL } from "../pages/api";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link component from React Router

export default function Chains({ selectFirm }) {
    const [vendorData, setVendorData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVendorData = async () => {
            try {
                const response = await fetch(`${API_URL}/vendor/all-vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch vendor data');
                }
                const data = await response.json();
                setVendorData(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVendorData();
    }, []);

    return (
        <section className="chainSection">
            <h2>Restaurants with online food delivery in Vijayawada</h2>
            <div className='chainContainer'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    vendorData.map((vendorItem) => (
                        <div className="vendorBox" key={vendorItem._id}>
                            {vendorItem.firm.map((item) => (
                                <Link to={`/product/${item._id}/get-products`} key={item._id} onClick={() => selectFirm(item._id)}>
                                    {/* Wrap with Link and pass firm ID as URL parameter */}
                                    <div>
                                        <div className="firmImage">
                                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                        </div>
                                        <div className='firmName_style'> {item.firmName} </div>
                                        <div className='region-style'> {item.region.join(',').toUpperCase()}</div>
                                        <div className='area-style'>{item.area.toUpperCase()}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

Chains.propTypes = {
    selectFirm: PropTypes.func.isRequired,
   
};
