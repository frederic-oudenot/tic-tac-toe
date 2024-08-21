interface CaseProp {
    id:number|undefined;
    handleClick: ()=>void;
}

export default function Case({id, handleClick}:CaseProp){
  return (
    <div className={`case-${id}-style`} id={`case-${id}`} style={caseStyle} onClick={handleClick}>
    </div>
  )
  
}

const caseStyle ={
  width:"150px",
  height:"150px",
  display: "flex",
  alignItems:"center",
  justifyContent:"center",
  margin:"0 auto",
  paddingTop:"1rem",
}