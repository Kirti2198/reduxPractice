export const getPostsById = id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getPostsBulk = () => fetch("https://jsonplaceholder.typicode.com/posts");
