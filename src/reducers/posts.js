import { getAllPosts } from "../actions/posts";
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
} from "../constants";
const intialState = {
  data: [],
};

const setAllPosts = (response) => {
  //console.log("response:::  in", response);
  const object = { ...intialState };
  object.data = response;
  return object;
};
const posts = (state = intialState, action) => {
  //console.log("State in reducer:::", state);
  //console.log("action::::::::", action);
  switch (action.type) {
    case GET_POSTS_BULK_REQUEST:
      return {
        ...state,
        byBulk: {
          isLoading: true,
          isCompleted: false,
          error: null,
          data: null,
        },
      };
    case GET_POSTS_BULK_SUCCESS:
      return {
        ...state,
        byBulk: {
          isLoading: false,
          isCompleted: true,
          error: false,
          data: action.payload,
        },
      };
    case GET_POSTS_BULK_FAIL:
      return {
        ...state,
        byBulk: {
          isLoading: false,
          isCompleted: true,
          error: action.payload,
          data: false,
        },
      };
    case ADD_POST:
      return {
        ...state,
        addedPost: {
          isLoading: true,
          isCompleted: false,
          error: null,
          data: null,
        },
      };
    case ADD_POST_SUCCESS:
      //console.log("event captured:::::");
      return {
        ...state,
        addedPost: {
          isLoading: false,
          isCompleted: true,
          error: false,
          data: action.payload,
        },
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        addedPost: {
          isLoading: false,
          isCompleted: true,
          error: action.payload,
          data: false,
        },
      };
    case "ALL_POSTS":
      return setAllPosts(action.data);
    case "GET_POST":
      return;
    // case "ADD_POST":
    //   return {
    //     ...state,
    //     data: [
    //       ...state.data,
    //       {
    //         message: action.message,
    //         id: action.id,
    //       },
    //     ],
    //   };
    case "EDIT_POST":
      return {};
    default:
      return state;
  }
};

export default posts;
