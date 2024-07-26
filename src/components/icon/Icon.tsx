/* eslint-disable import/no-unresolved */
import iconX from "/assets/icons/x.svg"
import iconO from "/assets/icons/o.svg"

interface IconProp {
    isRound:boolean;
    isCross:boolean;
    width:string;
    height:string;
}

export default function Icon({isRound, isCross, width, height}:IconProp){
  const iconStyle = {
    width:`${width}%`,
    height:`${height}%`,
    justifyContent:"center",
    paddingTop:"1rem"
  }
  return (
    <>
      {isCross ? <img src={iconX} style={iconStyle}></img> :""}
      {isRound ? <img src={iconO} style={iconStyle}></img> :""}
    </>
  );
}
