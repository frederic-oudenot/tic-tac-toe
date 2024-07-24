interface Title{
    data:string
}

export default function Title({data}:Title){
    return(
        <h1>{data}</h1>
    )
}