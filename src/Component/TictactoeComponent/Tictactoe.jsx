import React, { useState,useEffect } from "react";
import Board from "./Board";

export default function Tictactoe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

    // useEffect để theo dõi history
    useEffect(() => {
      console.log('History Updated:', history);
      // Bạn có thể format history ở đây nếu cần
      history.forEach((step, index) => {
        console.log(`Step ${index}:`, step);
      });
    }, [history]); // Chỉ chạy khi history thay đổi
  
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <button
          onClick={() => {
            setHistory([Array(9).fill(null)]);
            setXIsNext(true);
          }}
        >
          Reset Game
        </button>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    </>
  );
}
