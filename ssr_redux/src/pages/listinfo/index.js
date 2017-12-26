import React, { Component } from "react";
import FetchGet from "../../fetch/get";
import { connect } from "react-redux";
import { GETALL } from "../../reducers";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    // this.fetchData = async callback => {
    //   // let data = await FetchGet("data/test.json")
    //   //   .then(response => response.json())
    //   //   .catch(e => console.log("数据错误:", e));
    //   let data = window.INITIAL_STATE;
    //   console.log(data);
    //   callback.call(null, data);
    // };
  }

  // async componentDidMount() {
  //   this.fetchData(data => {
  //     this.setState({
  //       data: data
  //     });
  //   });
  // }
  render() {
    console.log(this.props);
    const data = this.props.data_base;
    let dataList;
    if (data) {
      dataList = data.map((item, idx) => {
        return (
          <li key={idx}>
            <h3>{item.title}</h3>
            <span>{item.id}</span>
          </li>
        );
      });
    }
    return (
      <div>
        <p>测试请求数据</p>
        <ul>{dataList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const data_base = state;

  return { data_base };
}

const mapDispatchToProps = { GETALL };
export default connect(mapStateToProps, mapDispatchToProps)(List);
