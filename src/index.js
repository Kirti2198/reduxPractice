import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
// import reducer from './reducers/reducer'
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import PostDataTable from "./Containers/postDataTable";

// const store = createStore(
//   reducer
// );

// containerrrr
ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
      <Route path="/" component={PostDataTable} />
     </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
