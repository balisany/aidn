import { useState } from "react";
import { Breed } from "../../types";
import Option from "../Option";
type SelectProps = {
  data: Breed[];
  selected?: number;
  onSelect: (id: number) => void;
};

function Select({ data, selected, onSelect }: SelectProps) {
  const [show, setShow] = useState(false);

  const handleOnSelect = (id: number) => {
    setShow(false);
    onSelect(id);
  };

  return (
    <div className="w-[535px] text-gray-700 text-left text-sm">
      <label htmlFor="breed" className="">
        Hunderase
      </label>

      <input
        type="text"
        name="breed"
        id="breed"
        className="mt-1 p-2 border w-full rounded-lg border-gray-300"
        onFocus={() => setShow(true)}
        value={data.find((breed) => breed.id === selected)?.name || ""}
        placeholder="Velg hunderase"
        onChange={() => {}}
      />

      {show && (
        <ul className="h-[300px] overflow-y-auto border border-gray-300 rounded-md py-4 mt-1">
          {data
            .filter((dog) => dog.bred_for)
            .map((breed) => (
              <Option
                key={breed.id}
                onSelect={handleOnSelect}
                selected={selected}
                data={breed}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
