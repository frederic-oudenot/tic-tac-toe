import { createRoot } from "react-dom/client";
import Case from "../../components/case/Case";
import Icon from "../../components/icon/Icon";
import { Dispatch, SetStateAction } from "react";
const cases = Array.from({length:9});

interface GridProp{
    setIsCross: Dispatch<SetStateAction<boolean>>;
    setIsRound: Dispatch<SetStateAction<boolean>>;
    isRound: boolean;
    isCross: boolean;
}

export default function Grid({setIsCross, setIsRound,isRound,isCross}:GridProp){

  function handleClick(index:number){
    const selectedCase = document.getElementById(`case-${index}`);
    const selectedIcon = selectedCase?.querySelector("img")
    if(selectedCase && !selectedIcon){
      const root = createRoot(selectedCase)
      root?.render(<Icon  isRound={isRound} isCross={isCross} width={"80"} height={"80"}/>)
      setIsCross(!isCross);
      setIsRound(!isRound);
    }

  }
  return(
    <section style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)", backgroundColor:"white", borderRadius:"1rem"}}>
      {cases.map((_, index:number)=>(
        <Case id={index} key={index} handleClick={() => handleClick(index)}/>
      ))}
    </section>
  )
}