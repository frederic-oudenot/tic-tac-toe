import Icon from "../../components/icon/Icon";
import Description from "../../components/text/Description";

interface DisplayProp {
    isRound : boolean;
}

export default function Display({isRound}:DisplayProp){
    
  return <article style={displayStyle}>
    <Icon isRound={isRound} width={"30"} height={"30"}/>
    <Description/>
  </article>
}

const displayStyle = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"black",
  width:"300px",
  borderRadius:"1rem",
  backgroundColor:"white"
}
