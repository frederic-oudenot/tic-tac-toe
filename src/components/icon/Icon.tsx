import IconX from "./IconX";
import IconO from "./IconO";

interface IconProp {
    isRound:boolean;
    isCross:boolean;
    width:string;
    height:string;
}

export default function Icon({isRound, isCross, width, height}:IconProp){
  const iconStyle = {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
  }
  return (
    <div style={iconStyle}>
      {isCross ? <IconX width={width} height={height}/> :""}
      {isRound ? <IconO width={width} height={height}/> :""}
    </div>
  );
}
