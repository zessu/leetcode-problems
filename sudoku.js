class Solution {
  validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  scanAllRows(board) {
    for (const item in board) {
      const rowVals = new Map();
      for (let i = 0; i < 9; i++) {
        const current = board[item][i];
        if (!this.validValues.includes(current)) return false;
        if (rowVals.has(current) && current !== ".") return false;
        rowVals.set(current, 1);
      }
    }
    return true;
  }

  scanAllColumns(board) {
    for (const item in board) {
      const colVals = new Map();
      for (let i = 0; i < 9; i++) {
        const current = board[i][item];
        if (!this.validValues.includes(current)) return false;
        if (colVals.has(current) && current !== ".") return false;
        colVals.set(current, 1);
      }
    }
    return true;
  }

  scanGrid(boards, start, end) {
    const gridVals = new Map();
    for (let i = start; i < start + 3; i++) {
      for (let j = end; j < end + 3; j++) {
        const current = boards[i][j];
        if (gridVals.has(current) && current !== ".") return false;
        gridVals.set(current, 1);
      }
    }
    return true;
  }

  scanAllGrids(boards) {
    let isValid = true;
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        isValid = this.scanGrid(boards, i, j);
        if (!isValid) return false;
      }
    }
    return isValid;
  }

  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rowsValid = this.scanAllRows(board);
    const colsValid = this.scanAllColumns(board);
    const gridsValid = this.scanAllGrids(board);

    return rowsValid && colsValid && gridsValid;
  }
}

const board3 = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

const board2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const sol = new Solution();
console.log(sol.isValidSudoku(board3));
