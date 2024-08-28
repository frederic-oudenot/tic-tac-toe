import { IButtonAttributes } from "../../types/Button"

export default function Button({ handleClick, color, content }: IButtonAttributes) {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "2rem",
        textAlign: "center",
        backgroundColor: `${color}`,
      }}
      onClick={handleClick}
    >
      {content}
    </button>
  )
}
