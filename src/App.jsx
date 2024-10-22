import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handelSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="play 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="play 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handelSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
