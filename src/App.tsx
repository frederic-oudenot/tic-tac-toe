import { useState } from "react"
import "./App.css"
import Display from "./containers/display/Display"
import Grid from "./containers/grid/Grid"
import Icon from "./components/icon/Icon"
import Title from "./components/text/Title"

function App() {
  const [isRound, setIsRound] = useState(true)
  const [isCross, setIsCross] = useState(false)



  return (
    <>
      <Display isRound={isRound} isCross={isCross}/>
      <Grid setIsCross={setIsCross} setIsRound={setIsRound} isRound={isRound} isCross={isCross}/>
    </>
  )
}

export default App
