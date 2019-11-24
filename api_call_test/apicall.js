let baseURL = 'https://random-word-api.herokuapp.com/all?key='
const key = 'RHRG9QV3'
let randWordArray = []


let getRandWord = async function () {
  // get a list of words
  const response = await axios.get(`${baseURL}${key}`)
  // go through those list of words to randomly fill an array with 200 words
  for (let i = 0; i < 200; i++) {
    let returnRandomizedWord = async function (response) {
      response = response.data;
      let num = Math.floor(Math.random() * response.length)
      let randomWord = response[num]
      randWordArray.push(randomWord)
    }
    returnRandomizedWord(response)
  }
}
getRandWord()
//random word array is filled at this point

// need to grab the current word in h4
// maybe put the word into an array so we can index it? 
// if evt.key pressed = currentword index, do something
// const currentWord = document.querySelector('#currentWord').innerHTML.toLowerCase()
// const currentWordArr = currentWord.split("")
// console.log(currentWordArr)


window.onload = function () {

  document.body.addEventListener('keydown', function (evt) {
    checkTyped(evt)
  })

  function checkTyped(evt) {
    let currentLetterSec = document.querySelectorAll(`#w`)
    let currentLetter;
    for (let i = 0; i < currentLetterSec.length; i++) {
      currentLetter = currentLetterSec[i].innerHTML
      if (evt.key == currentLetter) {
        currentLetterSec[i].classList.add("correct")
      }
    }
  }
}

