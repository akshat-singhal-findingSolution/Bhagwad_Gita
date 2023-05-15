import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapters from "./Chapters";
import Chapter1 from "./ChapterJs/Chapter1";
import Chapter2 from "./ChapterJs/Chapter2";
import Chapter3 from "./ChapterJs/Chapter3";
import Chapter4 from "./ChapterJs/Chapter4";
import Chapter5 from "./ChapterJs/Chapter5";
import Chapter6 from "./ChapterJs/Chapter6";
import Chapter7 from "./ChapterJs/Chapter7";
import Chapter8 from "./ChapterJs/Chapter8";
import Chapter9 from "./ChapterJs/Chapter9";
import Chapter10 from "./ChapterJs/Chapter10";
import Chapter11 from "./ChapterJs/Chapter11";
import Chapter12 from "./ChapterJs/Chapter12";
import Chapter13 from "./ChapterJs/Chapter13";
import Chapter14 from "./ChapterJs/Chapter14";
import Chapter15 from "./ChapterJs/Chapter15";
import Chapter16 from "./ChapterJs/Chapter16";
import Chapter17 from "./ChapterJs/Chapter17";
import Chapter18 from "./ChapterJs/Chapter18";
import Login from "./Login";
import Register from "./Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/chapter5" element={<Chapter5 />} />
        <Route path="/chapter6" element={<Chapter6 />} />
        <Route path="/chapter7" element={<Chapter7 />} />
        <Route path="/chapter8" element={<Chapter8 />} />
        <Route path="/chapter9" element={<Chapter9 />} />
        <Route path="/chapter10" element={<Chapter10 />} />
        <Route path="/chapter11" element={<Chapter11 />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        <Route path="/chapter13" element={<Chapter13 />} />
        <Route path="/chapter14" element={<Chapter14 />} />
        <Route path="/chapter15" element={<Chapter15 />} />
        <Route path="/chapter16" element={<Chapter16 />} />
        <Route path="/chapter17" element={<Chapter17 />} />
        <Route path="/chapter18" element={<Chapter18 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
