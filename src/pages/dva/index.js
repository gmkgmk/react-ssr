import React, { Component } from "react";
import { connect } from "dva";
class DvaComponent extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    const { userList } = this.props;
    let dataList = null;
    if (userList) {
      dataList = userList.map((item, idx) => {
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
        <h1>hehe</h1>
        <ul>{dataList}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { users } = state;
  return users || {};
};
export default connect(mapStateToProps)(DvaComponent);
