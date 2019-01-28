 $('#btn__reset').on('click', () => {

   const game = new Game();
   game.startGame();

   //on button click or key press, handle the interaction
   $('#qwerty button').on('click', (e) => {
     game.handleInteraction(e.target.textContent);
   })

   //extra credit for keydown
   $(document).keydown((e) => {
     game.handleInteraction(e.key);
   });




 });
