import Case from "../../components/case/Case";
const cases = Array.from({length:9});

export default function Grid(){
    function handleClick(){
        console.log('test')
    }
    return(
    <section>
        {cases.map((_, index)=>(
    <Case key={index} handleClick={handleClick}/>
        ))}
    </section>
    )
}