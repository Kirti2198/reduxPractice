export const getPostsById = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getPostsBulk = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");

export const addPosts = (data) =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  export const editPostById = (id,data) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
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
