const PORT=3003;
const HOST='http://ec2-18-217-212-139.us-east-2.compute.amazonaws.com'

class Api {
    constructor() {

    }

    async getMovies() {
        let response = await fetch(`${HOST}:${PORT}/movies`)
        return await response.json()
    }   


    async getMovie(id) {
        let response = await fetch(`${HOST}:${PORT}/movies/${id}`)
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
        let response = fetch(`${HOST}:${PORT}/movies`, options).then((res) =>
            console.log(res)
        ).catch((err) =>
            console.log(err))
    }


    async deleteMovie(id) {
        let response = fetch(`${HOST}:${PORT}/movies/${id}`, { method: 'DELETE' }).then((res) =>
            console.log(res)).catch((err) => console.log(err))
    }
}


export default new Api()