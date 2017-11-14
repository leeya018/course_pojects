
async function getData(category){
    let response = await fetch(`http://localhost:3001/${category}`)
    return await response.json()
}

export default {getData}    