const PORT = 3005
const HOST='http://ec2-18-217-137-222.us-east-2.compute.amazonaws.com'

class Api {
  async getData() {
    let response = await fetch(`${HOST}:${PORT}/books`);
    return await response.json();
  }
}

export default new Api();
