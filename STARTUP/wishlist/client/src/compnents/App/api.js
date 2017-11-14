async function getBooks1(){
    let response = await fetch('http://s3.amazonaws.com/sundaysky-mock/books/listOfBooks.json')
    return await response.json()
}

async function getBooks(){
    let response = await fetch('http://localhost:3001/books')
    return await response.json()
}

export default { getBooks };
