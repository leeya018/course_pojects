
async function getData(){
    let response = await fetch('http://localhost:3001/memory')
    return await response.json()
}

export default {getData}    