import React, { Component } from "react";
import LogicAndReset from "./Logic"
import DrawBoard from "./DrawBoard"

class TicTacToe extends Component {

     constructor() {
          super();

          this.state = {
               board: ['', '', '', '', '', '', '', '', ''],
               turn: 'X',
          }
     }

     toggleSquare = (idx) => {
          let stageTurn = this.state.board;
          if (!this.state.board[idx]){
               stageTurn[idx] = this.state.turn;
               this.setState({ board: stageTurn })
               this.state.turn === 'X' ? this.setState({ turn: 'O' }) : this.setState({ turn: 'X' })
          }
     }

     reset = () => {
          this.setState({ board: ['', '', '', '', '', '', '', '', ''], turn: 'X' })
     }

     render() {
          return(
               <div className="tictac-container">
                    <h1>Tic Tac Toe</h1>
                    <div className="tictac-game-board">
                         <DrawBoard board={ this.state.board } commitTurn={ this.toggleSquare }/>
                    </div>
               <LogicAndReset reset={ this.reset } />
               </div>
          )
     }
}

export default TicTacToe