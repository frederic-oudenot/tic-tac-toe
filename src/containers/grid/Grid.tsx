import { createRoot } from "react-dom/client";
import Case from "../../components/case/Case";
import Icon from "../../components/icon/Icon";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import WinningList from "../../constant/WinningList";
import { useGame } from "../../context/GameContext";
const cases = Array.from({ length: 9 });

interface GridProp {
  setIsCross: Dispatch<SetStateAction<boolean>>;
  setIsRound: Dispatch<SetStateAction<boolean>>;
  isRound: boolean;
  isCross: boolean;
}

export default function Grid({
  setIsCross,
  setIsRound,
  isRound,
  isCross,
}: GridProp) {
  const [crossList, setCrossList] = useState<[]>([]);
  const [roundList, setRoundList] = useState<[]>([]);
  const [isWinned, setIsWinned] = useState<boolean>()

  const {clickEndingGame} = useGame();

  let arrayTab :any = [];
  let count = 0;

  useEffect(()=>{
    arrayTab=[];
    count=0;
    renderingCases();
  },[])

  function handleClick(index: number) {
    const selectedCase = document.getElementById(`case-${index}`);
    const selectedIcon = selectedCase?.querySelector("div");

    if (selectedCase && !selectedIcon && !isWinned) {
      const root = createRoot(selectedCase);
      root?.render(
        <Icon
          isRound={isRound}
          isCross={isCross}
          width={"150"}
          height={"150"}
        />
      );
      if(isCross){
        checkGame({isCross}, index);
      }else{
        checkGame({isRound}, index);
      }
      setIsRound(!isRound);
      setIsCross(!isCross);
    }
  }

  function checkGame(isPlayer: any, index: number) {
    const {isCross, isRound} = isPlayer;

    if (isCross) {
      arrayTab = crossList;
      arrayTab.push(index);
      setCrossList(arrayTab);

    } else if (isRound) {
      arrayTab = roundList;
      arrayTab.push(index);
      setRoundList(arrayTab);
    }

    WinningList.map((winTab)=>{
      winTab.map((winValue,index)=>{
        if(winValue === arrayTab[index]){
          count++;
          if(count===3){
            setIsWinned(true);
            clickEndingGame(true);
          }
        }else{
          count=0;
          return
        }
      })
    })


  }

  function renderingCases(){
    return (cases.map((_, index: number) => (
      <Case id={index} key={index} handleClick={() => handleClick(index)} />
    )));
  }
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
    >
      {renderingCases()}
    </section>
  );
}
