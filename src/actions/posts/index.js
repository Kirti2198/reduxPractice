import {
  GET_POSTS_BY_ID_REQUEST,
  GET_POSTS_BY_ID_SUCCESS,
  GET_POSTS_BY_ID_FAIL,

  GET_POSTS_BULK_REQUEST,
  GET_POSTS_BULK_SUCCESS,
  GET_POSTS_BULK_FAIL,

  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,

  EDIT_POSTS_BY_ID_REQUEST,
  EDIT_POSTS_BY_ID_SUCCESS,
  EDIT_POSTS_BY_ID_FAIL,

} from "../../constants";

import {
  getPostsById,
  getPostsBulk, 
  addPosts
} from "../../api/posts/index";
// const ADD_POST= "ADD_POST";
// const ALL_POSTS="ALL_POSTS";
// const EDIT_POST= "EDIT_POST";




const getPostById = async (dispatch, id) => {
  dispatch({ type: GET_POSTS_BY_ID_REQUEST });

  try {
      const response = await getPostsById(id);
      const res = await response.json();
      dispatch({ type: GET_POSTS_BY_ID_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: GET_POSTS_BY_ID_FAIL, payload: e });
  }
};

const getPostBulk = async dispatch => {
  dispatch({ type: GET_POSTS_BULK_REQUEST });

  try {
      const response = await getPostsBulk();
      const res = await response.json();
      console.log("Resssssssss:::::::", res);
      dispatch({ type: GET_POSTS_BULK_SUCCESS, payload: res });
      return res;
  } catch (e) {
      dispatch({ type: GET_POSTS_BULK_FAIL, payload: e });
  }
};

export const getPostByIdFunc = dispatch => {
  return id => getPostById(dispatch, id);
}

export const getPostsBulkFunc = dispatch => {
  return () => getPostBulk(dispatch);
}
const addPost = async (dispatch, data) => {
  dispatch({ type: ADD_POST });

  try {
      const response = await addPosts(data);
      const res = await response.json();
      console.log("Resss in addPost::", res);
      dispatch({ type: ADD_POST_SUCCESS, payload: res });
      return res;
  } catch (e) {
      dispatch({ type: ADD_POST_FAIL, payload: e });
  }
};

export const addPostFunc = (dispatch, data) => {
  return data => addPost(dispatch, data);
}

const editPostById = async (dispatch, id) => {
  dispatch({ type: EDIT_POSTS_BY_ID_REQUEST });

  try {
      const response = await editPostById(id);
      const res = await response.json();
      dispatch({ type: EDIT_POSTS_BY_ID_SUCCESS, payload: res });
  } catch (e) {
      dispatch({ type: EDIT_POSTS_BY_ID_FAIL, payload: e });
  }
};

export const editPostByIdFunc = dispatch => {
  return id => editPostById(dispatch, id);
}

// export const getAllPosts =(data) => {
//   return({
//     type: ALL_POSTS,
//     data: data
//   })
// }

// export const addPost =(message)=>({
//   type: ADD_POST,
//   message: message,
//   id : Math.random(),
// });



// export const editPost =(message)=>({
//     type: EDIT_POST,
//     // payload
//     message: message
// });