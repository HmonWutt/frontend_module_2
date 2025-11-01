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
export { Post };
