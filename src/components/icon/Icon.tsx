import IconX from "./IconX";
import IconO from "./IconO";
import { IIconDisplayAttributes } from "../../types/Icon"

export default function Icon({
  isRound,
  isCross,
  width,
  height,
  isDisplayTurn,
}: IIconDisplayAttributes) {
  return (
    <div className={isDisplayTurn ? "icon-display" : "icon"} style={iconStyle}>
      {isCross ? <IconX width={width} height={height} /> : ""}
      {isRound ? <IconO width={width} height={height} /> : ""}
    </div>
  )
}

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }