// Wait till the browser is ready to render the game (avoids glitches)
window.gameBot = null;
window.requestAnimationFrame(function () {
  window.gameBot = new GameBot(new GameManager(12, KeyboardInputManager, HTMLActuator, LocalStorageManager));
  window.gameBot.start();
});
