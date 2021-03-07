import React, { Component } from 'react';

const Header = (props) => {
  return (
    <header class="student">
      <h1>{props.title}</h1>
      <span className="stats">CURRENT : {props.totalPlayers}</span>
    </header>
  );
};
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.playerName}
      </span>
    </div>
  );
};

class DevList extends React.Component {
  state = {
    players: [
      {
        name: 'Ryan M',
        id: 1,
      },
      {
        name: 'Nathaniel S',
        id: 2,
      },
      {
        name: 'Narty K',
        id: 3,
      },
      {
        name: 'Nick M',
        id: 4,
      },
      {
        name: 'Michael F',
        id: 5,
      },
      {
        name: 'Join the list',
        id: 6,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prefState) => {
      return {
        players: prefState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="STUDENTS" totalPlayers={this.state.players.length} />
        {this.state.players.map((player) => (
          <Player
            playerName={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}
export default DevList;
