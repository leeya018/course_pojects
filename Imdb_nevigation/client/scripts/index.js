import api from './api.js'
import GridView from './GridView.js'
import SideBar from './sideBar.js'


class Imdb {
    constructor() {
        let $container = document.querySelector('.main')
        let $aside = document.querySelector('.aside')
        let $search = document.querySelector('.search')
        let $header = document.querySelector('.header')
        this.movies = []
        this.filterMovies = []
        this.updateListCallback = this.updateListCallback.bind(this)
        this.initMovies($header, $container, $aside)
        this.initSearch($search)

    }





    updateListCallback(fl) {
        this.filterMovies = fl
        this.gridView.render(fl)
    }


    initSearch($search) {
        if ($search) {
            let input = $search.childNodes[1]
            input.onkeyup = (e) => {
                this.filterMovies = this.movies.filter(movie => movie.title.toLowerCase().includes(e.target.value))
                console.log('done')
                console.log(this.filterMovies)
                this.gridView.render(this.filterMovies)


            }
        }

    }


    initMovies($header, $container, $aside) {

        api.getMovies().then((movies) => {
            console.log(movies)
            this.movies = movies
            this.filterMovies = movies
            this.gridView = new GridView(movies, $header, $container, this.updateListCallback)
            this.asideBar = new SideBar($aside)

            this.gridView.render(this.filterMovies)
            this.asideBar.render(this.filterMovies, this.updateListCallback)
        })
    }


}

new Imdb()





























