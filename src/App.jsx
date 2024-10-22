import Player from "./components/Player";
import GameBoard from "./components/Gameboard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="play 1" symbol="X" />
          <Player initialName="play 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
