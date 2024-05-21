import { useEffect, useState } from 'react';
import { API_URL } from "../pages/api";
import { chainItemData } from '../chainsItems';

export default function ChainsOfTop() {
    const [vendorData, setVendorData] = useState([]);
    const [displayItem, setDisplayItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const fetchVendorData = async () => {
            try {
                const response = await fetch(`${API_URL}/vendor/all-vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch vendor data');
                }
                const data = await response.json();
                console.log(data);
                setVendorData(data);
                setDisplayItem(chainItemData);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVendorData();
    }, []);

    const handleScroll = (direction) => {
        const gallery = document.getElementById('item-gallery1');
        const scrollAmount = 300;
        if (direction === 'left') {
            gallery.scrollTo({
                left: gallery.scrollLeft - scrollAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'right') {
            gallery.scrollTo({
                left: gallery.scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    // Function to get fallback image from local data
const getFallbackImage = () => {
    for (let i = 0; i < displayItem.length; i++) {
        const item = displayItem[i];
        // Check if the item_img property exists and is not empty
        if (item.item_img) {
            return item.item_img;
        }
    }
};

    return (
        <section className="chainSectionofTop">
            <div className="titleContainer">
                <h2>Top restaurant chains in Vijayawada</h2>
                <div className="buttonContainer">
                    <button className='btnScroll' onClick={() => handleScroll('left')}><i className='bi bi-arrow-left'></i></button>
                    <button className='btnScroll' onClick={() => handleScroll('right')}><i className='bi bi-arrow-right'></i></button>
                </div>
            </div>
            <div className='chainContainerTop' id="item-gallery1" onScroll={(e) => { setScrollPosition(e.target.scrollLeft) }}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    vendorData.map((vendorItem) => (
                        <div className="vendorBox1" key={vendorItem._id}>
                            {vendorItem.firm.map((item) => (
                                <div key={item._id} className="firmImage">
                                    <img
                                        src={`${API_URL}/uploads/${item.image}`}
                                        alt={item.firmName}
                                        onError={(e) => {  e.target.src = getFallbackImage();  }} // Placeholder for error handling
                                    />
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
