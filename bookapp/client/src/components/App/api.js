import axios from 'axios';

class Api {
  constructor() {}
  async getData() {
    let response = await fetch('http://localhost:3001/books');
    return await response.json();
  }

  async updateBook(book) {
    return axios.put(`http://localhost:3001/books/${book.id}`, book);
  }
  
  async deleteBook(id) {
    return axios.delete(`http://localhost:3001/books/${id}`);
  }
  async addBook(book) {
    return axios.post(`http://localhost:3001/books/`,book);
  }
}

export default new Api();
