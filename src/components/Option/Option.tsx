import { Breed } from "../../types";

type OptionProps = {
  data: Breed;
};

function Option({ data }: OptionProps) {
  return <li>{data.name}</li>;
}

export default Option;
