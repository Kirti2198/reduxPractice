import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import PostDataTable from "./Containers/postDataTable";
import PostList from "./Containers/postList";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={PostDataTable} exact />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
