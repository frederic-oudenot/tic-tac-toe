import { IDescriptionAttributes } from "../../types/Text"

export default function Description({ data }: IDescriptionAttributes) {
  return <h2>{data}</h2>
}
