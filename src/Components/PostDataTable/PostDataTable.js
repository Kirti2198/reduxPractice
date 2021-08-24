import { React, Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { addPost } from "../../actions/posts";
import store from "../../store";
import PostList from "../PostList/PostList";
class PostDataTable extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   posts: [],
    // };
  }
  async componentDidMount() {
    //console.log("Props in PostData:::::", this.props);
    const { getAllPosts, addPost, getPostBulk } = this.props;
    const response = await getPostBulk();
    //console.log("Response:::::::", response);
    // const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    // await getAllPosts(response);
  }

  render() {
    const { posts: { byBulk: { data = [] } = {} } = {} } = this.props;
    //console.log("Data:::", data);
    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            let input = event.target.newPost.value;
            this.props.addPost(input);
            // dispatchEvent(addPost(input));
            // this.props.dispatch(addPost(input));
            event.target.newPost.value = "";
          }}
        >
          <input type="text" name="newPost" />
          <button>Add Post</button>
        </form>

        <button>Edit Post</button>
        <div></div>
        <Link to="/lists" data={data}>
          <button type="button">See All Posts</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(PostDataTable);
