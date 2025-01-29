import { Breed } from "../../types";
import Style from "./Select.module.css";

type SelectProps = {
  data: Breed[];
  selected?: number;
  onSelect: (id: number) => void;
};

function Select({ data, selected, onSelect }: SelectProps) {
  return (
    // <ul className="h-96 overflow-y-auto">
    //   {data.map((breed) => (
    //     <Option key={breed.id} data={breed} />
    //   ))}
    // </ul>

    <div className={Style.wrapper}>
      <select
        className="w-[535px] p-2 border border-gray-300 rounded-md"
        name="breed"
        id="breed"
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        {data.map((breed) => (
          <option
            key={breed.id}
            value={breed.id}
            selected={selected === breed.id}
          >
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
