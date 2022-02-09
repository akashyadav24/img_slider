import React from 'react'
import './Slider.css'
import leftArrow from '../icons/lft_arrow.svg';
import rightArrow from '../icons/rgt_arrow.svg';

export default function ({direction,moveSlide}) {
    console.log(direction,moveSlide);
    return (
        <button
        onClick={moveSlide}
        className={direction === "next" ? 'btn-slide next' : "btn-slide prev"} >
            <img  src={direction === "next" ? rightArrow : leftArrow} />
        </button>


    )
}
