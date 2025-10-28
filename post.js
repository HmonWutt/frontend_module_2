import processData from './api.js';
import getRandomIntInclusive from './util.js';
const commentUrl = 'https://dummyjson.com/comments';
const usernameUrl = 'https://dummyjson.com/users';
const postUrl = 'https://dummyjson.com/posts';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('main');
  const comments = processData(commentUrl, callback);
  const usernames = processData(usernameUrl, callback);
  const posts = processData(postUrl, callback);
  console.log(posts);
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

class Post {
  static id = 0;
  #name;
  #content;
  #html;
  constructor(name, content) {
    Post.id++;
    this.name = name;
    this.content = content;
    this.#html = document.createElement('article');
    const username = document.createElement('h4');
    username.textContent = this.name;
    const text = document.createElement('p');
    text.textContent = this.content;
    this.#html.append(username);
    this.#html.append(text);
    this.likes = 0;
    this.comment;
    this.setID();
    this.setClass();
  }

  increaseLike() {
    this.#html.addEventListener('click', () => this.likes++);
  }
  set name(value) {
    this.#name = value;
  }
  get name() {
    return this.#name;
  }

  get content() {
    return this.#content;
  }

  set content(value) {
    this.#content = value;
  }

  setID() {
    this.#html.id = Post.id;
  }
  setClass() {
    this.#html.classList.add('post');
  }

  get html() {
    return this.#html;
  }
}
