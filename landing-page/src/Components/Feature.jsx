import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage from "../images/feature_1.png";
import featureImage1 from "../images/feature_2.png";
import featureImage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="a-container">
        <FeatureBox
          image={featureImage}
          title="Development Course"
        ></FeatureBox>
        <FeatureBox
          image={featureImage1}
          title="Money Saving Services"
        ></FeatureBox>
        <FeatureBox
          image={featureImage2}
          title="Usability Interface"
        ></FeatureBox>
      </div>
    </div>
  );
}

export default Feature;
