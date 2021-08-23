import {getAllPosts} from "../actions/posts";

const intialState={
    data: [],
};


const todos=(state= intialState, action) => {
    switch(action.type) {
        case 'ALL_POSTS':
            return getAllPosts();
        case 'GET_POST' :
            return 
        case 'ADD_POST' :
            return {

            }
        case 'EDIT_POST':
            return {}
        default:
            return state;
    }
}

export default todos;