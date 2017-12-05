async function getData() {
  let respose = await fetch("http://localhost:3001/stores");
  return await respose.json();
}

export default {getData};
