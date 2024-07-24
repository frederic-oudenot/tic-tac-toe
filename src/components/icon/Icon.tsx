/* eslint-disable import/no-unresolved */
import iconX from "/assets/icons/x.svg"
import iconO from "/assets/icons/o.svg"

interface IconProp {
    isRound:true|false,
    width:string,
    height:string,
}

export default function Icon({isRound,width, height}:IconProp){
  const iconStyle = {
    width:`${width}%`,
    height:`${height}%`,
    justifyContent:"center",
    paddingTop:"1rem"
  }
  return (
    <img src={isRound ? iconO : iconX} style={iconStyle}></img>
  );
}
