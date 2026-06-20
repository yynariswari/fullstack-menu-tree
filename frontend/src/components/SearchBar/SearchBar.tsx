interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search menu..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-3 py-2 mb-4"
    />
  );
}
