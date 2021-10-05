export default class Game {
  constructor() {
    this.turn = 'X'
    this.board = new Array(9).fill(null)
  }
  changeTurn() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else {
      this.turn = 'X'
    }
  }
  nextMove(index) {
    // if we won then we need to stop the move
    if (this.endOfGame()) {
      return
    }
    if (this.board[index]) {
      return
    }
    this.board[index] = this.turn
    let WinningCombinations = this.findWinningCombinations()
    if (!WinningCombinations) {
      this.changeTurn()
    }
  }
  findWinningCombinations() {
    const WinningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const combination of WinningCombinations) {
      const [a, b, c] = combination
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return combination
      }
    }
    return null
  }

  endOfGame() {
    let WinningCombinations = this.findWinningCombinations()
    if (WinningCombinations) {
      return true
    } else {
      return false
    }
  }
}
