import React, { Component } from "react";
import { connect } from "react-redux";
import { GETUSER } from "../../reducers";

class SagasComponent extends Component {
  render() {
    const { result } = this.props;
    let dataList = null;
    if (result) {
      dataList = result.map((item, idx) => {
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
        <h1>测试sagas</h1>
        <ul>{dataList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { result: state };
};
export default connect(mapStateToProps)(SagasComponent);
