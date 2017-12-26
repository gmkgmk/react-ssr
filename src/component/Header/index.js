import React from "react";
import { Button, Layout } from "antd";
const { Header } = Layout;
import "./style.css";
const MainMenu = () => (
  <Layout>
    <Header className="common_header">
      <nav>
        <a href="/">Home</a>
        <a href="/albums">albums</a>
        <a href="/product">product</a>
        <a href="/zoom">zoom</a>
        <a href="/postcss">postcss</a>
        <a href="/list">list</a>
        <a href="/sagas">sagas</a>
        <a href="/dvas">dva</a>
      </nav>
    </Header>
  </Layout>
);

export default MainMenu;
