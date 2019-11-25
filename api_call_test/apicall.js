window.onload = function () {
  let baseURL = 'https://random-word-api.herokuapp.com/all?key='
  const key = '00NP3T24'
  let randWordArray = []


  let getRandWord = async function () {
    const response = await axios.get(`${baseURL}${key}`)
    console.log(response)
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


  // window.onload = function () {
  let letterIndex = 0;
  let currentWordSel = document.querySelectorAll(`#w`);
  let arrayIndex = 0;

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
  console.log('hi')
  console.log(randWordArray[0])

  function newWord(arr) {
    let wordDiv = document.querySelector('#word')
    wordDiv.innerHTML = ""
    let word = arr[arrayIndex].split("")
  }

  newWord(randWordArray)
}