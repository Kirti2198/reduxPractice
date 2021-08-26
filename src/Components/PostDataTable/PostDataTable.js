import { React, Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import store from "../../store";
import PostList from "../PostList/PostList";
import { db } from "../../db";
import { Container, TextField, Button } from "@material-ui/core";
class PostDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      newPost: "",
      newPostData: "",
    };
  }
  async componentDidMount() {
    //console.log("Props in PostData:::::", this.props);
    const { getPostBulk } = this.props;
    const response = await getPostBulk();
    const { posts: { byBulk: { data = [] } = {} } = {} } = this.props;
    this.setState({
      data: data,
    });
    console.log("Response:::::::", response);
  }

  async createPost(data) {
    console.log(data);
    const { addPost } = this.props;
    const response = await addPost(data);
  }

  handleNewPost(event) {
    console.log("event value::", event.target.value);
    this.setState({
      newPost: event.target.value,
    });
  }

  handleNewPostData(event) {
    console.log("event value:: of post description", event.target.value);
    this.setState({
      newPostData: event.target.value,
    });
  }

  handleAddData = (newData) => {
    const data = { ...this.state.data };
    console.log("data in handle Add Data::::", data);
    const dataKeys = Object.keys(data);
    newData["id"] = dataKeys.length + 1;
    data[dataKeys.length] = newData;
    // data.concat(newData);
    this.setState({ data });
  };

  render() {
    const { data = {} } = this.state;
    console.log("Data in Post Data Table Componenet:::::::", data);
    return (
      <div>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "inline-block" }}>
            <form
              style={{ display: "flex", flexDirection: "row" }}
              style={{ marginLeft: "30%" }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <TextField
                style={{ marginRight: "20px" }}
                type="text"
                value={this.state.newPost}
                onChange={(event) => {
                  this.handleNewPost(event);
                }}
                label="Post Title"
                id="outlined-basic"
                variant="outlined"
              />

              <TextField
                type="text"
                value={this.state.newPostData}
                onChange={(event) => {
                  this.handleNewPostData(event);
                }}
                label="Post Description"
                id="outlined-basic"
                variant="outlined"
              />
            </form>
            <Button
              style={{ width: "200px", marginLeft: "40%" }}
              variant="outlined"
              color="primary"
              onClick={() => {
                this.handleAddData({
                  userId: 1,
                  title: this.state.newPost,
                  body: this.state.newPostData,
                });
              }}
            >
              Add Post
            </Button>
          </div>
          <PostList data={data} />
        </Container>
      </div>
    );
  }
}

export default withRouter(PostDataTable);
