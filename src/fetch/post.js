const post = (url, obj = {}) => {
  const defaultOptions = {
    credentials: "include",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(obj)
  };
  return fetch(url, defaultOptions);
};

export default post;
