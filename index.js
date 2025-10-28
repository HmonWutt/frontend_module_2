document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('main');

  function generatePosts(num) {
    listOfUsernames = [
      {
        username: 'NeonWave_Alex',
        content:
          'Just finished coding the new search algorithm! It feels like surfing on a neon wave. So fast! ⚡️ #codinglife #NeonSocial',
      },
      {
        username: 'Catppuccin_Fan',
        content:
          'Obsessed with the new Catppuccin color palette for my profile! The Mocha tones are perfect. 💜 #aesthetic #Catppuccin',
      },
      {
        username: 'DigitalNomad_7',
        content:
          'Coffee break with a view. Thinking about the difference between dvh and lvh. CSS nerds, where you at? ☕️ #webdev #CSS',
      },
      {
        username: 'Alice_C',
        content:
          'Testing out the new ID system! Feels very structured. User ID 1 reporting for duty! Great to see the platform evolving. 👍',
      },
      {
        username: 'Bob_T',
        content:
          'Posted my first thought using the new class structure. Feeling productive! Time to dive into some JavaScript debugging. #JS #Classes',
      },
      {
        username: 'Luna_Synth',
        content:
          'Current mood: Synthwave on repeat. Does anyone else get serious neon vibes from the header design? 🎶',
      },
      {
        username: 'Guest_User_99',
        content:
          'This is a temporary guest account post. Just here for a quick look around! The layout is really clean.',
      },
      {
        username: 'FlexGridMaster',
        content:
          "Forget floats! Flexbox and Grid have saved me hours this week. Using 'gap' is the real game-changer for responsive spacing. #frontend",
      },
      {
        username: 'CodeCurious',
        content:
          "Trying to understand true private fields in JS. The '#' symbol feels weird but I appreciate the strict encapsulation! Learning every day. 🤓",
      },
      {
        username: 'Vintage_Gamer',
        content:
          'Found an old arcade machine today! Totally neon, totally retro. Wish I could post a photo here. 👾',
      },
    ];
    for (let i = 0; i < num; i++) {
      user = listOfUsernames[i];
      const post = new Post(user['username'], user['content']);
      container.append(post.html);
    }
  }
  generatePosts(4);
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
