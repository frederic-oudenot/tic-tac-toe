import Icon from "../../components/icon/Icon";

interface DisplayProp {
    isRound : boolean;
}

export default function Display({isRound}:DisplayProp){
    return <article style={displayStyle}>
       <h2> <Icon isRound={isRound} width={""} height={""}/>
        TURN</h2>
    </article>
}

const displayStyle = {
    display:'flex',
    
}