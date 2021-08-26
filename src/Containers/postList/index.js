import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getPostsBulkFunc, editPost} from "../../actions/posts";
import PostList from "../../Components/PostList/PostList";

const mapStateToProps = state => {
  console.log("State in postList::", state);
    const { posts={} } = state;
    const {byBulk:{data={}}={}}= posts;
    const{ addedPost:{data:newPostData={}}={}}=posts;
    const newAllPosts={...data, newPostData};
    return {
      posts
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        getPostBulk: getPostsBulkFunc(dispatch),
        editPost: (id,data) => dispatch(editPost(id,data)),
    };
  };
  
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(PostList)
  );