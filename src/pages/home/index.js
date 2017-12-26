import React from "react";
import "./style.css";
import Img from "static/images/page2.jpg"
const HomePage = () => (
  <div>
    <h1>Home pages</h1>
    <p>测试图片</p>
    <div className="bg-back" />
    <img src={Img} style={{width:300,height:300}}/>
  </div>
);

export default HomePage;
