import axios from 'axios';

class Api {
  constructor() {}
  async getData() {
    let response = await fetch('http://localhost:3001/books');
    return await response.json();
  }
}

export default new Api();
