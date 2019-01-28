class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }


  /**
   * Adds a phrase to the visual layer
   **/
  addPhraseToDisplay() {
    const phrase = this.phrase.toLowerCase();
    console.log(phrase);
    for (let char in phrase) {
      if (phrase[char] != " ") {
        $('#phrase').append(`<li class="hide letter ${phrase[char]}">${phrase[char]}</li>`);
      } else if (phrase[char] === " ") {
        $('#phrase').append(`<li class="space"> </li>`);
      }
    }
  }


  /** checks to see if the letter selected by the player matches a letter in the phrase.
   * @return {boolean} returns if the letter exist in the current phrase
   **/
  checkLetter(e) {
    if (this.phrase.includes(e)) {
      console.log("that letter is in the phrase");
      this.showMatchedLetter(e);
      return true;
    }
  }

  /** checks to see if the letter selected by the player matches a letter in the phrase.
   * @param {string} accepts letter from original event object and displays  if the letter matches
   **/
  showMatchedLetter(e) {
    $(`li.hide.letter.${e}`).removeClass().addClass(`show letter ${e}`);;
  }

}
