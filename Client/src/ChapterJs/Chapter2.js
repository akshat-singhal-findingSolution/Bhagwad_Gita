import React, { useEffect, useState } from "react";
import Header from "../Header";
import img2 from "../images/img2.jpg";
import "../ChapterSyle/Chapter1.css";
import axios from "axios";
import parse from "html-react-parser";
import { API_URL_SHLOK } from "../utils/apiURL";

const Chapter2 = () => {
  const [alpha, setAlpha] = useState([[]]);

  useEffect(() => {
    const shloka = async () => {
      try {
        const data = await axios.get(`${API_URL_SHLOK}?chapter=2`);
        // console.log(data.data.shlokas[1][0]);
        setAlpha(data.data.shlok);
        // console.log(alpha);
      } catch (error) {
        console.log(error);
      }
    };
    shloka();
  }, []);

  // console.log(alpha);
  return (
    <>
      <Header />

      <div className="parent-chapter1">
        <div className="child1-chapter1">
          <img className="child1-image" src={img2} alt="loading" />
        </div>
        <div className="child2-chapter1">
          <h1> CHAPTER-2 </h1>
          <div className="child2-shlok">
            <div className="chapter1-name">{parse(`<h1>${alpha[0]}</h1>`)}</div>
            <div className="chapter1-name">{parse(`<h1>${alpha[1]}</h1>`)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chapter2;
