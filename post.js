import processData from './api.js';
import getRandomIntInclusive from './util.js';
import { Post } from './postClass.js';
const commentUrl = 'https://dummyjson.com/comments';
const usernameUrl = 'https://dummyjson.com/users';
const postUrl = 'https://dummyjson.com/posts';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('main');
  const comments = processData(commentUrl, callback);
  const usernames = processData(usernameUrl, callback);
  const posts = processData(postUrl, callback);
  let postMaterial, user, commentMaterial;
  function generatePosts() {
    for (let i = 0; i < posts.length; i++) {
      postMaterial = posts['posts'][i]['body'];
      const random = getRandomIntInclusive(-1, 3);

      user = users['users'][random + 1]['firstName'];
      if (random >= 0) {
        commentMaterial = comments[random];
      }
      console.log(postMaterial, user);
      const post = new Post(user, postMaterial);
      container.append(post.html);
    }
  }
  function callback(data) {
    return data;
  }
  generatePosts();
});
