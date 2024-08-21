import { lazy, Suspense } from "react";
const GamePage = lazy(()=> import("./pages/GamePage/GamePage.tsx"));
import { GameContextProvider } from "./context/GameContext.tsx";
import "./App.css"

function App() {

  return (
    <GameContextProvider>
      <Suspense>
        <GamePage/>
      </Suspense>
    </GameContextProvider>
  );
}

export default App;
