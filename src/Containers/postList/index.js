import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {editPost, getAllPosts} from "../../actions/posts";
import {getPostsBulkFunc} from "../../actions/posts";
import PostList from "../../Components/PostList/PostList";

const mapStateToProps = state => {
  console.log("State in postList::", state);
    const { posts={} } = state;

    console.log("Posts in container of PostList::::", posts);
    return {
      posts
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        getPostBulk: getPostsBulkFunc(dispatch),
        // getAllPosts: data => dispatch(getAllPosts(data)),
        // addPost: data => dispatch(addPost(data)),
        // editPost: data => dispatch(editPost(data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostList)
  );