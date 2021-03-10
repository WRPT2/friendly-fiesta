import React, { Component } from "react";
import { ReactComponent as BlankTile } from "./SVG/blankTile.svg"
import { ReactComponent as XTile } from "./SVG/xTile.svg"
import { ReactComponent as OTile } from "./SVG/oTile.svg"



class DrawBoard extends Component {
    render() {
        return (this.props.board.map((square, idx) => 
        { 
             if (!this.props.board[idx]) {
                  return <div className="tictac-square" onClick={ () => this.props.commitTurn(idx) } key={ idx }><BlankTile className="tictac-game-tile"/></div>
             }
             else if (this.props.board[idx] === 'X') {
                  return <div className="tictac-square" onClick={ () => this.props.commitTurn(idx) } key={ idx }><XTile className="tictac-game-tile" /></div>
             }
             else if (this.props.board[idx] === 'O') {
                  return <div className="tictac-square" onClick={ () => this.props.commitTurn(idx) } key={ idx }><OTile className="tictac-game-tile"/></div>
             }
        }))
    }
}

export default DrawBoard