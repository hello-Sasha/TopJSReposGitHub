import React, { useState } from "react";

import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';
import './Slide.css';
import { Slideritem } from "../SlideItem/Slideritem";
import { Modal } from "../modal/Modal";


export const Slider = ({ repos }) => {
  const[showModal, setShowModal]=useState(false);
  const [current, setCurrent] = useState(0);
  const length = repos.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // /swipe logic/
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 30;
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? prevSlide() : nextSlide();
  };

  return (
    <div className="container">
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {showModal? <Modal card={repos[current]} onClose={()=>setShowModal(false)}/>:''}
        <div className="card">
            <MdArrowBackIosNew onClick={prevSlide} className="icon left"/>
            <MdArrowForwardIos onClick={nextSlide} className="icon right"/>
            {repos.map((slide, index) => (
            <div key={slide.id} className="repoDetails" onClick={()=>setShowModal(true)}>
                {index === current && (
                    <Slideritem name={slide.name} description={slide.description} forks={slide.forks_count} stars={slide.stargazers_count}/>
                )}
            </div>
            ))}
        </div>
       
      </div>
    </div>
  );
};
