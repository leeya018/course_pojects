import axios from 'axios';

function sendData(data) {
  axios
    .post('http://localhost:3001/people', data)
    .then(() => {
      console.log('success');
      alert('you added to DB');
    })
    .catch(err => {
      console.log(err);
    });
}

function getData() {
  return axios.get('http://localhost:3001/people');
}

function updateData(person) {
  let id = person.id;
  return axios.put(`http://localhost:3001/people/${id}`, person);
}

function msToTime(duration) {
  let minutes = parseInt((duration / (1000 * 60)) % 60);
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  // alert((hours+2) + ':' + minutes)
  return (hours+2) + ':' + minutes;
}

export default { sendData, getData, updateData,msToTime };
