class Game {

  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Starts the game by hiding the overlay and getting a random phrase
   **/
  startGame() {
    $('#overlay').hide()
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }



  /**
   * Creates new phrases for the game
   * @return {array} array of new phrase objects
   **/
  createPhrases() {
    const phrases = [new Phrase("tHIs is a Test".toLowerCase()),
      new Phrase("Welcome To Thunderdome".toLowerCase()),
      new Phrase("The PONY is Brown".toLowerCase()),
      new Phrase("Hello Hi How Are Ya".toLowerCase()),
      new Phrase("Nick Robin".toLowerCase())
    ];
    return phrases;
  }


  /**
   * Randomly grabs a random phrase from array
   * @return  {string} A string from the phrases array
   */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }


  /**
   * Handles the different events for both clicks and key presses
   * @param {object} accepts event object from front end
   **/
  handleInteraction(e) {
    // Disable the selected letter’s onscreen keyboard button.
    if (this.activePhrase.checkLetter(e)) {
      $(`.keyrow button:contains('${e}')`).attr("disabled", true).addClass("chosen");
      this.checkForWin();
    } else if (!this.activePhrase.checkLetter(e)) {
      $(`.keyrow button:contains('${e}')`).attr("disabled", true).addClass("wrong");
      this.removeLife();
    }
  }

  /**
   * Removes a heart if the correct letter is not guessed
   * Calls the game over function when more than 4 hearts are gone
   **/
  removeLife() {
    if (this.missed >= 4) {
      console.log("game over");
      this.gameOver(false);
    } else {
      $('li.tries img')[this.missed].src = "images/lostHeart.png";
      this.missed += 1;
    }
  }

  /**
   * Checks if the game has been won by proxy of all chars being revealed
   **/
  checkForWin() {
    if ($('#phrase li').filter(".hide").length === 0) {
      this.gameOver(true);
    }
  }

  /**
   * Displays the overlay with relevant text and resets the board
   * @param {boolean} accepts a true/false if the game was won
   **/
  gameOver(win) {
    if (win) {
      $('#game-over-message')[0].textContent = "You win!"
      $('#overlay').addClass('win').delay(1500).show();
      this.resetBoard();
    } else {
      $('#game-over-message')[0].textContent = "You lost. Click to try again";
      $('#overlay').addClass('lose').delay(1500).show();
      this.resetBoard();
    }
  }

  /**
   * Helper function to reset the board to it's original state
   **/
  resetBoard() {
    this.missed = 0;
    $('#phrase').empty();
    $(`.keyrow button`).removeClass().addClass('key');
    $(`.keyrow button`).attr("disabled", false);
    $('li.tries img')[0].src = "images/liveHeart.png";
    $('li.tries img')[1].src = "images/liveHeart.png";
    $('li.tries img')[2].src = "images/liveHeart.png";
    $('li.tries img')[3].src = "images/liveHeart.png";
    $('li.tries img')[4].src = "images/liveHeart.png";
  }
}
