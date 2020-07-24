import React, {  useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

/**
 *
 * @Category Components
 */
const getImageUrls = async (count) => {
    const URL = "https://source.unsplash.com/1600x900/?beach";
    let imageList = [];
    for(let i=0; i < count;i++) {
        const response = await fetch(URL);
        const imageUrl = response.url;
        imageList.push(imageUrl);
    }
    return imageList;
}

const ImageList = (props) => {
    const urls = props.imageUrls;
    return (
        <>
            {urls.map((image,i) => (
                <div key={i}>
                <Suspense fallback={<h1> Loading Image...</h1>}>
                    <img className="beach-image" src={image} alt="beach"/>
                </Suspense>
            </div>
            ))}
        </>
    );
}

const initImages = async (count) => {
    const images = await getImageUrls(count);
    return images;
}

const Carousel = ({ count, ...otherProps }) => {

    const {...props} = otherProps;
    const [images] = useState(initImages(count));

    return (

        <>
        <Slider {...props}>
            <ImageList imageUrls={images}/>
        </Slider>
        <Slider {...props}>
            <ImageList imageUrls={images}/>
        </Slider>
            </>
    );
};

Carousel.propTypes = {
    adaptiveHeight: PropTypes.bool,
    arrows: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    autoplay: PropTypes.bool,
    centerMode: PropTypes.bool,
    draggable: PropTypes.bool,
    dots: PropTypes.bool,
    lazyLoad: PropTypes.oneOf(['progressive', 'ondemand']),
    infinite: PropTypes.bool,
    pauseOnDotsHover: PropTypes.bool,
    pauseOnFocus: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    speed: PropTypes.number,
    slidesPerRow: PropTypes.number,
    swipeToSlide: PropTypes.bool,
    swipe: PropTypes.bool,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    vertical: PropTypes.bool,
};

Carousel.defaultProps = {
    adaptiveHeight: false,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: false,
    centerMode: false,
    draggable: true,
    dots: true,
    lazyLoad: 'progressive',
    infinite: true,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    speed: 500,
    slidesPerRow: 1,
    swipeToSlide: false,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
};

export default Carousel;
