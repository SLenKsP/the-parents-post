import React, { Component } from "react";
import Slider from "react-slick";
// import { MediaBox } from 'react-materialize';

export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            // className: "center",
            // centerMode: true,
            dots: true,
            infinite: true,
            // centerPadding: "60px",
            autoplay: true,
            // autoplaySpeed: 100,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 6,
            pauseOnHover: true,
            fade: true,
            // cssEase: 'linear',
            // rtl: true
        };
        return (
            <div className="carousel">
                <Slider {...settings}>
                    <div className="carousel-images">
                        {/* <MediaBox
                            options={{
                                inDuration: 275,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 200
                            }}
                        > */}
                        <img className="images responsive-img" src="../assets/images/carousel1.jpeg" />
                        {/* </MediaBox> */}
                    </div>
                    <div className="carousel-images">
                        <img className="images responsive-img" src="../assets/images/carousel3.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images responsive-img" src="../assets/images/carousel4.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images responsive-img" src="../assets/images/carousel5.jpg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images responsive-img" src="../assets/images/carousel6.jpeg" />
                    </div>
                    <div className="carousel-images">
                        <img className="images responsive-img" src="../assets/images/carousel7.jpeg" />
                    </div>
                </Slider>
            </div>
        )
    }
}
