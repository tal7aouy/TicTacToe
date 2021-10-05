// Import Game class
import Game from './Game.js'
import GameView from './GameView.js'
// restart button
const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', restartGame)
let game = new Game()
let gameView = new GameView()
const tiles = document.querySelectorAll('.board-tile')
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    OnTileClick(tile.dataset.index)
  })
})

function OnTileClick(pos) {
  game.nextMove(pos)
  gameView.updateBoard(game)
}

function restartGame() {
  game = new Game()
  gameView = new GameView()
  gameView.updateBoard(game)
}
