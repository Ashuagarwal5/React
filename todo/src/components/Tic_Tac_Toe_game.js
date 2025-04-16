import React from 'react'
import Square from './Square'
import './board.css'

function Tic_Tac_Toe_game() {
  return (
    <div className="game">

      <h1>Tic Tac Toe Game</h1>
      
      <div className="board"> 
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  )
}

export default Tic_Tac_Toe_game