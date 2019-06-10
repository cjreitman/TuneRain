import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        background: "rgb(235, 235, 235)", 
        right: "-2px", 
        width: "35px", 
        height: "35px", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey",
        marginTop: "-25px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
          ...style, 
          display: "flex", 
          background: "rgb(235, 235, 235)", 
          left: "-20px", 
          zIndex: 2, 
          width: "35px", 
          height: "35px", 
          justifyContent: "center", 
          alignItems: "center", 
          borderRadius: "5px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "grey",
          marginTop: "-25px"
      }}
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
          {this.props.songs}
        </Slider>
      </div>
    );
  }
}