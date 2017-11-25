import axios from 'axios';

// const serverUrl = 'http://localhost:3000';

class Api {
  constructor() {}
  async getData(category) {
  let response = await fetch('/api/myRecords', category);
    return await response.json();
  }

  async sendMyResult(name, level, category, score,time,countryCode) {
    let data = { name, level, category, score,time ,countryCode};
    return   axios.post('/api/myRecords', data);
  }
  async getMyRecords(name) {
    let response = await fetch(`/api/myRecords/${name}`);
    return await response.json();
  }

  async getWorldRecords() {
    let response = await fetch(`/api/worldRecords`);
    return await response.json();
  }
}



export default new Api();
