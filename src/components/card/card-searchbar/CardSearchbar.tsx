import Link from "next/link";
import { Prop } from "@/hooks/doctors/type";

export default function CardSearchbar({ doctor }: Prop) {
  return (
    <>
      <Link
        href={`/doctors/${doctor.id}`}
        className="block relative w-full p-1 border-b border-gray-300 hover:bg-blue-50"
        onMouseDown={e => e.preventDefault()}
      >
        <div className="flex gap-4 items-center mb-1">
          <img
            className="w-14 h-14 rounded-full"
            src={doctor.image.src}
            alt={doctor.name}
          />
          <div className="items-center">
            <p className="text-base tracking-tight">{doctor.name}</p>
            <span className="text-sm text-gray-500">{doctor.specialty}</span>
          </div>
        </div>
      </Link>
    </>
  );
}
