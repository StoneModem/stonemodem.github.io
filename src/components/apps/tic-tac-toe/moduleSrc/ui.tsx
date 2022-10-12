import React from "react";
import { app_constants } from "../../../../AppConstants";

import { cellState } from "./interfaces";
import "./LoadingIcon.css";

function RestartButton({
  setBoard,
  gameIsActive,
  setGameIsActive,
  setWinner,
  InitBoard,
  setVersus,
}: {
  setBoard: React.Dispatch<React.SetStateAction<cellState[]>>;
  gameIsActive: boolean;
  setGameIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  InitBoard: cellState[];
  setVersus: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  if (gameIsActive) return null;

  return (
    <div
      onClick={() => {
        setBoard(InitBoard.map((a) => ({ ...a })));
        setGameIsActive(true);
        setWinner(null);
      }}
      style={{
        gap: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <button
        className="classy-button"
        style={{ boxShadow: app_constants.DEFAULT_SHADOW }}
        onClick={() => {
          setVersus("self");
        }}
      >
        New 2p game
      </button>
      <button
        className="classy-button"
        style={{ boxShadow: app_constants.DEFAULT_SHADOW }}
        onClick={() => {
          setVersus("ai");
        }}
      >
        New game vs AI
      </button>
    </div>
  );
}

function StatusText({
  gameIsActive,
  winner,
  player,
  versus,
  AI_plays_as,
  machineIsThinking,

  setBoard,
  setGameIsActive,
  setWinner,
  InitBoard,
  setVersus,
}: {
  gameIsActive: boolean;
  winner: string | null;
  player: string | null;
  versus: string | null;
  AI_plays_as: string | null;
  machineIsThinking: boolean;

  setBoard: React.Dispatch<React.SetStateAction<cellState[]>>;
  setGameIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  InitBoard: cellState[];
  setVersus: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <>
      <h3>
        {winner === null
          ? !gameIsActive
            ? "Choose game mode:"
            : `Current player is: ${player}`
          : winner === "tie"
          ? `It's a ${winner}!!`
          : `Winner is ${winner}!!`}
      </h3>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {gameIsActive ? (
          <>
            <div className="loading-icon" />
            {versus === "ai" && <h3>Computer plays as: "{AI_plays_as}".</h3>}
            <div className="loading-icon">
              {machineIsThinking && (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="loading-icon" />
            <RestartButton
              setBoard={setBoard}
              gameIsActive={gameIsActive}
              setGameIsActive={setGameIsActive}
              setWinner={setWinner}
              InitBoard={InitBoard}
              setVersus={setVersus}
            />
            <div className="loading-icon" />
          </>
        )}
      </div>
    </>
  );
}

export { RestartButton, StatusText };
