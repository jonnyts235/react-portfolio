import React from "react";
import profile from "../../../static/assets/images/bio/about-image.jpg";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profile + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">Graduate from Bottega</div>
    </div>
  );
};

export default About;
