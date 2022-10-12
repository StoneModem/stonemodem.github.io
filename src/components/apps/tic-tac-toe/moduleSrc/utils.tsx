import { cellState } from "./interfaces";

export const evalWinner = (board: cellState[]): string | null => {
  function arrayIsEqual(a: (string | undefined)[]): string | null {
    if (a.every((val, i, arr) => val === arr[0])) {
      if (a[0] !== undefined) {
        return a[0];
      }
    }
    return null;
  }

  var isEq, i;

  // check columns
  for (i of [0, 1, 2]) {
    isEq = arrayIsEqual([
      board[i].state,
      board[i + 3].state,
      board[i + 6].state,
    ]);
    if (isEq !== null) {
      // highlight the proper cells
      board[i].highlighted = true;
      board[i + 3].highlighted = true;
      board[i + 6].highlighted = true;
      return isEq;
    }
  }

  // check rows
  for (i of [0, 3, 6]) {
    isEq = arrayIsEqual([
      board[i].state,
      board[i + 1].state,
      board[i + 2].state,
    ]);
    if (isEq !== null) {
      // highlight the proper cells
      board[i].highlighted = true;
      board[i + 1].highlighted = true;
      board[i + 2].highlighted = true;
      return isEq;
    }
  }

  // check diags
  // "\"
  isEq = arrayIsEqual([board[0].state, board[4].state, board[8].state]);
  if (isEq !== null) {
    // highlight the proper cells
    board[0].highlighted = true;
    board[4].highlighted = true;
    board[8].highlighted = true;
    return isEq;
  }

  // "/"
  isEq = arrayIsEqual([board[2].state, board[4].state, board[6].state]);
  if (isEq !== null) {
    // highlight the proper cells
    board[2].highlighted = true;
    board[4].highlighted = true;
    board[6].highlighted = true;
    return isEq;
  }

  // check if tie has occurred.
  var spaceIsAvailable = false;
  for (var cell of board) {
    if (cell.state === undefined) {
      spaceIsAvailable = true;
    }
  }

  if (!spaceIsAvailable) {
    return "tie";
  }

  return null;
};
