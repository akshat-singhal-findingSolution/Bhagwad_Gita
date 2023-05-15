import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img5 from "./images/img5.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg";
import img19 from "./images/img19.jpg";
import img20 from "./images/img20.jpg";
import img21 from "./images/img21.jpg";
import "./Chapters.css";

import Header from "./Header";
import "./Header.css";
import { authContext } from "./components/context/AuthContext/AuthContext";

const Chapters = () => {
  const { fetchProfileAction, error } = useContext(authContext);
  console.log(error);

  useEffect(() => {
    fetchProfileAction();
  }, []);

  return (
    <>
      <Header />
      {error ? (
        <div className="error-parent" role="alert">
          <strong className="error-child1">Error!</strong> {""}
          <span className="error-child2">{error}</span>
        </div>
      ) : (
        <div className="parent-chapters">
          <div className="child1-chapters">
            <img className="child1-img" src={img6} alt="loading" />
          </div>
          <div className="child2-chapters">
            <img src={img7} alt="" />
            <div className="child2-content">
              <div className="chapter-name">
                <img src={img1} alt="" />
                <h1>Chapter-1</h1>
                <p>Arjuna Vishadayoga</p>
                <Link to="/chapter1" className="link">
                  Open
                </Link>
              </div>

              <div className="chapter-name">
                <img src={img2} alt="" />
                <h1>Chapter-2</h1>
                <p>Sankhyayoga</p>
                <Link to="/chapter2" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img3} alt="" />
                <h1>Chapter-3</h1>
                <p>Karmayoga</p>
                <Link to="/chapter3" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img5} alt="" />
                <h1>Chapter-4</h1>
                <p>Gyana Karma Sanyasayoga </p>
                <Link to="/chapter4" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img8} alt="" />
                <h1>Chapter-5</h1>
                <p>Karma Sanyasayoga</p>
                <Link to="/chapter5" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img9} alt="" />
                <h1>Chapter-6</h1>
                <p>Dhyanayoga</p>
                <Link to="/chapter6" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img10} alt="" />
                <h1>Chapter-7</h1>
                <p>Gyana Vigyanayoga</p>
                <Link to="/chapter7" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img11} alt="" />
                <h1>Chapter-8</h1>
                <p>Akshara Brahmayoga</p>
                <Link to="/chapter8" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img12} alt="" />
                <h1>Chapter-9</h1>
                <p>Raja Vidya Raja Guhyayoga</p>
                <Link to="/chapter9" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img13} alt="" />
                <h1>Chapter-10</h1>
                <p>Vibhutiyoga</p>
                <Link to="/chapter10" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img14} alt="" />
                <h1>Chapter-11</h1>
                <p>Vishvarupa Darshanayoga</p>
                <Link to="/chapter11" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img15} alt="" />
                <h1>Chapter-12</h1>
                <p>Bhaktiyoga</p>
                <Link to="/chapter12" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img16} alt="" />
                <h1>Chapter-13</h1>
                <p>Kshetra Kshetragya Vibhagayoga</p>
                <Link to="/chapter13" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img17} alt="" />
                <h1>Chapter-14</h1>
                <p>Gunatraya Vibhagayoga</p>
                <Link to="/chapter14" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img18} alt="" />
                <h1>Chapter-15</h1>
                <p>Purushottamayoga</p>
                <Link to="/chapter15" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img19} alt="" />
                <h1>Chapter-16</h1>
                <p>Daivasura Sampad Vibhagayoga </p>
                <Link to="/chapter16" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img20} alt="" />
                <h1>Chapter-17</h1>
                <p>Shraddhatraya Vibhagayoga</p>
                <Link to="/chapter17" className="link">
                  Open
                </Link>
              </div>
              <div className="chapter-name">
                <img src={img21} alt="" />
                <h1>Chapter-18</h1>
                <p>Moksha Sanyasayoga</p>
                <Link to="/chapter18" className="link">
                  Open
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chapters;
