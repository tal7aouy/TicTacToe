// Import Game class
import Game from './Game.js'
import GameView from './GameView.js'
// get instance
let game = new Game()
let gameView = new GameView()
// restart button
const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', restartGame)

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
  gameView.updateBoard(game)
}

// initial game
gameView.updateBoard(game)
