import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPostFunc} from "../../actions/posts";
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
        addPost: data =>  addPostFunc(dispatch,data),
        // editPost: data => dispatch(editPost(data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostDataTable)
  );