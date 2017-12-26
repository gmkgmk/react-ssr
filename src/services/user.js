import request from "../fetch/get";

function query() {
  return request("http://jsonplaceholder.typicode.com/albums");
}

export default {
  query
};
