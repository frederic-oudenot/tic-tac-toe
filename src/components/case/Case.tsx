import { ICaseAttributes } from "../../types/Case"

export default function Case({ id, handleClick }: ICaseAttributes) {
  return <div className={"case"} id={`case-${id}`} style={caseStyle} onClick={handleClick}></div>
}

const caseStyle = {
  width: "150px",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  paddingTop: "1rem",
  border: "1px solid black",
}
