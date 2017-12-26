//server相关
const Koa = require("koa");
const app = new Koa();
const koaStatic = require("koa-static");
const path = require("path");
const favicon = require("koa-favicon");
const logger = require("koa-logger");


// 配置项相关
const PORT = 3000;
const faviocnPath = path.join(__dirname, "../src", "favicon.ico");
// 中间件使用
app.use(koaStatic(path.join(__dirname, "..", "public")));
app.use(koaStatic(path.join(__dirname, "..", "static")));
app.use(logger());
app.use(favicon(faviocnPath));

// 服务端渲染服务
import ServerRender from "./enter";
app.use(ServerRender);

app.listen(PORT, () => console.log("running on port " + PORT));
