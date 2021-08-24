import { React, Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import store from "../../store";
import PostList from "../PostList/PostList";
class PostDataTable extends Component {
  constructor(props) {
    super(props);
     this.state = {
       allPosts: [],
       newPost: ""
     };
  }
  async componentDidMount() {
    //console.log("Props in PostData:::::", this.props);
    const { getAllPosts, addPost } = this.props;
    // const response = await getPostBulk();
    //console.log("Response:::::::", response);
    // const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    // await getAllPosts(response);
  }

  async createPost(data) {
    console.log("65454565655651 ================>>>here in createPost 1");
    const { addPost } = this.props;
    console.log("65454565655651 ================>>>here in createPost 2");
    await addPost(data);
    console.log("added post successfully");
  }

   handleNewPost(event) {
    console.log("event value::", event.target.value);
     this.setState({
      newPost: event.target.value
    });
  }
  render() {
    // const { posts: { byBulk: { data = [] } = {} } = {} } = this.props;
    //console.log("Data:::", data);
    return (
      <div>
        <form
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   let input = event.target.newPost.value;
        //   this.props.addPost(input);
        //   // dispatchEvent(addPost(input));
        //   // this.props.dispatch(addPost(input));
        //   event.target.newPost.value = "";
        // }}
        >
          <input type="text" value={this.state.newPost}  onChange={(event)=>{this.handleNewPost(event)}}/>
        </form>
        
        <button
          onClick={() => {
            this.createPost({"userId": 1, title: this.state.newPost});
          }}
        >
          Add Post
        </button>
        <button>Edit Post</button>
        <Link to="/lists">
          <button type="button">See All Posts</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(PostDataTable);
