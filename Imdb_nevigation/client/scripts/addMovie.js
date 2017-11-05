import api from './api.js';


class AddMovie {
    constructor() {

        let addMovieBtn = document.querySelector('.addMovieBtn2')
        addMovieBtn.onclick = () => {
            this.addMovie()
        }
    }

    addMovie() {
        api.getMovies().then((movies) => {
            let newMovie = {
                id: movies[movies.length - 1].id,
                title: document.querySelector('.title').value,
                year: document.querySelector('.year').value,
                director: document.querySelector('.director').value,
                cast: document.querySelector('.cast').value,
                iamgeUrl: document.querySelector('.imageUrl').value,
                iamgeImdb: document.querySelector('.imageImdb').value

            }

            api.addMovie(newMovie).then((data) => {
                document.querySelector('.addStatus').innerHTML = 'Movie Added';
                window.location.href = '/'
            }).catch((e) => {
                console.log(e)
            })
        }).catch((err) => {
            console.log(err)
        })

    }




}


export default new AddMovie()