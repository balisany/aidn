import { Breed } from "../../types";
import style from "./Option.module.css";

type OptionProps = {
  data: Breed;
};

function Option({ data }: OptionProps) {
  return <li className={style.option}>{data.name}</li>;
}

export default Option;
