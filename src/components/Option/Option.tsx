import { Breed } from "../../types";

type OptionProps = {
  data: Breed;
  selected?: number;
  onSelect: (id: number) => void;
};

function Option({ data, selected, onSelect }: OptionProps) {
  const isSelected = selected === data.id;
  return (
    <li
      className={`${
        isSelected && "bg-aidn-green"
      } flex items-center gap-4 px-4 hover:bg-gray-200`}
    >
      <div className="w-4 h-4 rounded-full bg-gray-800"></div>
      <button
        className="w-full p-2 text-left"
        onClick={() => onSelect(data.id)}
        type="button"
      >
        <p>{data.name}</p>
        <span className="text-sm text-gray-500">{data.bred_for}</span>
      </button>
    </li>
  );
}

export default Option;
