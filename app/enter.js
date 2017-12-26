//react相关
import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
//react组件相关
import App from "../src/Router";
import HtmlRender from "./render";
import routes from "../src/Router/routes";

// redux相关
import { Provider } from "react-redux";
import createStore from "../src/store";
const { routerRedux, Route, Switch } = require("dva/router");
import { createMemoryHistory } from "history";
const { ConnectedRouter } = routerRedux;
const dva = require("dva").default;
import userModel from "../src/model";

const ServerRender = async ctx => {
  let context = {};
  /**
   * 获取数据函数，from "react-router-config"api
   * @param {any} location
   * 请求的路径
   **/
  const loadBranchData = location => {
    const branch = matchRoutes(routes, location); //寻找匹配的路由

    // 获取匹配路由里loadData函数;
    const promises = branch.map(({ route, match }) => {
      return route.loadData ? route.loadData(match) : Promise.resolve(null);
    });
    // 执行promise函数;
    return Promise.all(promises);
  };

  // 异步获取到的数据
  const data = await loadBranchData(ctx.url);

  // 暂时写死，值传入第一个promise的数据
  if (data.length) {
    renderHtml(data[0]);
  }

  /**
   * @param {any} htmlData
   * @object
   * 返回渲染页面
   */
  function renderHtml(htmlData) {
    const store = createStore(htmlData); //生成store
    const initialState = { users: { userList: htmlData } };
    const history = createMemoryHistory();
    const app = dva({
      history,
      initialState
    });
    app.model(userModel)
    const context = {};
    app.router(options => (
      <StaticRouter location={ctx.url} context={options.context}>
        <App />
      </StaticRouter>
    ));
    console.log(context);
    const html = renderToString(app.start()({ context }));
    ctx.status = 200;
    ctx.body = HtmlRender(html, htmlData);
  }
};

export default ServerRender;
