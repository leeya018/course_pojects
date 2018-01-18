import axios from 'axios'
const HOST = 'http://localhost';
const PORT = '3006'
class Api{
    getBooks(){
     return axios.get(`${HOST}:${PORT}/api/books`)
  }

  addBook(book,massage){
    return axios.post(`${HOST}:${PORT}/api/books`,book)
  }

}


export default new Api()