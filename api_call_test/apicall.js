let randWordArray = ["another", "then", "also", "done", "generally", "back", "public", "copper", "quickly", "heard", "cattle", "program", "layers", "hidden", "gentle", "shelf", "danger", "fire", "carried", "frog", "shine", "between", "straw", "else", "cat", "nearly", "studying", "those", "pour", "might", "excellent", "planning", "ring", "pride", "proper", "stepped", "highway", "driver", "charge", "making", "four", "sold", "fact", "hard", "travel", "happen", "present", "understanding", "anything", "newspaper",
  "eventually", "cow", "ride", "written", "serious", "honor", "eventually", "hair", "unless", "dog", "cap", "declared", "stiff", "clear", "garden", "known", "process", "tongue", "joined", "shadow", "subject", "pull", "silly", "breath", "plural", "cream", "love", "thing", "afraid", "tent", "underline", "bus", "sheep", "hollow", "sad", "shout", "shore", "medicine", "image", "children", "making", "thread", "begun", "poet", "fifty", "record", "pink", "function", "disappear", "good"]
let score = 0;
let sec = 60;

function shuffle(arr) {
  let shuffledDeck = arr;
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); //create a number between 0 & 52
    currentIndex-- //subtract one for the sake of not looping forever
    temporaryValue = shuffledDeck[currentIndex] // deck[52]
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex] // deck[52] == deck[random]
    shuffledDeck[randomIndex] = temporaryValue // deck[random] == tempvalue
  }
  return shuffledDeck;
}


function stopGame() {
  shuffle(randWordArray)
  let nextUpDiv = document.querySelector('#nextup2')
  nextUpDiv.style.visibility = 'hidden'
  document.querySelectorAll(`h4`).forEach(el => el.remove());
  let button = document.createElement('button')
  button.setAttribute('id', 'start')
  button.innerHTML = 'RESTART'
  document.body.querySelector('#word2').appendChild(button)
  document.querySelector('#start').addEventListener('click', startGame)
}

function startGame() {

  let timeSelector = document.querySelector("#time > h3")
  timeSelector.innerHTML = 59;
  score = 0;
  sec = 59;
  document.querySelector('#start').remove()
  function startTimer() {
    let timer = setInterval(function () {
      timeSelector.innerHTML = sec
      sec--;
      if (sec < 0) {
        clearInterval(timer)
        stopGame()
      }
    }, 1000);
  }

  startTimer()

  function addScore() {
    let scoreSelector = document.querySelector("#score > h3")
    newScore = score++
    scoreSelector.innerHTML = newScore;
  }

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
    addScore()
    let wordDiv = document.querySelector('#word2')
    // wordDiv.innerHTML = ""
    document.querySelectorAll(`h4[char-${arrayIndex - 1}]`).forEach(el => el.remove());
    let word = arr[arrayIndex].split("")
    for (i = 0; i < word.length; i++) {
      let newElem = document.createElement("h4")
      newElem.setAttribute(`char-${arrayIndex}`, 'w')
      newElem.innerHTML = word[i]
      newElem.style.fontSize = "50px"
      wordDiv.appendChild(newElem)
      wordLength++
    }
    function showNextUp() {
      let nextUpDiv = document.querySelector('#nextup2')
      nextUpDiv.style.visibility = 'visible'
      let nextWord = arr[arrayIndex + 1]
      let nextUp = document.querySelector('#nextwordhere')
      nextUp.innerHTML = nextWord;
    }
    showNextUp()
    let letterIndex = 0;
    let toggle = setInterval(() => {
      currentWordSel[letterIndex].classList.toggle("onIt")
    }, 350);
    let currentWordSel = document.querySelectorAll(`h4[char-${arrayIndex}]`);
    document.body.addEventListener('keydown', function eventListener(evt) {
      if (sec < 0) {
        return;
      }
      if (evt.key === 'CapsLock' || evt.key === 'Meta' || evt.key === 'Shift') {
        return;
      } else if (evt.key === 'Backspace') {
        currentWordSel[letterIndex].classList.remove("correct")
        currentWordSel[letterIndex].classList.remove("incorrect")
      } else if (evt.key !== 'Backspace' && currentWordSel[letterIndex].classList.contains("incorrect")) {
        return;
      } else {
        if (!isCorrect(evt, letterIndex, currentWordSel)) {
          return;
        } else {
          letterIndex++;
          if (letterIndex === wordLength) {
            document.body.removeEventListener('keydown', eventListener, false)
            setTimeout(function () { newWord(randWordArray) }, 30);
            clearInterval(toggle)
          }
        }
      }
    })
    arrayIndex++
  }
  newWord(randWordArray)
}



window.onload = async function () {
  let baseURL = 'https://random-word-api.herokuapp.com/all?key='
  const key = '00NP3T24'
  shuffle(randWordArray)

  document.querySelector('#start').addEventListener('click', startGame)
}

// if using api, insert code below into window.onload and empty the randwordarray.
  // let getRandWord = async function () {
  //   const response = await axios.get(`${baseURL}${key}`)
  //   for (let i = 0; i < 200; i++) {
  //     let returnRandomizedWord = function (response) {
  //       response = response.data;
  //       let num = Math.floor(Math.random() * response.length)
  //       let randomWord = response[num]
  //       randWordArray.push(randomWord)
  //     }
  //     returnRandomizedWord(response)
  //   }
  // }
  // await getRandWord()