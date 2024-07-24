import Icon from "../../components/icon/Icon";

interface DisplayIconsProp {
    width:string,
    height:string,
}

export default function DisplayIcons({width, height}:DisplayIconsProp){
    return <section style={displayIconsStyle}>
    <Icon isRound={true} width={width} height={height}/>
    <Icon isRound={false} width={width} height={height}/>
    </section>
}

const displayIconsStyle={
display:'flex',
}