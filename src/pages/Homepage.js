import React from "react";
import { Image } from "react-bootstrap";
import svg from "../images/team.png";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div>
        <Image src={svg} className="homepageTeam" alt="team" />
      </div>
      <div className="homepageWelcome">
        <h1>Welcome to iDreamCareer</h1>
        <p>We help to you chase your dreams.</p>
        <p className="description">
          iDreamCareer is the INDIA’S LARGEST unbiased career counseling venture that works with 2.5
          MILLION STUDENTS yearly while ensuring 100% DATA PRIVACY. We currently work with 12 Indian
          State Governments & 73000+ schools across India & the Middle East.
        </p>
        <p className="description">
          We offer customized career counselling and guidance services to students based on their
          specific needs. Ranging from technology enabled information access only, to human-led
          professional career counselling, our offerings include college application and scholarship
          guidance as well
        </p>
      </div>
    </div>
  );
};

export default Homepage;
