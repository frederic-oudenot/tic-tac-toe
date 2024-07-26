interface CaseProp {
    id:number|undefined;
    handleClick: ()=>void;
}

export default function Case({id, handleClick}:CaseProp){
  return (
    <div id={`case-${id}`} style={caseStyle} onClick={handleClick}>
    </div>
  )
  
}

const caseStyle ={
  width:"150px",
  height:"150px",
}