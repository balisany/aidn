import { Breed } from "../../types";
import Style from "./Select.module.css";

type SelectProps = {
  data: Breed[];
};

function Select({ data }: SelectProps) {
  return (
    <div className={Style.wrapper}>
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
    </div>
  );
}

export default Select;
