import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { deleteTodo } from '../../actions';
class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            allPosts: []
        }
      }

      async componentDidMount() {
        //console.log("Props in PostData:::::", this.props);
        const { getPostBulk } = this.props;
        console.log("Props in PostList:::::::", this.props);
        const response = await getPostBulk();
        const {posts:{byBulk:{data=[]}={}}={}}=this.props;
        console.log("Data:::", data);
      }

    render(){
        const { posts: { byBulk: { data = [] } = {} } = {} } = this.props;
        // const {allPosts=[]}=this.state;
        console.log("Dataa::::::", data);
        return (
            <div>
               
              {/* {data[1].map((item, index) => (
                <li>
                  <li key={index}> {item}</li>
                </li>
              ))} */}
            </div>
          );
    }
}


export default withRouter(PostList);