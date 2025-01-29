import { Breed } from "../../types";
import Option from "../Option";
import Style from "./Select.module.css";

type SelectProps = {
  data: Breed[];
};

function Select({ data }: SelectProps) {
  return (
    // <ul className="h-96 overflow-y-auto">
    //   {data.map((breed) => (
    //     <Option key={breed.id} data={breed} />
    //   ))}
    // </ul>

    <select
      className="w-[535px] p-2 border border-gray-300 rounded-md"
      name="breed"
      id="breed"
    >
      {data.map((breed) => (
        <option key={breed.id} value={breed.name}>
          {breed.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
