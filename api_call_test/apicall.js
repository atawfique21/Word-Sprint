window.onload = function () {
  const button = document.querySelector('#button')
  let baseURL = 'https://random-word-api.herokuapp.com/all?key='
  const key = 'RHRG9QV3'
  let randWordArray = []
  let getRandWord = async function () {
    // get a list of words
    const response = await axios.get(`${baseURL}${key}`)

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
  console.log(randWordArray)
}

