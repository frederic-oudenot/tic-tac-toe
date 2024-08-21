import { Suspense } from "react";
import { GameContextProvider } from "./context/GameContext.tsx";
import "./App.css"
import { RoutesProvider } from "./context/RoutesContext.tsx";

function App() {

  return (
    <>
      <GameContextProvider>
        <Suspense>
          <RoutesProvider/>
        </Suspense>
      </GameContextProvider>
    </>
  );
}

export default App;
