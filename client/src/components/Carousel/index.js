import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            // autoplaySpeed: 100,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            fade: true,
            // cssEase: 'linear',
            // rtl: true
        };
        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel1.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel3.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel4.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel5.jpg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel6.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images" src="../assets/images/carousel7.jpeg" />
                    </div>
                </Slider>
            </div>
        )
    }
}