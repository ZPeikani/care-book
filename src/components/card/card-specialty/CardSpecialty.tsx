import neurology from "@/assets/specialty/neurologist.webp";
import { StaticImageData } from "next/image";
type Specialty = {
  id: number;
  specialty: string;
  image: StaticImageData;
};

export default function CardSpecialty() {
  const specialty: Specialty = {
    id: 1,
    specialty: "مغز و اعصاب",
    image: neurology,
  };
  return (
    <div>
      <div className="w-fit p-4 bg-white border border-gray-300 rounded-xl">
        <div className="flex flex-col items-center">
          <img
            className="w-20 h-20 mb-4"
            src={specialty.image.src}
            alt={specialty.specialty}
          />
          <h5 className="text-sm font-semibold tracking-tight text-heading">
            {specialty.specialty}
          </h5>
        </div>
      </div>
    </div>
  );
}
