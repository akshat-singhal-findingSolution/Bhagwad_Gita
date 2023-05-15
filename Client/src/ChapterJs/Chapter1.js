import React, { useEffect, useState } from "react";
import Header from "../Header";
import img1 from "../images/img1.jpg";
import "../ChapterSyle/Chapter1.css";
import axios from "axios";
import parse from "html-react-parser";
const Chapter1 = () => {
  const [alpha, setAlpha] = useState([[]]);

  useEffect(() => {
    const shloka = async () => {
      try {
        const data = await axios.get(
          "http://localhost:9000/api/gita/shloka?chapter=1"
        );
        // console.log(data.data.shlok);
        setAlpha(data.data.shlok);
      } catch (error) {
        console.log(error);
      }
    };
    shloka();
  }, []);

  // console.log(data);

  return (
    <>
      <Header />

      <div className="parent-chapter1">
        <div className="child1-chapter1">
          <img className="child1-image" src={img1} alt="loading" />
        </div>
        <div className="child2-chapter1">
          <h1> CHAPTER-1 </h1>
          <div className="child2-shlok">
            <div className="chapter1-name">{parse(`<h1>${alpha[0]}</h1>`)}</div>
            <div className="chapter1-name">{parse(`<h1>${alpha[1]}</h1>`)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter1;
