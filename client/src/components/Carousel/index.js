import React, { Component } from "react";
import Slider from "react-slick";
import M from "materialize-css";
import { MediaBox } from "react-materialize";
import ReactDOM from "react-dom";


export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            // autoplaySpeed: 100,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 6,
            fade: true,
            // cssEase: 'linear',
            // rtl: true
        };
        return (
            <div className="carousel">
                <Slider {...settings}>


                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel1.jpeg" />
                        </MediaBox>
                    </div>
                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel3.jpeg" />
                        </MediaBox>
                    </div>
                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel4.jpeg" />
                        </MediaBox>
                    </div>
                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel5.jpg" />
                        </MediaBox>
                    </div>
                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel6.jpeg" />
                        </MediaBox>
                    </div >
                    <div className="carousel-images">
                        <MediaBox
                            options={{
                                inDuration: 0,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 0
                            }}
                        >
                            <img src="../assets/images/carousel7.jpeg" />
                        </MediaBox>
                    </div >


                </Slider >
            </div >
        )
    }
}
