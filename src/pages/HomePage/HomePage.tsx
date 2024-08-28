import { useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import Logo from "../../components/icon/Logo"
import Description from "../../components/text/Description"
import Title from "../../components/text/Title"

export default function HomePage() {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/game")
  }
  return (
    <section style={{ margin: "0 20%" }}>
      <Logo width={"200"} height={"150"} />
      <Title data={"Tic Tac Toe"} />
      <Description
        data={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae quos obcaecati autem velit voluptas rem, similique, amet aperiam, soluta vero dolor corporis porro aliquam quod quisquam. Asperiores, eius facilis."
        }
      />
      <Button handleClick={handleClick} color={"blue"} content={"New game"} />
    </section>
  )
}
