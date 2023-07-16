/* eslint-disable react/prop-types */

// Noices ==> Course stop here {Why immutability is important} date 9/july/2023

import { useState } from 'react'
import './App.css'

function  Game({value, onSquareClick}) {
  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  )
}

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = 'X';
    }else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="box">
        <Game value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Game value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Game value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="box">
        <Game value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Game value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Game value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="box">
        <Game value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Game value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Game value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
