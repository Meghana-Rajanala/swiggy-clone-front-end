import { useEffect, useState } from 'react';
import { itemData } from '../imageData';

const Items = () => {
    const [displayItem, setDisplayItem] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setDisplayItem(itemData);
    }, []);

    const handleScroll = (direction) => {
        const gallery = document.getElementById('item-gallery');
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

    return (
        <>
            <div className="itemSection">
                <div className="titleContainer">
                    <h2>What&apos;s on your mind?</h2>
                    <div className="buttonContainer">
                        <button className='btnScroll' onClick={() => handleScroll('left')}><i className='bi bi-arrow-left'></i></button>
                        <button className='btnScroll' onClick={() => handleScroll('right')}><i className='bi bi-arrow-right'></i></button>
                    </div>
                </div>
            </div>
            <div className="itemContainer" id='item-gallery' onScroll={(e) => { setScrollPosition(e.target.scrollLeft) }}>
                {displayItem.map((item) => (
                    <div className="gallery" key={item.id}>
                        <img src={item.item_img} alt={item.title} className="galleryImage" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Items;
