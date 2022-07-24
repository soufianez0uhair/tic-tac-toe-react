import { useState } from "react";

import Initial from "./pages/Initial";
import Game from "./pages/Game";
import Footer from "./components/Footer";

const App = () => {
  const [isGame, setIsGame] = useState(false);

  const [isX, setIsX] = useState(false);

  function startGame(bool) {
    setIsX(bool);
    setIsGame(true);
  }

  function handleIsX() {
    setIsX(!isX);
  }

  function handleIsGame() {
    setIsGame(!isGame)
  }

  return (
    <main style={{height: '100vh', position: 'relative'}}>
      {!isGame ? <Initial startGame={startGame} /> : <Game isX={isX} handleIsX={handleIsX} handleIsGame={handleIsGame} />}
      <Footer isGame={isGame} />
    </main>
  )
}

export default App;