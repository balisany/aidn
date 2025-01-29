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
    <div className="w-[535px]">
      <label htmlFor="breed" className="w-full">
        <input
          type="text"
          name="breed"
          id="breed"
          className="mt-1 p-2 border w-full rounded-lg border-gray-300"
          onFocus={() => setShow(true)}
          value={data.find((breed) => breed.id === selected)?.name || ""}
          placeholder="Velg hunderase"
        />
      </label>

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
