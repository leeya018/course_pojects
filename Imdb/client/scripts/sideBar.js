

export default class SideBar {
    constructor($aside) {
        this.$aside = $aside
    }


    renderDirectors(updateListCallback, movies, key, val) {
        let p = this.renderData(key, val)
        p.onclick = function () {
            let fl = movies.filter((movie) => movie.director === key)
            updateListCallback(fl)
        }
        return p

    }
    renderActors(updateListCallback, movies, key, val) {
        let p = this.renderData(key, val)
        p.onclick = function () {
            let fl = movies.filter((movie) => {
                for (let actor of movie.cast) {
                    if (actor === key) {
                        return true
                    }
                }
                return false
            })
            updateListCallback(fl)
        }

        return p
    }




    renderData(key, val) {
        let p = document.createElement('p')
        p.innerHTML = `${key} (${val})`
        return p
    }




    render(movies, updateListCallback) {
        this.$aside.innerHTML = ''

        let directorsData = movies.reduce((directors, movie) => {
            (movie.director in directors) ? directors[movie.director]++ : directors[movie.director] = 1
            return directors
        }, {})

        let h = document.createElement('h2')
        h.innerHTML = 'Directors:'
        this.$aside.appendChild(h)

        for (let key in directorsData) {
            let p = this.renderDirectors(updateListCallback, movies, key, directorsData[key])
            this.$aside.appendChild(p)
        }

        h = document.createElement('h2')
        h.innerHTML = 'Actors:'
        this.$aside.appendChild(h)


        console.log('Directors: ', directorsData)
        console.log('========================================')


        let actorsData = movies.reduce((actors, movie) => {
            for (let actor of movie.cast) {
                (actor in actors) ? actors[actor]++ : actors[actor] = 1
            }
            return actors
        }, {})

        for (let key in actorsData) {
            let p = this.renderActors(updateListCallback, movies, key, actorsData[key])
            this.$aside.appendChild(p)
        }
        console.log('Actors:', actorsData)

    }

}