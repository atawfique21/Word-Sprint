let baseURL = 'https://random-word-api.herokuapp.com/all?key='
const key = '3L1E3XTX'
let grabWords = async function () {
  const response = await axios.get(`${baseURL}${key}`)
  console.log(response)
}
grabResults();

window.onload = function () {
  const button = document.querySelector('#button') 
} 