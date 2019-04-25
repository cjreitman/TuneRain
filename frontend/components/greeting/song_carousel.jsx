import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right: "25px", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left: "-10px", zIndex: 10, }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      
      <div className="container-slider">
        <Slider {...settings}>

          <div> 
            <div className="slide"></div>
          </div>

          <div>
            <div className="slide"></div>
          </div>

          <div>
            <div className="slide"></div>
          </div>

          <div>
            <div className="slide"></div>
          </div>

          <div>
            <div className="slide"></div>
          </div>

          <div>
            <div className="slide"></div>
          </div>

        </Slider>
      </div>
    );
  }
}