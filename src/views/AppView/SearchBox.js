export default function initialApp() {
  const body = document.querySelector('body');
  const app = document.createElement('div');

  app.id = 'app';
  app.className = 'app';
  app.insertAdjacentHTML('afterbegin',
    `<div class="header">
      <form class="form" id="search-form">
        <input class="search" type="text" placeholder="Search">
        <button class="submit" type="submit">Search</button>
      </form>
    </div>
    <div class="result-container" id="container">
    </div>
    <div class="additional-buttons">
    <button class="slide-left"><</button>
    <div class="tool-tip">
      <div class="page">Page 1</div>
      <div class="tool-tip-view"></div>
    </div>
    <button class="slide-right">></button>
    </div>
    </div>`);

  body.appendChild(app);
}
