import Logo from "../../components/icon/Logo";
import Display from "../display/Display";

interface IHeaderAttributes {
  isRound:boolean,
  isCross:boolean
}

export default function Header({isRound, isCross}:IHeaderAttributes){

  return <header
    id={"header"}
    style={{
      display: "flex",
      justifyContent: "space-around",
      margin: "2rem",
    }}
  >
    <Logo width={"150"} height={"100"} />
    <Display isRound={isRound} isCross={isCross} />
  </header>
}