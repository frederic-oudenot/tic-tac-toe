import Icon from "../../components/icon/Icon";
import Description from "../../components/text/Description";

interface DisplayProp {
    isRound: boolean;
    isCross: boolean;
}

export default function Display({isRound,isCross}:DisplayProp){
    
  return (
    <article style={displayStyle}>
      <Icon isRound={isRound} isCross={isCross} width={"70"} height={"70"} isDisplayTurn={true} />
      <Description data={"TURN"} />
    </article>
  )
}

const displayStyle = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"black",
  width:"200px",
  height:"80px",
  borderRadius:"1rem",
  backgroundColor:"white"
}


