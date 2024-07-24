interface CaseProp {
    handleClick: ()=>void;
}

export default function Case({handleClick}:CaseProp){
return(
    <div style={caseStyle} onClick={handleClick}>
    </div>
)
}

const caseStyle ={
    backgroundColor:'red',
    width:'50px',
    height:'50px',
}