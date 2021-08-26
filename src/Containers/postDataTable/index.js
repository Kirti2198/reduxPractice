import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost} from "../../actions/posts";
import {getPostsBulkFunc, editPost} from "../../actions/posts";
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
        addPost: data => dispatch(addPost(data)),
        editPost: (id,data) => dispatch(editPost(id,data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostDataTable)
  );