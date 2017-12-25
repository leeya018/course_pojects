const PORT =3009
const HOST='http://ec2-13-58-126-247.us-east-2.compute.amazonaws.com'
// const HOST='http://127.0.0.1'



async function getBooks(){
    let response = await fetch(`${HOST}:${PORT}/books`)
    return await response.json()
}

export default { getBooks };
