interface ButtonProp {
  handleClick: () => void;
  color: "blue" | "yellow" | "grey";
}
export default function Button({ handleClick, color }: ButtonProp) {
  return (
    <button
      style={{ display: "flex", backgroundColor: `${color}` }}
      onClick={handleClick}
    ></button>
  );
}
