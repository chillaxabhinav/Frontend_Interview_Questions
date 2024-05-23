import { useState, useRef, useEffect } from 'react';

const Carousel = (props) => {
    const {
        images = [],
        isLoading = false
    } = props;

    const imageRef = useRef(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);

    const goToPrev = () => {
        const lastImgIndex = images.length - 1;
        setCurrentImgIndex((prev) => {
            const prevImg = prev - 1;
            if (prevImg < 0) return lastImgIndex;
            return prevImg;
        });
    };

    const goToNext = () => {
        const lastImgIndex = images.length - 1;
        setCurrentImgIndex((prev) => {
            const next = prev + 1;
            if (next > lastImgIndex) return 0;
            return next;
        });
    };

    useEffect(() => {
        if (images.length > 0) setCurrentImgIndex(0);
    }, [images]);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            goToNext();
        }, 2000);
        return () => clearInterval(carouselInterval);
    }, [currentImgIndex]);


    if (isLoading) return <div>Loading...</div>;
    return (
        <div
            className='carousel'
            style={{
                width: imageWidth
            }}
        >
            {images.length > 0 ? (
                <>
                    <div className='images-container' style={{ transform: `translateX(-${currentImgIndex * imageWidth}px)` }}>
                        {images.map((image) => {
                            return <img
                                onLoad={() => setImageWidth(imageRef.current.offsetWidth)}
                                src={image.url}
                                alt={image.title}
                                key={image.id}
                                ref={imageRef}
                            />
                        })}
                    </div>
                    <button className="btn prev" onClick={goToPrev}>Prev</button>
                    <button className="btn next" onClick={goToNext}>Next</button>
                </>
            ) : (
                <div>No Images</div>
            )}
        </div>
    )
};

export default Carousel;
