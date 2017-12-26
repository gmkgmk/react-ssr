import React, { Component } from "react";
import { Card, Spin } from "antd";
import FetchGet from "../fetch/get";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  async componentDidMount() {
    const params = this.props.match.params.id;
    let data = await FetchGet("http://api.tvmaze.com/shows/" + params)
      .then(response => response.json())
      .catch(e => console.log("数据错误:", e));
    this.setState({
      data: data
    });
  }
  render() {
    const { data } = this.state;
    return data == null ? (
      <Spin size="large" />
    ) : (
      <div>
        <h1>详情页面</h1>
        <p>测试详情</p>
        <Card title="详细信息" style={{ width: 300 }}>
          <div className="custom-image">
            {data.image.medium ? (
              <img alt="example" width="100%" src={data.image.medium} />
            ) : (
              <img
                alt="example"
                width="100%"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            )}
          </div>
          <div className="custom-card">
            <h3>{data.name}</h3>
            <p>{data.url}</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default DetailPage;
