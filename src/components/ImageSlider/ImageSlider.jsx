import React from 'react';
import PropTypes from 'prop-types';
import "./ImageSlider.css";
import { AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-slider">
      <button className="modal" onClick={prevSlide}><AiFillCaretLeft /></button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="modal" onClick={nextSlide}><AiFillCaretRight /></button>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
