import api from './api.js'

export default class GridView {
    constructor(movies, $header, $container, updateListCallback) {
        this.$container = $container
        this.$header = $header
        // this.addMovieBtn(movies)
        this.addMovieClicker(movies)
    }



    renderMovie(movie) {
        let titleEl = document.createElement('h1')
        let picEl = document.createElement('img')
        titleEl.innerHTML = movie.title
        picEl.src = movie.imageUrl
        let contentDiv = document.createElement('div')
        contentDiv.appendChild(titleEl)
        contentDiv.appendChild(picEl)
        contentDiv.onclick = () => {
            api.getMovie(movie.id).then((movie) => {
                // this.addModal(movie)
                export default movie;
                window.location.href = 'showMovie.html'
            })
        }
        return contentDiv
    }


    render(fl) {
        this.$container.innerHTML = ''
        let divMovie
        console.log(fl)
        for (let movie of fl) {
            divMovie = this.renderMovie(movie)
            this.$container.appendChild(divMovie)
        }
    }

    disableModalClick(el) {
        el.addEventListener('click', (e) => {
            if (e.target.className === 'modal') {
                el.style.display = 'none'
                e.stopPropagation()
            }
        })
    }

    addMovieToModal(divModalContent, movie) {

        let titleH2 = document.createElement('h2')
        let yearP = document.createElement('p')
        let directorP = document.createElement('p')
        let castP = document.createElement('p')
        let picImg = document.createElement('img')
        let h4Directors = document.createElement('h4')
        let h4Actors = document.createElement('h4')
        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'delete'

        h4Directors.innerHTML = 'Director:'
        h4Actors.innerHTML = 'Actors:'
        let movieContentDiv = document.createElement('div')

        picImg.style.width = '27em';
        picImg.style.height = '30em';
        picImg.style.padding = '1em';
        let movieDiv = document.createElement('div')
        movieDiv.className = 'movieDiv'
        titleH2.innerHTML = movie.title
        yearP.innerHTML = movie.year
        directorP.innerHTML = movie.director
        castP.innerHTML = movie.cast.reduce((actor, actors) => actors += (actor + ' '), '')
        picImg.src = movie.imageUrl

        movieContentDiv.appendChild(titleH2)
        movieContentDiv.appendChild(yearP)
        movieContentDiv.appendChild(h4Directors)
        movieContentDiv.appendChild(directorP)
        movieContentDiv.appendChild(h4Actors)
        movieContentDiv.appendChild(castP)
        movieContentDiv.appendChild(yearP)
        movieContentDiv.appendChild(deleteBtn)
        deleteBtn.onclick = () => {
            api.deleteMovie(movie.id)
        }


        movieContentDiv.style.fontSize = '22px'
        movieDiv.appendChild(movieContentDiv)
        movieDiv.appendChild(picImg)
        divModalContent.appendChild(movieDiv)

    }

    addModal(movie) {
        let divMyModal = document.createElement('div')
        let divModalContent = document.createElement('div')

        divModalContent.className = 'modal-content'
        divMyModal.className = 'modal'
        this.addMovieToModal(divModalContent, movie)

        divMyModal.appendChild(divModalContent)
        this.disableModalClick(divMyModal)

        this.$container.appendChild(divMyModal)


    }



    addMovieBtn(movies) {
        let addBtn = document.createElement('button')
        addBtn.innerHTML = 'addMovie'
        addBtn.onclick = () => {
            this.openAddMovieModal(movies)
        }
        this.$header.appendChild(addBtn)
    }





    addMovieClicker(movies) {



    }


}