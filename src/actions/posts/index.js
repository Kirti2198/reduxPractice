const ADD_POST= "ADD_POST";
const ALL_POSTS="ALL_POSTS";

export const getAllPosts =()=>{
  const response= fetch('https://jsonplaceholder.typicode.com/posts');
  return response;
}

export const addPost =(message)=>({
    type: ADD_POST,
    // payload
    message: message
});

const EDIT_POST= "EDIT_POST";

export const editPost =(message)=>({
    type: EDIT_POST,
    // payload
    message: message
});