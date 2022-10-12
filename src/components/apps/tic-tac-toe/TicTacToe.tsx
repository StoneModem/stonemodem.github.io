import React, { useEffect, useState } from "react";

import "./TicTacTable.css";

import { StatusText } from "./moduleSrc/ui";
import { evalWinner } from "./moduleSrc/utils";

import * as EvalNextBestMove from "./moduleSrc/EvalNextBestMove";

import { cellState } from "./moduleSrc/interfaces";

import Ologo from "../../../images/tttSymbols/o.svg";
import Xlogo from "../../../images/tttSymbols/x.svg";
import { app_constants } from "../../../AppConstants";
import MainWrapper from "../../utils/MainWrapper";

function clickedCell(
  cellId: number,
  board: cellState[],
  gameIsActive: boolean,
  player: string,
  setGameIsActive: React.Dispatch<React.SetStateAction<boolean>>,
  setWinner: React.Dispatch<React.SetStateAction<string | null>>,
  setBoard: React.Dispatch<React.SetStateAction<cellState[]>>,
  setPlayer: React.Dispatch<React.SetStateAction<string>>,
  machineIsThinking: boolean
) {
  if (board[cellId].state !== undefined) return; // spot is already taken
  if (!gameIsActive) return; // there is a winner. Player should restart
  if (machineIsThinking) return; // computer is going to make a move next... should wait for that move.

  // make board duplicate and update with current player.
  var newBoard = board.map((a) => ({ ...a }));
  newBoard[cellId].state = player;

  // evaluate if someone has won
  var isWinner = evalWinner(newBoard);

  // declare winner before updating board to new board
  if (isWinner !== null) {
    setGameIsActive(false);
    setWinner(isWinner);
  }
  setBoard(newBoard);

  // flip player for next move.
  setPlayer(player === "x" ? "o" : "x");
}

function Cell({
  gameIsActive,
  setGameIsActive,
  setWinner,
  cellId,
  board,
  setBoard,
  player,
  setPlayer,
  machineIsThinking,
}: {
  gameIsActive: boolean;
  setGameIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  cellId: number;
  board: cellState[];
  setBoard: React.Dispatch<React.SetStateAction<cellState[]>>;
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  machineIsThinking: boolean;
}) {
  return (
    <div
      className={
        // add highlighted class on conditional
        board[cellId].highlighted ? "highlighted" : "non-highlighted"
      }
      style={{
        // : "1px solid black",
        height: "100%",
        width: "100%",
      }}
      onClick={() => {
        clickedCell(
          cellId,
          board,
          gameIsActive,
          player,
          setGameIsActive,
          setWinner,
          setBoard,
          setPlayer,
          machineIsThinking
        );
      }}
    >
      {board[cellId].state !== undefined && (
        <img
          alt=""
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
            zIndex: 100,
          }}
          src={board[cellId].state === "x" ? Xlogo : Ologo}
        />
      )}
    </div>
  );
}
function TicTacTable({
  gameIsActive,
  setGameIsActive,
  setWinner,
  board,
  setBoard,
  player,
  setPlayer,
  machineIsThinking,
}: {
  gameIsActive: boolean;
  setGameIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  board: cellState[];
  setBoard: React.Dispatch<React.SetStateAction<cellState[]>>;
  player: string;
  setPlayer: React.Dispatch<React.SetStateAction<string>>;
  machineIsThinking: boolean;
}) {
  return (
    <>
      {[...Array(3)].map((_, i) => {
        return (
          <div key={i} className="grid-container">
            {[...Array(3)].map((_, j) => {
              return (
                <div
                  key={j}
                  className="grid-item"
                  style={{ boxShadow: app_constants.DEFAULT_SHADOW }}
                >
                  <Cell
                    key={i * 3 + j}
                    cellId={i * 3 + j}
                    gameIsActive={gameIsActive}
                    setGameIsActive={setGameIsActive}
                    setWinner={setWinner}
                    board={board}
                    setBoard={setBoard}
                    player={player}
                    setPlayer={setPlayer}
                    machineIsThinking={machineIsThinking}
                  ></Cell>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
const InitBoard: cellState[] = [...Array(9)].map(() => {
  return { state: undefined, highlighted: false };
});
const players = ["x", "o"];
const AI_plays_as = players[Math.floor(Math.random() * players.length)];

function TicTacToe() {
  const [board, setBoard] = useState<cellState[]>(
    InitBoard.map((a) => ({ ...a }))
  );
  const [player, setPlayer] = useState<string>("x");
  const [versus, setVersus] = useState<string | null>(null);
  const [gameIsActive, setGameIsActive] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [machineIsThinking, setMachineIsThinking] = useState<boolean>(false);

  useEffect(() => {
    // if doc not loaded, avoid this useEffect.
    if (versus === null || !gameIsActive) {
      return;
    }

    if (AI_plays_as === player && versus === "ai") {
      /* * All next best move approaches * */
      // var random_cell_id = EvalNextBestMove.pickRandom(board);
      var random_cell_id = EvalNextBestMove.minMaxAlgo(board, player);
      // var random_cell_id = EvalNextBestMove.alphaBetaPrune(board, player);

      var MACHINE_THINK_TIME_MS = 1000;
      setMachineIsThinking(true);
      setTimeout(() => {
        clickedCell(
          random_cell_id,
          board,
          gameIsActive,
          player,
          setGameIsActive,
          setWinner,
          setBoard,
          setPlayer,
          machineIsThinking
        );
        setMachineIsThinking(false);
      }, MACHINE_THINK_TIME_MS);
    }
  }, [player, gameIsActive]);

  return (
    <MainWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TicTacTable
          gameIsActive={gameIsActive}
          setGameIsActive={setGameIsActive}
          setWinner={setWinner}
          board={board}
          setBoard={setBoard}
          player={player}
          setPlayer={setPlayer}
          machineIsThinking={machineIsThinking}
        />
        <StatusText
          gameIsActive={gameIsActive}
          winner={winner}
          player={player}
          versus={versus}
          AI_plays_as={AI_plays_as}
          machineIsThinking={machineIsThinking}
          setBoard={setBoard}
          setGameIsActive={setGameIsActive}
          setWinner={setWinner}
          InitBoard={InitBoard}
          setVersus={setVersus}
        />
      </div>
    </MainWrapper>
  );
}

export default TicTacToe;
