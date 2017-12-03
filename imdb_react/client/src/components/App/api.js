


class Api {
    constructor() {

    }

    async getMovies() {
        let response = await fetch('http://localhost:3001/movies')
        return await response.json()
    }   


    async getMovie(id) {
        let response = await fetch(`http://localhost:3001/movies/${id}`)
        let movie = await response.json()
        return movie
    }


    async addMovie(movie) {
        let headers = new Headers({ 'content-type': 'application/json' })
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(movie)
        }
        let response = fetch('http://localhost:3001/movies', options).then((res) =>
            console.log(res)
        ).catch((err) =>
            console.log(err))
    }


    async deleteMovie(id) {
        let response = fetch(`http://localhost:3001/movies/${id}`, { method: 'DELETE' }).then((res) =>
            console.log(res)).catch((err) => console.log(err))
    }
}


export default new Api()