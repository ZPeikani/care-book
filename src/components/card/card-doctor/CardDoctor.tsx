import Buttons from "@/components/shared/buttons/Buttons";
import { StaticImageData } from "next/image";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: StaticImageData;
};
type Props = {
  doctor: Doctor;
};

export default function CardDoctor({ doctor }: Props) {
  return (
    <div>
      <div className="relative max-w-3xs w-full py-4 border border-gray-300 rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-6 rounded-full"
            src={doctor.image.src}
            alt={doctor.name}
          />
          <h5 className="mb-0.5 text-lg tracking-tight text-heading">
            {doctor.name}
          </h5>
          <span className="text-sm text-gray-500">{doctor.specialty}</span>
          <div className="flex mt-2 md:mt-2 gap-4">
            <Buttons
              buttonType="button"
              buttonText="نوبت بگیرید"
              classNames="px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
