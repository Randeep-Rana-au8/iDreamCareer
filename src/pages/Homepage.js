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

        <br />
        <br />
      </div>
    </div>
  );
};

export default Homepage;
