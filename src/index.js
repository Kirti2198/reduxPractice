import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
// import reducer from './reducers/reducer'
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import PostDataTable from "./Containers/postDataTable";
import PostList from "./Containers/postList";

// const store = createStore(
//   reducer
// );

// containerrrr
ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
      <Route path="/" component={PostDataTable}  exact/>
      <Route path="/lists" component={PostList} exact />
     </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
