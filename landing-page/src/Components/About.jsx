import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="about-text">
        <h2> {props.title} </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          vel! Voluptas, doloremque cumque ut nemo tempora eaque vitae? Dolore
          illum consequatur rem quibusdam ratione dolorem?
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
