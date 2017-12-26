import React from "react";
import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const product = () => (
  <div>
    <h1>测试antd</h1>
    <Calendar onPanelChange={onPanelChange} />
  </div>
);

export default product;
