import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const ADD_COMMENT = 'add_comment';

const ROOT_URL = 'http://assignment-server.herokuapp.com/posts';
//const API_KEY = '?_embed=nikhil1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPosts(values, callback) {
  const request = axios.post(`${ROOT_URL}`, values).then(() => {
    callback();
  });
  return {
    type: CREATE_POSTS,
    payload: request
  };
}

export function addComment(values, callback) {
  const request = axios.post(`${ROOT_URL}`, values).then(() => {
    callback();
  });
  return {
    type: ADD_COMMENT,
    payload: request
  };
}
