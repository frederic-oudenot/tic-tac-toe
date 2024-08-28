import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import Case from "../../components/case/Case"
import Icon from "../../components/icon/Icon"
import WinningList from "../../constant/WinningList"
import { useGame } from "../../context/GameContext"
import { PlayerAttributes } from "../../types/Player"
import { IGridAttributes } from "../../types/Grid"

export default function Grid({ setIsCross, setIsRound, isRound, isCross }: IGridAttributes) {
  const [crossList, setCrossList] = useState<number[]>([])
  const [roundList, setRoundList] = useState<number[]>([])
  const [isWinned, setIsWinned] = useState<boolean>(false)
  const { resetGame, clickResetGame, clickEndingGame } = useGame()

  const cases = Array.from({ length: 9 })
  let arrayTab: Array<number> = []
  let count = 0

  useEffect(() => {
    if (resetGame) {
      setCrossList([])
      setRoundList([])
      setIsWinned(false)
      arrayTab = []
      document.querySelectorAll(".icon").forEach((e) => e.remove())
      clickResetGame(false)
    }
  }, [resetGame])

  function displayCaseSelected(index: number) {
    const selectedCase = document.getElementById(`case-${index}`)

    if (selectedCase && !isWinned) {
      const root = createRoot(selectedCase)
      root?.render(
        <Icon
          isRound={isRound}
          isCross={isCross}
          width={"150"}
          height={"150"}
          isDisplayTurn={false}
        />,
      )
    }
  }

  function handleClick(index: number) {
    if (!isWinned) {
      displayCaseSelected(index)
      if (isCross) {
        checkGame({ isCross }, index)
      } else {
        checkGame({ isRound }, index)
      }
      setIsRound(!isRound)
      setIsCross(!isCross)
    }
  }

  function checkGame(isPlayer: PlayerAttributes, index: number) {
    const { isCross, isRound } = isPlayer

    if (isCross) {
      arrayTab = crossList
      arrayTab.push(index)
      setCrossList(arrayTab)
    } else if (isRound) {
      arrayTab = roundList
      arrayTab.push(index)
      setRoundList(arrayTab)
    }

    WinningList.map((winTab) => {
      winTab.map((winValue, index) => {
        if (winValue === arrayTab[index]) {
          count++
          if (count === 3) {
            setIsWinned(true)
            clickEndingGame(true)
          }
        } else {
          count = 0
          return
        }
      })
    })
  }

  function renderingCases() {
    return cases.map((_, index: number) => (
      <Case id={index} key={index} handleClick={() => handleClick(index)} />
    ))
  }
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      {renderingCases()}
    </section>
  )
}
