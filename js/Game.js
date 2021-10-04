export default class Game {
  constructor() {
    console.log('init')
    this.turn = 'X'
    this.board = new Array(9).fill(null)
  }
  nextTurn() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else {
      this.turn = 'X'
    }
  }
  makeMove(index) {
    this.board[index] = this.turn
  }
}
