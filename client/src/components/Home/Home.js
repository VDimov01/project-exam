import CatalogItem from "./HomeItem";
import { Link } from "react-router-dom";
import './Home.css';
import { useState } from "react";

export const Home = ({
  pictures
}) => {
  // pictures = pictures.slice(pictures.length - 2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    backgroundImage: `url(${pictures[currentIndex]?.imageUrl})`
  }

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  return (
<>
    <div className="slider">
      <div className='left-arrow' onClick={goToPrevious}>↶</div>
      <div className="right-arrow" onClick={goToNext}>↷</div>
      <div style={slideStyles} className="picture"></div>
      <div className="dots-container">
        {pictures.map((picture, index) => (
          <div key={index} className="dot" onClick={() => goToSlide(index)} >•</div>
        ))}
      </div>
    </div>
</>
  );
}