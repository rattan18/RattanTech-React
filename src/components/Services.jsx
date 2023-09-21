import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const Services = () => {
//     useEffect(()=>{
//         document.body.style.backgroundColor = "#090c31";
// })

  return (
    <div className="services" style={{background: "#090c31", height: "91.4vh"}}>
      <div style={{width: "75%", margin: "0px auto", border:"1px solid white"}}>
      <Carousel
        infiniteLoop
        autoPlay
        interval={1500}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Peer-To-Peer Support</p>
        </div>
      </Carousel>
      </div>
    </div>
  );
};

export default Services;
