interface ButtonProp {
  handleClick: () => void;
}
export default function Button({ handleClick }: ButtonProp) {
    
  return (
    <button style={{display:"flex", color:"red"}} onClick={handleClick}>
    </button>
  );
}


