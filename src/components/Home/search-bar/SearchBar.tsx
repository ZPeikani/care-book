import CardSearchbar from "@/components/card/card-searchbar/CardSearchbar";
import { StaticImageData } from "next/image";
import { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: StaticImageData;
};

type Props = {
  display: string;
  doctors: Doctor[];
};

export default function SearchBar({ display, doctors }: Props) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setDropdownVisible(false);
    }
  };
  const normalize = (text: string) =>
    text
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک")
      .replace(/\u200c/g, " ")
      .trim();
  const filteredDoctors = doctors.filter(doctor => {
    const query = normalize(search);

    return (
      normalize(doctor.name).includes(query) ||
      normalize(doctor.specialty).includes(query)
    );
  });
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
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {search && isDropdownVisible && (
        <div className="absolute top-full mt-2 shadow-lg p-4 rounded-md z-50 w-full bg-white">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <CardSearchbar key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>موردی یافت نشد.</p>
          )}
        </div>
      )}
    </div>
  );
}
