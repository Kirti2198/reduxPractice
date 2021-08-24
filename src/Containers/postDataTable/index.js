import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost, editPost, getAllPosts} from "../../actions/posts";
import {getPostsBulkFunc} from "../../actions/posts";
import PostDataTable from "../../Components/PostDataTable/PostDataTable";

const mapStateToProps = state => {
    const { posts={} } = state;
    //console.log("Postsssssss::::", posts);
    return {
      posts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getPostBulk: getPostsBulkFunc(dispatch),
        getAllPosts: data => dispatch(getAllPosts(data)),
        addPost: data => dispatch(addPost(data)),
        editPost: data => dispatch(editPost(data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostDataTable)
  );