import React from "react";
import Header from "./Header";
import "./Home.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img5 from "./images/img5.jpg";
const Home = () => {
  return (
    <>
      <Header />
      <div className="parent-home">
        <div className="child1-home">
          <h1 className="h-child1">Gita Updesh</h1>
          <p className="p-child1">
            {<strong>"</strong>}You have a right over your prescribed duties,
            but you are not entitled to the fruits of your actions. Never
            consider yourself to be the cause of the results of your activities,
            nor be attached to inaction.<strong>"</strong>
          </p>
          <p className="p-child2">
            Karmanye vadhikaraste Ma Phaleshu Kadachana,{" "}
          </p>
          <p className="p-child2">
            Ma Karma Phala Hetur Bhur Ma Te Sango Stv Akarmani
          </p>
        </div>
        <div className="child2-home">
          <div className="img-set">
            <img src={img1} alt="" />
          </div>
          <div className="img-set">
            <img src={img2} alt="" />
          </div>
          <div className="img-set">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
