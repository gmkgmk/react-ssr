import request from "../fetch/get";

export default async function query() {
  return request("http://jsonplaceholder.typicode.com/albums");
}
