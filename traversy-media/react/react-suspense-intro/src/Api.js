import axios from 'axios';

export const fetchData = () => {
  const userPromise = fetchUser();
  const postPromise = fetchPosts();

  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postPromise)
  };
};

const wrapPromise = promise => {
  // Set initial status.
  let status = 'pending';
  // Store result.
  let result;
  // Wait for promise.
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

const fetchUser = () => {
  console.log('Fetching User...');
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => console.log(err));
};

const fetchPosts = () => {
  console.log('Fetching Posts...');
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => console.log(err));
};
