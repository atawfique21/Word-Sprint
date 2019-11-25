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
  let letterIndex = 0;
  let currentWordSel = document.querySelectorAll(`#w`);

  document.body.addEventListener('keydown', function (evt) {
    console.log(evt)
    if (evt.key === 'CapsLock' || evt.key === 'Meta' || evt.key === 'Shift') {
      return;
    } else if (evt.key === 'Backspace') {
      currentWordSel[letterIndex].className = "";
    } else if (!evt.key !== 'BackSpace' && currentWordSel[letterIndex].classList.contains("incorrect")) {
      return;
    } else {
      if (!isCorrect(evt, letterIndex, currentWordSel)) {
      } else {
        letterIndex = letterIndex + 1;
      }
    }
  })
}
//      isCorrect(currentWordSel[letterIndex], evt, letterIndex, currentWordSel)


function isCorrect(evt, letterIndex, currentWordSel) {
  i = letterIndex;
  currentLetter = currentWordSel[i].innerHTML;
  console.log(currentLetter)
  if (evt.key !== currentLetter) {
    currentWordSel[i].className = "";
    currentWordSel[i].classList.add("incorrect")
    return false;
  } else {
    currentWordSel[i].className = "";
    currentWordSel[i].classList.add("correct")
    return true;
  }
}

