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
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>(data);
  const [defaultValue, setDefaultValue] = useState("");

  const isSelected = selected !== 0;

  const handleOnSelect = (id: number) => {
    if (!id) {
      return;
    }
    const foundedBreed = data.find((breed) => breed.id === id);
    setDefaultValue(foundedBreed?.name || "");
    setDropdownVisibility(false);
    onSelect(id);
  };

  const handleOnChange = (val: string) => {
    setFilteredBreeds(
      data.filter((breed) =>
        breed.name.toLowerCase().includes(val.toLowerCase())
      )
    );
    setDefaultValue(val);
    onSelect(0);
  };

  return (
    <div className="w-[535px] text-gray-700 text-left text-sm">
      <label htmlFor="breed" className="">
        Hunderase
      </label>

      <Input
        isSelected={isSelected}
        onChange={handleOnChange}
        onFocus={() => setDropdownVisibility(true)}
        defaultValue={defaultValue}
        placeholder="Velg hundrase"
      />

      {isDropdownVisible && (
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
