import React, { Component } from "react";
import Slider from "react-slick";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

// export default Jumbotron;


// new carousel
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 500,
      fade: true,
      cssEase: 'linear',
      rtl: true
    };
    return (
      <div className="carousel-images-rtl">
        <Slider {...settings}>
          <div className="carousel-images-rtl">

            <img className="images-rtl" src="../assets/images/carousel1.jpeg" />
          </div>
          <div className="carousel-images-rtl">
            <img className="images-rtl" src="../assets/images/carousel3.jpeg" />
          </div>
          <div className="carousel-images-rtl">
            <img className="images-rtl" src="../assets/images/carousel4.jpeg" />
          </div>
        </Slider>
      </div>
    )
  }
}

// function Jumbotron() {
//   return (
//     <div className="carousel-images-rtl">
//       <div className="carousel-images-rtl">

//         <img className="images-rtl" src="../assets/images/carousel1.jpeg" />
//       </div>
//       <div className="carousel-images-rtl">
//         <img className="images-rtl" src="../assets/images/carousel3.jpeg" />
//       </div>
//       <div className="carousel-images-rtl">
//         <img className="images-rtl" src="../assets/images/carousel4.jpeg" />
//       </div>
//     </div>
//   );
// }

// export default Jumbotron;
