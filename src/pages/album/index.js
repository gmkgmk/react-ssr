import React, { Component } from "react";
import { Table, Icon, Card, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import FetchGet from "../../fetch/get";

class album extends Component {

  constructor() {
    super();
    this.state = {
      databash: []
    };
    this.columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "1"
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "2"
      },
      {
        title: "网址",
        dataIndex: "url",
        key: "3"
      },
      {
        title: "语言",
        dataIndex: "language",
        key: "4"
      },
      {
        title: "公司地址",
        dataIndex: "officialSite",
        key: "5"
      },
      {
        title: "注册时间",
        dataIndex: "premiered",
        key: "6"
      },
      {
        title: "状态",
        dataIndex: "type",
        key: "7"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => <a href={"/detail/" + record.id}>查看详情</a>
      }
    ];
  }
  async componentDidMount() {
    let data = await FetchGet("http://api.tvmaze.com/search/shows?q=girls")
      .then(response => response.json())
      .catch(e => console.log("数据错误:", e));
    let databash = [];
    if (data.length > 0) {
      data.map((item, idx) => {
        if (item.show) {
          item.show.key = idx;
          databash.push(item.show);
        }
      });
      this.setState({
        databash: databash
      });
    }
  }
  render() {
    const { databash } = this.state;
    
    return (
      <div>
        <h1>测试列表</h1>
        <Card
          title="列表"
          extra={<a href="#">More</a>}
          style={{ margin: 50, marginTop: 0 }}
        >
          {databash.length === 0 ? (
            <Spin size="large" />
          ) : (
            <Table columns={this.columns} dataSource={databash} />
          )}
        </Card>
      </div>
    );
  }
}
export default album;
