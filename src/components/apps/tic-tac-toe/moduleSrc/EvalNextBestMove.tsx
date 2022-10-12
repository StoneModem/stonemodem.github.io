import { evalWinner } from "./utils";

import { cellState } from "./interfaces";

const pickRandom = (board: cellState[]) => {
  var available_spots = [];
  for (var cellid = 0; cellid < board.length; cellid++) {
    if (board[cellid].state === undefined) {
      available_spots.push(cellid);
    }
  }
  var random_cell_id =
    available_spots[Math.floor(Math.random() * available_spots.length)];
  return random_cell_id;
};

// declare algo depth and global maxim. player (set when func is called)
var max_depth: number = 10,
  maximizing_player: string;

// Metric to score for all MinMax operations
const eval_metric: {
  [gameOutcome: string]: number;
} = {
  tie: 0,
  null: 0,
};

const minMaxAlgo = (board: cellState[], player: string) => {
  // init maximizing player and eval metrics depending on who AI is playing as
  maximizing_player = player;
  eval_metric[player] = 1;
  eval_metric[player === "o" ? "x" : "o"] = -1;

  // duplicate of board to avoid rerender in each sim
  var tempBoard = board.map((a) => ({ ...a }));

  var best_moves: number[] = [],
    best_score = -Infinity;
  var score, i;

  for (i = 0; i < tempBoard.length; i++) {
    // if spot is available for a move, investigate the score.
    if (tempBoard[i].state === undefined) {
      tempBoard[i].state = player;

      // initialize MinMax with isMax == false. "Max" move was made in line above.
      score = MinMax(tempBoard, max_depth, false);
      tempBoard[i].state = undefined;

      // if new best score is found, reset array of moves.
      if (score > best_score) {
        best_score = score;
        best_moves = [i];
      } else if (score === best_score) {
        // else if move is found with equal score to prev, add to array of moves.
        best_moves.push(i);
      }
    }
  }

  // randomly sample array of best moves at end
  return best_moves[Math.floor(Math.random() * best_moves.length)];
};

const alphaBetaPrune = (board: cellState[]) => {
  // TODO: Implement AB-prune algo with MinMax
  return 0;
};

export { pickRandom, minMaxAlgo, alphaBetaPrune };

function MinMax(
  board: cellState[],
  depth: number,
  isMaximizing: boolean
): number {
  // Check if board is either terminal, or max-depth is reached.
  var isTerminal = evalWinner(board);
  if (isTerminal !== null) return eval_metric[isTerminal];
  if (depth <= 0) return 0;

  // set max/min initial score according to max/min bool
  var score = Infinity * (isMaximizing ? -1 : 1);
  for (var i = 0; i < board.length; i++) {
    if (board[i].state === undefined) {
      // set board according to which player. Either maximizing or opposite.
      board[i].state = isMaximizing
        ? maximizing_player
        : maximizing_player === "o"
        ? "x"
        : "o";

      // apply MinMax on new board inverting isMax bool and decreasing depth.
      var newscore = MinMax(board, depth - 1, !isMaximizing);

      // use math.max or math.min to set new score value according to isMax bool.
      score = isMaximizing
        ? Math.max(newscore, score)
        : Math.min(newscore, score);

      // reset board position at end.
      board[i].state = undefined;
    }
  }
  return score;
}
