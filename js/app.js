 $('#btn__reset').on('click', () => {

   const game = new Game();
   game.startGame();

   //on button click or key press, handle the interaction
   $('#qwerty button').on('click', (e) => {
     game.handleInteraction(e.target.textContent);
   })

   //extra credit for keydown
   $(document).keydown((e) => {
     //check that the keypress is a letter so it doesn't reduce hearts when I press number
     //References the key values from here https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     if (e.which >= 65 && e.which <= 90) {
      game.handleInteraction(e.key);
      }
   });




 });
