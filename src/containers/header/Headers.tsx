import { IHeaderAttributes } from "../../types/Header"
import Logo from "../../components/icon/Logo"
import Display from "../display/Display"

export default function Header({ isRound, isCross }: IHeaderAttributes) {
  return (
    <header
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
  )
}
