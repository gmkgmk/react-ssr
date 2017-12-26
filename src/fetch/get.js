require("es6-promise").polyfill();
require("isomorphic-fetch");

const get = url => {
  let result = fetch(url, {
    // 允许跨域时发出cookie
    headers: {
      Accept: "application/json, text/plain, */*"
    },
    method: "GET"
  });
  var headers = result.headers || new Headers();
  headers.append("Access-Control-Allow-Credentials", true);
  result.headers = headers;
  return result;
};
export default get;
