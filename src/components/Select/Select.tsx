import { useState } from "react";
import { Breed } from "../../types";
import Option from "../Option";
import Input from "../Input/Input";

type SelectProps = {
  data: Breed[];
  selected?: number;
  onSelect: (id: number) => void;
};

function Select({ data, selected, onSelect }: SelectProps) {
  const [show, setShow] = useState(false);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>(data);
  const [defaultValue, setDefaultValue] = useState("");

  const handleOnSelect = (id: number) => {
    if (!id) {
      return;
    }

    const foundedBreed = data.find((breed) => breed.id === id);
    setDefaultValue(foundedBreed?.name || "");
    setShow(false);
    onSelect(id);
  };

  const handleOnChange = (val: string) => {
    setFilteredBreeds(
      data.filter((breed) =>
        breed.name.toLowerCase().includes(val.toLowerCase())
      )
    );
    setDefaultValue(val);
  };

  return (
    <div className="w-[535px] text-gray-700 text-left text-sm">
      <label htmlFor="breed" className="">
        Hunderase
      </label>

      <Input
        onChange={handleOnChange}
        onFocus={() => setShow(true)}
        defaultValue={defaultValue}
        placeholder="Velg hundrase"
      />

      {show && (
        <ul className="h-[300px] overflow-y-auto border border-gray-300 rounded-md py-4 mt-1">
          {filteredBreeds
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
