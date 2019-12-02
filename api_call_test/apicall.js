let randWordArray = ["abandon", "abash", "abate", "abide", "absorb", "accept", "accompany", "ache", "achieve", "acquire", "act", "add", "address", "adjust", "admire", "admit", "advise", "afford", "agree", "alight", "allow", "animate", "announce", "answer", "apologize", "appear", "applaud", "apply", "approach", "approve", "argue", "arise", "arrange", "arrest", "ask", "assert", "assort", "astonish", "attack", "atten", "attract", "audit", "avoid", "awake", "bang", "banish", "bash", "bat", "be", "bear", "beat", "beautify", "become", "befall", "beg", "begin", "behave", "behold", "believe", "belong", "bend", "bereave", "beseech", "bet", "betray", "bid", "bind", "bite", "bleed", "bless", "blossom", "blow", "blur", "blush", "board", "boast", "boil", "bow", "box", "bray", "break", "breathe", "breed", "bring", "broadcast", "brush", "build", "burn", "burst", "bury", "bust", "buy", "buzz", "calculate", "call", "canvass", "capture", "caress", "carry", "carve", "cash", "cast", "catch", "cause", "cease", "celebrate", "challenge", "change", "charge", "chase", "chat", "check", "cheer", "chew", "chide", "chip", "choke", "choose", "classify", "clean", "cleave", "click", "climb", "cling", "close", "clothe", "clutch", "collapse", "collect", "colour", "come", "comment", "compare", "compel", "compete", "complain", "complete", "conclude", "conduct", "confess", "confine", "confiscate", "confuse", "congratulate", "connect", "connote", "conquer", "consecrat", "consen", "conserve", "consider", "consign", "consist", "console", "consort", "conspire", "constitute", "constrain", "construct", "construe", "consult", "contain", "contemn", "contend", "contest", "continue", "contract", "contradict", "contrast", "contribute", "contrive", "control", "convene", "converge", "convers", "convert", "convey", "convict", "convince", "coo", "cook", "cool", "co-operate", "cope", "copy", "correct", "correspon", "corrod", "corrupt", "cost", "cough", "counsel", "count", "course", "cover", "cower", "crack", "crackle", "crash", "crashed", "crashed", "crashes", "crashing", "crave", "create", "creep", "crib", "cross", "crowd", "crush", "cry", "curb", "cure", "curve", "cut", "cycle", "damage", "damp", "dance", "dare", "dash", "dazzle", "deal", "decay", "decide", "declare", "decorate", "decrease", "dedicate", "delay", "delete", "deny", "depend", "deprive", "derive", "describe", "desire", "destroy", "detach", "detect", "determine", "develop", "die", "differ", "dig", "digest", "dim", "diminish", "dine", "dip", "direct", "disappear", "discover", "discuss", "disobey", "display", "dispose", "distribute", "disturb", "disuse", "dive", "divide", "do", "donate", "download", "drag", "draw", "dream", "dress", "drill", "drink", "drive", "drop", "dry", "dump", "dwell", "dye", "earn", "eat", "educat", "empower", "empty", "encircle", "encourage", "encroach", "endanger", "endorse", "endure", "engrave", "enjoy", "enlarge", "enlighten", "enter", "envy", "erase", "escape", "evaporate", "exchange", "exclaim", "exclude", "exist", "expand", "expect", "explain", "explore", "express", "extend", "eye", "face", "fail", "faint", "fall", "fan", "fancy", "favour", "fax", "feed", "feel", "ferry", "fetch", "fight", "fill", "find", "finish", "fish", "fit", "fix", "fizz", "flap", "flash", "flee", "fling", "float", "flop", "fly", "fold", "follow", "forbid", "force", "forecast", "foretell", "forget", "forgive", "forlese", "form", "forsake", "found", "frame", "free", "freeze", "frighten", "fry", "fulfil", "gag", "gain", "gainsay", "gash", "gaze", "get", "give", "glance", "glitter", "glow", "go", "google", "govern", "grab", "grade", "grant", "greet", "grind", "grip", "grow", "guard", "guess", "guide", "handle", "hang", "happen", "harm", "hatch", "hate", "have", "heal", "hear", "heave", "help", "hew", "hide", "hinder", "hiss", "hit", "hoax", "hold", "hop", "hope", "horrify", "hug", "hum", "humiliate", "hunt", "hurl", "hurry", "hurt", "hush", "hustle", "hypnotize", "idealize", "identify", "idolize", "ignite", "ignore", "ill-treat", "illuminate", "illumine", "illustrate", "imagine", "imbibe", "imitate", "immerse", "immolate", "immure", "impair", "impart", "impeach", "impede", "impel", "impend", "imperil", "impinge", "implant", "implicate", "implode", "implore", "imply", "import", "impose", "impress", "imprint", "imprison", "improve", "inaugurate", "incise", "include", "increase", "inculcate", "indent", "indicate", "induce", "indulge", "infect", "infest", "inflame", "inflate", "inflect", "inform", "infringe", "infuse", "ingest", "inhabit", "inhale", "inherit", "initiate", "inject", "injure", "inlay", "innovate", "input", "inquire", "inscribe", "insert", "inspect", "inspire", "install", "insult", "insure", "integrate", "introduce", "invent", "invite", "join", "jump", "justify", "keep", "kick", "kid", "kill", "kiss", "kneel", "knit", "knock", "know", "lade", "land", "last", "latch", "laugh", "lay", "lead", "leak", "lean", "leap", "learn", "leave", "leer", "lend", "let", "lick", "lie", "lift", "light", "like", "limp", "listen", "live", "look", "lose", "love", "magnify", "maintain", "make", "manage", "march", "mark", "marry", "mash", "match", "matter", "mean", "measure", "meet", "melt", "merge", "mew", "migrate", "milk", "mind", "mislead", "miss", "mistake", "misuse", "mix", "moan", "modify", "moo", "motivate", "mould", "moult", "move", "mow", "multiply", "murmur", "nail", "nap", "need", "neglect", "nip", "nod", "note", "notice", "notify", "nourish", "nurse", "obey", "oblige", "observe", "obstruct", "obtain", "occupy", "occur", "offer", "offset", "omit", "ooze", "open", "operate", "opine", "oppress", "opt", "optimize", "orde", "organize", "originate", "output", "overflow", "overtake", "owe", "own", "pacify", "paint", "pardon", "part", "partake", "participate", "pass", "paste", "pat", "patch", "pause", "pay", "peep", "perish", "permit", "persuade", "phone", "place", "plan", "play", "plead", "please", "plod", "plot", "pluck", "ply", "point", "polish", "pollute", "ponder", "pour", "pout", "practise", "praise", "pray", "preach", "prefer", "prepare", "prescribe", "present", "preserve", "preset", "preside", "press", "pretend", "prevent", "print", "proceed", "produce", "progress", "prohibit", "promise", "propose", "prosecute", "protect", "prove", "provide", "pull", "punish", "purify", "push", "put", "qualify", "quarrel", "question", "quit", "race", "rain", "rattle", "reach", "read", "realize", "rebuild", "recall", "recast", "receive", "recite", "recognize", "recollect", "recur", "redo", "reduce", "refer", "reflect", "refuse", "regard", "regret", "relate", "relax", "rely", "remain", "remake", "remove", "rend", "renew", "renounce", "repair", "repeat", "replace", "reply", "report", "request", "resell", "resemble", "reset", "resist", "resolve", "respect", "rest", "restrain", "retain", "retch", "retire", "return", "reuse", "review", "rewind", "rid", "ride", "ring", "rise", "roar", "rob", "roll", "rot", "rub", "rule", "run", "rush", "sabotage", "sack", "sacrifice", "sadden", "saddle", "sag", "sail", "sally", "salute", "salvage", "salve", "sample", "sanctify", "sanction", "sap", "saponify", "sash", "sashay", "sass", "sate", "satiate", "satirise", "satisfy", "saturate", "saunter", "save", "savor", "savvy", "saw", "say", "scab", "scabble", "scald", "scale", "scam", "scan", "scant", "scar", "scare", "scarify", "scarp", "scat", "scatter", "scold", "scorch", "scowl", "scrawl", "scream", "screw", "scrub", "search", "seat", "secure", "see", "seek", "seem", "seize", "select", "sell", "send", "sentence", "separate", "set", "sever", "sew", "shake", "shape", "share", "shatter", "shave", "shear", "shed", "shine", "shirk", "shit", "shiver", "shock", "shoe", "shoot", "shorten", "shout", "show", "shrink", "shun", "shut", "sight", "signal", "signify", "sing", "sink", "sip", "sit", "ski", "skid", "slam", "slay", "sleep", "slide", "slim", "sling", "slink", "slip", "slit", "smash", "smell", "smile", "smite", "smooth", "smother", "snap", "snatch", "sneak", "sneeze", "sniff", "soar", "sob", "solicit", "solve", "soothe", "sort", "sow", "sparkle", "speak", "speed", "spell", "spend", "spill", "spin", "spit", "split", "spoil", "spray", "spread", "spring", "sprout", "squeeze", "stand", "stare", "start", "state", "stay", "steal", "steep", "stem", "step", "sterilize", "stick", "stimulate", "sting", "stink", "stir", "stitch", "stoop", "stop", "store", "strain", "stray", "stress", "stretch", "strew", "stride", "strike", "string", "strive", "study", "submit", "subscribe", "subtract", "succeed", "suck", "suffer", "suggest", "summon", "supply", "support", "suppose", "surge", "surmise", "surpass", "surround", "survey", "survive", "swallow", "sway", "swear", "sweat", "sweep", "swell", "swim", "swing", "swot", "take", "talk", "tap", "taste", "tax", "teach", "tear", "tee", "tell", "tempt", "tend", "terminate", "terrify", "test", "thank", "think", "thrive", "throw", "thrust", "thump", "tie", "tire", "toss", "touch", "train", "trampl", "transfer", "transform", "translate", "trap", "travel", "tread", "treasure", "treat", "tree", "tremble", "triumph", "trust", "try", "turn", "type", "typeset", "understand", "undo", "uproot", "upset", "urge", "use", "utter", "value", "vanish", "vary", "verify", "vex", "vie", "view", "violate", "vomit", "wake", "walk", "wander", "want", "warn", "waste", "watch", "water", "wave", "wax", "waylay", "wear", "weave", "wed", "weep", "weigh", "welcome", "wet", "whip", "whisper", "win", "wind", "wish", "withdraw", "work", "worry", "worship", "wring", "write", "yawn", "yell", "yield", "zinc", "zoom", "account", "achiever", "acoustics", "act", "action", "activity", "actor", "addition", "adjustment", "advertisement", "advice", "aftermath", "afternoon", "afterthought", "agreement", "air", "airplane", "airport", "alarm", "amount", "amusement", "anger", "angle", "animal", "answer", "ant", "ants", "apparatus", "apparel", "apple", "apples", "appliance", "approval", "arch", "argument", "arithmetic", "arm", "army", "art", "attack", "attempt"]
let score = 0;
let sec = 60;
let streak = 0;
let highestStreak = 0;

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
  button2.innerHTML = 'START STREAK GAME'
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
  function multiply(type) {
    let multiplierText = document.querySelector('#multiplierHere')
    if (type === 'reset') {
      if (streak > highestStreak) {
        highestStreak = streak;
        multiplierText.innerHTML = highestStreak;
        streak = 0;
      }
    }
    if (type === 'streak') {
      console.log('streak')
      streak++
      multiplierText.innerHTML = streak;
    }
  }
  // function addMultiplier() {
  //   let multiplierDiv = document.querySelector('#scoreMulti')
  //   multiplierDiv.style.visibility = 'visible'
  //   let multiplierText = document.querySelector('#multiplierHere')
  //   multiplierText.innerHTML = highestStreak;
  // }
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
    if (streak > 0 || highestStreak > 0) {
      scoreSelector.innerHTML = streak;
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
              if (streak > 0 || highestStreak > 0) {
                addScore()
              }
              multiply('streak')
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
    // addMultiplier()
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