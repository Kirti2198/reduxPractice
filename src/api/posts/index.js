export const getPostsById = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getPostsBulk = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");

export const addPosts = (data) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });

// export const editPostById = (id, data) =>
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
