import api from './api.js'
import movie from './GridView.js'

class ShowMovie {
    constructor() {
        this.show()
    }
    show() {
        document.querySelector('title1').innerHTML = movie.title
        document.querySelector('year').innerHTML = movie.year
        document.querySelector('director').innerHTML = movie.director
        document.querySelector('cast').innerHTML = movie.cast
        document.querySelector('imageUrl').innerHTML = movie.imageUrl
        document.querySelector('imageImdb').innerHTML = movie.imageImdb
        // let updateBtn = document.querySelector('updateBtn')

        
    }

}


export default new ShowMovie()

//         updateBtn.click = ()=>{
//                 let newMovie = {
//                 // id: movies[movies.length - 1].id,
//                 title: document.querySelector('.title').value,
//                 year: document.querySelector('.year').value,
//                 director: document.querySelector('.director').value,
//                 cast: document.querySelector('.cast').value,
//                 iamgeUrl: document.querySelector('.imageUrl').value,
//                 iamgeImdb: document.querySelector('.imageImdb').value

//             }
// api.updateMovie()
//         }