import AppModel from '../models/AppModel';
import AppView from '../views/AppView';
import pageControl from '../views/AppView/pageControl';

const _ = require('lodash');

let nextPageToken = '';
let searchValue = document.querySelector('#search-form .search').value;
let searchUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5WrXvT_qtQuvHPJ5qW-_iLFkzQG7NzVM&type=video&part=snippet&maxResults=15&q=${searchValue}`;

async function processSearch() {
  searchValue = document.querySelector('#search-form .search').value;
  searchUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC5WrXvT_qtQuvHPJ5qW-_iLFkzQG7NzVM&type=video&part=snippet&maxResults=15&q=${searchValue}`;
  const model2 = new AppModel(searchUrl);
  const clipData = await model2.getClipData();
  const str = clipData.map(i => i.videoID).join();
  const urlIdVideo = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC5WrXvT_qtQuvHPJ5qW-_iLFkzQG7NzVM&id=${str}&part=snippet,statistics`;
  const modelUrlIdVideo = new AppModel(urlIdVideo);
  const cliIdVideo = await modelUrlIdVideo.getIdVideo();
  const merge = _.merge(clipData, cliIdVideo);
  const view2 = new AppView(merge);
  view2.render();
}

export default function checkValue(e) {
  e.preventDefault();
  const searchValue2 = 11;
  searchValue = document.querySelector('#search-form .search').value;
  if (searchValue !== searchValue2) {
    const clearContainer = document.querySelector('.result-container');
    clearContainer.innerHTML = '';
    processSearch();
  }
}

document
  .querySelector('#search-form')
  .addEventListener('submit', checkValue, false);

const container = document.querySelector('.result-container');
const goLeft = document.querySelector('.slide-left');
const goRight = document.querySelector('.slide-right');

let startX;
let scrollLeft;
let isDown;

async function upLoadingNextCard() {
  const model2 = new AppModel(searchUrl);
  nextPageToken = await model2.getNextPageToken();
  searchUrl = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageToken}&key=AIzaSyC5WrXvT_qtQuvHPJ5qW-_iLFkzQG7NzVM&type=video&part=snippet&maxResults=15&q=${searchValue}`;
  const model3 = new AppModel(searchUrl);
  const clipData = await model3.getClipData();
  const str = clipData.map(i => i.videoID).join();
  const urlIdVideo = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC5WrXvT_qtQuvHPJ5qW-_iLFkzQG7NzVM&id=${str}&part=snippet,statistics`;
  const modelUrlIdVideo = new AppModel(urlIdVideo);
  const cliIdVideo = await modelUrlIdVideo.getIdVideo();
  const merge = _.merge(clipData, cliIdVideo);
  const view2 = new AppView(merge);
  view2.render();
}

function mouseIsDown(e) {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = [container.scrollLeft];
}
function mouseUp() {
  isDown = false;
  pageControl();
  if (container.scrollLeft > container.scrollWidth - 3000) {
    upLoadingNextCard();
  }
}
function mouseLeave() {
  isDown = false;
}
function mouseMove(e) {
  if (isDown) {
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;
  }
}
container.addEventListener('mousedown', mouseIsDown);
container.addEventListener('mouseup', mouseUp);
container.addEventListener('mouseleave', mouseLeave);
container.addEventListener('mousemove', mouseMove);

container.addEventListener('touchstart', mouseIsDown);
container.addEventListener('touchend', mouseUp);
container.addEventListener('touchcancel', mouseLeave);
container.addEventListener('touchmove', mouseMove);

goLeft.addEventListener('click', () => {
  container.scrollLeft -= 1273;
  pageControl();
});

goRight.addEventListener('click', () => {
  if (container.scrollLeft > container.scrollWidth - 3000) {
    upLoadingNextCard();
  }
  if (document.documentElement.clientWidth <= 586) {
    container.scrollLeft += 319;
    pageControl();
    return;
  }
  if (document.documentElement.clientWidth < 1265 && document.documentElement.clientWidth > 586) {
    container.scrollLeft += 636;
    pageControl();
    return;
  }
  container.scrollLeft += 1273;
  pageControl();
});
