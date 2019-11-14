/* eslint-disable no-restricted-syntax */
export default class AppModel {
  constructor(searchUrl) {
    this.searchUrl = searchUrl;
  }

  static extractClipData(data) {
    const dataArray = [];
    for (const i of data.items) {
      dataArray.push({
        title: i.snippet.title,
        author: i.snippet.channelTitle,
        desc: i.snippet.description,
        image: i.snippet.thumbnails.medium.url,
        uploadDate: i.snippet.publishedAt,
        videoID: i.id.videoId,
      });
    }
    return dataArray;
  }

  static extractIdVideo(data) {
    const idArray = [];
    for (const i of data.items) {
      idArray.push({ viewCount: i.statistics.viewCount });
    }
    return idArray;
  }

  async getIdVideo() {
    const url = this.searchUrl;
    const responce = await fetch(url);
    const data = await responce.json();
    return AppModel.extractIdVideo(data);
  }

  async getClipData() {
    const url = this.searchUrl;
    const responce = await fetch(url);
    const data = await responce.json();
    return AppModel.extractClipData(data);
  }

  async getNextPageToken() {
    const url = this.searchUrl;
    const responce = await fetch(url);
    const data = await responce.json();
    return data.nextPageToken;
  }
}
