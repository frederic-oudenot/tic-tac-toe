interface DescriptionProp {
    data:string,
}

export default function Description({data}:DescriptionProp){
  return <h2>{data}</h2>
}