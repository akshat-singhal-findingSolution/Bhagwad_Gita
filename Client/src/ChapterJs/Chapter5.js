import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import img8 from "../images/img8.jpg";
import "../ChapterSyle/Chapter1.css";
import axios from "axios";
import parse from "html-react-parser";

const Chapter5 = () => {
  const [alpha, setAlpha] = useState([[]]);

  useEffect(() => {
    const shloka = async () => {
      try {
        const data = await axios.get(
          "http://localhost:9000/api/gita/shloka?chapter=5"
        );
        // console.log(data.data.shlokas[1][0]);
        setAlpha(data.data.shlok);
        // console.log(alpha);
      } catch (error) {
        console.log(error);
      }
    };
    shloka();
  }, []);

  return (
    <>
      <Header />

      <div className="parent-chapter1">
        <div className="child1-chapter1">
          <img className="child1-image" src={img8} alt="loading" />
        </div>
        <div className="child2-chapter1">
          <h1> CHAPTER-5 </h1>
          <div className="child2-shlok">
            <div className="chapter1-name">{parse(`<h1>${alpha[0]}</h1>`)}</div>
            <div className="chapter1-name">{parse(`<h1>${alpha[1]}</h1>`)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter5;
