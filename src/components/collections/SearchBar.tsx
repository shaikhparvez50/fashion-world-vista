
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchQuery: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
}

const SearchBar = ({ searchQuery, onChange, onClear, placeholder = "Search collections..." }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto relative mb-6">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-10 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
      {searchQuery && (
        <button 
          onClick={onClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
