import React, {useState, Suspense, useEffect} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import fetchUrls from "../api/unsplash";

/**
 *
 * @Category Components
 */
const Carousel = ( props ) => {
    const [slides, setSlides] = useState([]);

    const buildSlides = async () => {
        const urls = await fetchUrls(10);
        console.log(`urls: ${urls.length}`)
        const slides =
            urls.map((image, i) =>
                <div key={i}>
                    <Suspense fallback={<h1> Loading Image...</h1>}>
                        <img className="beach-image" src={image} alt="beach"/>
                    </Suspense>
                </div>
            );
        console.log(`slides: ${slides.length}`)
        console.log(`slides: ${slides}`)
        return slides;
    }


    useEffect(()=> {
        const createSlides = async () => {
            const imageSlides = await buildSlides();
            console.log(`imageSlides: ${imageSlides.length}`)
            console.log(`imageSlides: ${imageSlides}`)
            setSlides(imageSlides);
        }
        createSlides();
    }, []);

    return (

        <>
            <h1> Slides</h1>
            {slides}
            <h1> Slides</h1>
            {slides}
        <Slider {...props}>
            {slides}
        </Slider>
        <Slider {...props}>
            {slides}
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
    adaptiveHeight: true,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: false,
    centerMode: true,
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
