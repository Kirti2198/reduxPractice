import { React, Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

class PostDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    console.log("Props in PostData:::::", this.props);
    const { getAllPosts } = this.props;
    const postResponse= await getAllPosts();
    console.log("Posts response::::::", postResponse);
  }

  render() {
    return <div>PostDataTable</div>;
  }
}

export default withRouter(PostDataTable);
