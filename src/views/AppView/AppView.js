import initialApp from './SearchBox';

export default class AppView {
  constructor(titles) {
    this.titles = titles;
  }

  render() {
    const container = document.querySelector('.result-container');

    container.insertAdjacentHTML('beforeend', this.titles.map(i => `
            <div class="list-elem">
            <section class="video-instance">
                <img class="video-preview" src="${i.image}"></img>
                <header class="video-title" onClick="window.open('http://youtube.com/watch?v=${i.videoID}','_blank');">${i.title}</header>
                <div class="video-author">Автор: ${i.author}</div>
                <div class="video-date">Загружен: ${i.uploadDate}</div>
                <div class="video-views">Просмотров: ${i.viewCount}</div>
                <div class="video-description">${i.desc}</div>
            </section>
        </div>
    `).join(''));
  }
}
initialApp();
