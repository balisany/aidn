import { ChevronDown } from "lucide-react";

type InputProps = {
  defaultValue?: string;
  placeholder: string;
  onChange: (val: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

function Input({ defaultValue, placeholder, onFocus, onChange }: InputProps) {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        name="breed"
        id="breed"
        className="mt-1 p-2 border w-full rounded-lg border-gray-300"
        onFocus={onFocus}
        value={defaultValue}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <ChevronDown
        size={20}
        className="absolute right-3 bottom-2 cursor-pointer"
        onClick={onFocus}
      />
    </div>
  );
}

export default Input;
