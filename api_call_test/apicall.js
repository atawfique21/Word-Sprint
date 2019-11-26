window.onload = async function () {
  let baseURL = 'https://random-word-api.herokuapp.com/all?key='
  const key = '00NP3T24'
  let randWordArray = []


  let getRandWord = async function () {
    const response = await axios.get(`${baseURL}${key}`)
    for (let i = 0; i < 200; i++) {
      let returnRandomizedWord = function (response) {
        response = response.data;
        let num = Math.floor(Math.random() * response.length)
        let randomWord = response[num]
        randWordArray.push(randomWord)
      }
      returnRandomizedWord(response)
    }
  }
  await getRandWord()

  function isCorrect(evt, letterIndex, currentWordSel) {
    i = letterIndex;
    currentLetter = currentWordSel[i].innerHTML;
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
  let arrayIndex = 0;
  let wordLength = 0;
  function newWord(arr) {
    wordLength = 0;
    let wordDiv = document.querySelector('#word')
    wordDiv.innerHTML = ""
    let word = arr[arrayIndex].split("")
    for (i = 0; i < word.length; i++) {
      let newElem = document.createElement("h4")
      newElem.setAttribute(`char-${arrayIndex}`, 'w')
      newElem.innerHTML = word[i]
      wordDiv.appendChild(newElem)
      wordLength++
    }
    let letterIndex = 0;
    let currentWordSel = document.querySelectorAll(`h4[char-${arrayIndex}]`);
    console.log(currentWordSel)

    document.body.addEventListener('keydown', function (evt) {
      console.log(currentWordSel, letterIndex)
      if (evt.key === 'CapsLock' || evt.key === 'Meta' || evt.key === 'Shift') {
        return;
      } else if (evt.key === 'Backspace') {
        currentWordSel[letterIndex].classList.remove("correct")
        currentWordSel[letterIndex].classList.remove("incorrect")
      } else if (evt.key !== 'Backspace' && currentWordSel[letterIndex].classList.contains("incorrect")) {
        console.log(currentWordSel, letterIndex)
        // console.log(currentWordSel[letterIndex])
        return;
      } else {
        if (!isCorrect(evt, letterIndex, currentWordSel)) {
          return;
        } else {
          letterIndex++;
          if (letterIndex === wordLength) {
            newWord(randWordArray)
          }
        }
      }
    })
    arrayIndex++
  }

  newWord(randWordArray)

  // window.onload = function () {

}