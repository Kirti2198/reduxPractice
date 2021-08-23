import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost, editPost, getAllPosts} from "../../actions/posts";
import postDataTable from "../../Components/postDataTable";

const mapStateToProps = state => {
    const { posts={} } = state;
    return {
      posts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: data => dispatch(getAllPosts(data)),
        addPost: data => dispatch(addPost(data)),
        editPost: data => dispatch(editPost(data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(postDataTable)
  );