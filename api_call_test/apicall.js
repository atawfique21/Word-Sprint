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
  let buttonDiv = document.querySelector('#buttons')
  let button1 = document.createElement('button')
  let button2 = document.createElement('button')
  button1.setAttribute('id', 'start')
  button2.setAttribute('id', 'start2')
  button1.innerHTML = 'START GAME'
  button2.innerHTML = 'START MULTIPLIER GAME'
  button1.addEventListener('click', function () {
    startGame(2)
  })
  button2.addEventListener('click', function () {
    startGame(1)
  })
  buttonDiv.appendChild(button1)
  buttonDiv.appendChild(button2)
  // let button = document.createElement('button')
  // button.setAttribute('id', 'start')
  // button.innerHTML = 'RESTART'
  // document.body.querySelector('#word2').appendChild(button)
  // document.querySelector('#start').addEventListener('click', startGame)
}

function removeButtons() {
  document.querySelector('#start').remove()
  document.querySelector('#start2').remove()
}


function startGame(gamemode) {
  let timeSelector = document.querySelector("#time > h3")
  timeSelector.innerHTML = 59;
  score = 0;
  sec = 59;
  let multiplier = 1;
  function multiply(type) {
    let multiplierText = document.querySelector('#multiplierHere')
    if (type === 'reset') {
      multiplier = 1;
      multiplierText.innerHTML = multiplier;
    }
    if (type === 'multi') {
      multiplier = multiplier + 1;
      multiplierText.innerHTML = multiplier;
    }
  }
  function addMultiplier() {
    console.log("added to multiplier")
    let multiplierDiv = document.querySelector('#scoreMulti')
    multiplierDiv.style.visibility = 'visible'
    let multiplierText = document.querySelector('#multiplierHere')
    multiplierText.innerHTML = multiplier;
  }
  function startTimer() {
    let timer = setInterval(function () {
      timeSelector.innerHTML = sec
      sec--;
      if (sec === 49 || sec === 39 || sec === 29 || sec === 19 || sec === 9 || sec === 2 || sec === 1 || sec === 0) {
        timeSelector.style.color = '#EF476F'
        setTimeout(() => {
          timeSelector.style.color = '#f1f2f5'
        }, 500);
      }
      if (sec < 0) {
        clearInterval(timer)
        stopGame()
      }
    }, 1000);
  }
  function addScore() {
    let scoreSelector = document.querySelector("#score > h3")
    if (multiplier > 1) {
      score = score * (multiplier - 1);
      scoreSelector.innerHTML = score;
      if (scoreSelector.innerHTML > 0) {
        scoreSelector.style.color = '#3AB795'
        setTimeout(() => {
          scoreSelector.style.color = '#f1f2f5'
        }, 300);
      }
    } else {
      // multiply('reset')
      newScore = score++
      scoreSelector.innerHTML = newScore;
      if (scoreSelector.innerHTML > 0) {
        scoreSelector.style.color = '#3AB795'
        setTimeout(() => {
          scoreSelector.style.color = '#f1f2f5'
        }, 300);
      }
    }
  }

  function isCorrect(evt, letterIndex, currentWordSel) {
    i = letterIndex;
    currentLetter = currentWordSel[i].innerHTML;
    if (evt.key !== currentLetter) {
      currentWordSel[i].className = "";
      currentWordSel[i].classList.add("incorrect")
      multiply('reset')
      return false;
    } else {
      currentWordSel[i].className = "";
      currentWordSel[i].classList.add("correct")
      return true;
    }
  }
  function multiplyScore() {

  }
  let arrayIndex = 0;
  let wordLength = 0;
  function newWord(arr, gamemode) {
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
            if (gamemode === 1) {
              if (multiplier === 1) {
                console.log("woo")
                addScore()
              }
              multiply('multi')

              document.body.removeEventListener('keydown', eventListener, false)
              setTimeout(function () { newWord(randWordArray, gamemode) }, 30);
              clearInterval(toggle)
            } else if (gamemode === 2) {
              document.body.removeEventListener('keydown', eventListener, false)
              setTimeout(function () { newWord(randWordArray, gamemode) }, 30);
              clearInterval(toggle)
            }
          }
        }
      }
    })
    arrayIndex++
  }
  if (gamemode === 1) {
    removeButtons()
    startTimer()
    addMultiplier()
    newWord(randWordArray, 1)
  } else if (gamemode === 2) {
    removeButtons()
    startTimer()
    newWord(randWordArray, 2)
  }
}



window.onload = async function () {
  let baseURL = 'https://random-word-api.herokuapp.com/all?key='
  const key = '00NP3T24'
  shuffle(randWordArray)

  document.querySelector('#start').addEventListener('click', function () {
    startGame(2)
  })
  document.querySelector('#start2').addEventListener('click', function () {
    startGame(1)
  })
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