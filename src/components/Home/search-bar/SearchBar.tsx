import { useState } from "react";

type SearchBarClass = {
  display: string;
};
export default function SearchBar({ display }: SearchBarClass) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setDropdownVisible(false);
    }
  };
  return (
    <div className={`relative ${display} flex mx-auto w-1/2`}>
      <div
        className="relative flex p-3 rounded-lg focus-within:shadow-md overflow-hidden border-2 border-secondary shadow-sm shadow-thirdly"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        tabIndex={-1}
      >
        <div className="grid place-items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="w-full outline-none text-gray-900 pr-2"
          type="search"
          placeholder="جستجوی نام پزشک یا تخصص"
        />
      </div>
      {isDropdownVisible && (
        <div className="absolute shadow-lg p-4 rounded-md z-50 w-full bg-white"></div>
      )}
    </div>
  );
}
