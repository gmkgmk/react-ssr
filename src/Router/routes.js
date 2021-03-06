import HomePage from "../pages/home";
import AlbumPage from "../pages/Album";
import productPage from "../pages/product";
import DetailPage from "../pages/detail";
import Zoom from "../pages/zoom";
import Postcss from "../pages/postcss";
import List from "../pages/listinfo";
import Sagas from "../pages/sagas";
import Dvas from "../pages/dva";
import FetchGet from "../fetch/get";
const routes = [
  {
    path: "/dvas",
    component: Dvas,
    loadData: async () => {
      let data = await FetchGet("http://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .catch(e => console.log("数据错误:", e));
      return data;
    }
  },
  {
    path: "/",
    exact: true,
    component: HomePage,
    loadData: () => console.log(1)
  },
  {
    path: "/albums",
    component: AlbumPage,
    loadData: () => console.log(2)
  },
  {
    path: "/product",
    component: productPage,
    loadData: () => console.log(3)
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    loadData: () => console.log(4)
  },
  {
    path: "/Zoom",
    component: Zoom,
    loadData: () => console.log(5)
  },
  {
    path: "/postcss",
    component: Postcss,
    loadData: () => console.log(6)
  },
  {
    path: "/list",
    component: List,
    loadData: async () => {
      let data = await FetchGet("http://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .catch(e => console.log("数据错误:", e));
      return data;
    }
  },
  {
    path: "/sagas",
    component: Sagas,
    loadData: async () => {
      let data = await FetchGet("http://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .catch(e => console.log("数据错误:", e));
      return data;
    }
  }
];
export default routes;
