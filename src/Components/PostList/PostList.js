import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addPost, editPost } from "../../actions/posts";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import { deleteTodo } from '../../actions';
class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: [],
      data: [],
      updatePost: false,
    };
  }

  useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  async componentDidMount() {
    let { data = [] } = this.props || {};
    this.setState({
      data,
    });
  }

  handleAddData = (newData) => {
    const data = [...this.state.data];
    data.concat(newData);
    this.setState({ data });
  };

  render() {
    const { data = [] } = this.props;
    console.log("Props 72636563478864726746872 =====>  Propsss", this.props);
    const { editPost } = this.props;
    const dataKeys = Object.keys(data);
    const { updatePost } = this.state;

    let db = {
      ...data,
    };

    // const saveDataIntoDB = () => {
    //   let databaseData = JSON.stringify(db);
    //   console.log("databasedata::::  saveDataIntoDB ", databaseData);
    //   localStorage.setItem("db", databaseData);
    // };
    // saveDataIntoDB();

    // let dataBaseData = {};
    // const editData = (id, title) => {
    //   dataBaseData = JSON.parse(localStorage.getItem("db"));
    //   dataBaseData = JSON.stringify(dataBaseData);

    //   dataBaseData[id].title = title;
    // };

    const handleEditPost = async (id) => {
      const title = prompt("Please enter edited title");
      this.setState({
        updatePost: true,
      });
      if (title != "") {
        data[id].title = title;
      }

      const newPostDescription = prompt(
        "Please enter new description for the post"
      );
      if (newPostDescription != "") {
        data[id].body = newPostDescription;
      }

      const updatedPostData = {
        userId: 1,
        id: id,
        title: title,
        body: newPostDescription,
      };
      const response=await editPost(id + 1, updatedPostData);
      if(response){
        alert("Post Edited Successfully");
      }
    };

    return (
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Title Of Post</TableCell>
                <TableCell align="center">UserId</TableCell>
                <TableCell align="center">Description</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataKeys.map((d, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {idx + 1}
                  </TableCell>
                  <TableCell align="center">{data[d].title}</TableCell>
                  <TableCell align="center">{data[d].userId}</TableCell>
                  <TableCell align="center">{data[d].body}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <button
                      onClick={() => {
                        handleEditPost(idx, {
                          userId: 1,
                          // title: "edited title",
                          // body: this.state.newPostData,
                        });
                      }}
                    >
                      Edit Post
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {dataKeys &&
          dataKeys.map(function (d, idx) {
            return (
              <div>
                <br></br>
                <div>
                  {" "}
                  <div>
                    {idx + 1}
                    <li key={idx} style={{ "list-style-type": "none" }}>
                      {data[d].title}
                    </li>
                  </div>
                  <button
                    onClick={() => {
                      editPost(idx, {
                        userId: 1,
                        // title: "edited title",
                        // body: this.state.newPostData,
                      });
                    }}
                  >
                    Edit Post
                  </button>
                </div>
              </div>
            );
          })} */}
      </div>
    );
  }
}

export default withRouter(PostList);
