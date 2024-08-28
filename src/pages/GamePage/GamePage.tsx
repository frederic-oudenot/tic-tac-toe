import { useState } from "react"
import Grid from "../../containers/grid/Grid"
import Button from "../../components/button/Button"
import { useGame } from "../../context/GameContext"
import Header from "../../containers/header/Headers"

export default function GamePage() {
  const [isRound, setIsRound] = useState<boolean>(true)
  const [isCross, setIsCross] = useState<boolean>(false)

  const { clickResetGame, clickEndingGame } = useGame()

  function handleResetClick() {
    clickResetGame(true)
    clickEndingGame(false)
  }

  return (
    <>
      <Header isRound={isRound} isCross={isCross} />
      <Grid setIsCross={setIsCross} setIsRound={setIsRound} isRound={isRound} isCross={isCross} />
      <Button handleClick={handleResetClick} color={"yellow"} content={"RESET"} />
    </>
  )
}
