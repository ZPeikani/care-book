import { texts } from "@/constants/localization";
import { Prop } from "@/hooks/doctors/type";
import { BsPatchCheckFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function DoctorInfo({ doctor }: Prop) {
  return (
    <div className="flex flex-col gap-6 min-w-3/5">
      <div className="flex gap-4 bg-fourthly py-4 pr-4 rounded-2xl">
        <div>
          <img
            className="w-24 h-24 mb-6 rounded-full"
            src={doctor.image.src}
            alt={doctor.name}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="text-xl font-bold tracking-tight text-heading">
            {doctor.name}
          </h1>
          <span className="text-sm font-bold text-gray-500">
            {doctor.specialty}
          </span>
          <div className="flex items-center gap-0.5">
            <CiLocationOn />
            <span className="text-sm text-gray-500 font-bold">
              {doctor.address.city}
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            <BsPatchCheckFill className="text-blue-500" />
            <span className="text-sm text-gray-500 font-bold">
              {texts.medicalSystemCode}: {doctor.medicalSystemCode}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-fourthly py-4 px-4 rounded-2xl">
        <h3 className="text-lg font-bold tracking-tight text-heading">
        {texts.about} {doctor.name}
        </h3>
        <span className="text-md text-gray-500 font-bold">
          {doctor.about}
        </span>
      </div>
      <div className="flex flex-col gap-4 bg-fourthly py-4 px-4 rounded-2xl">
        <h3 className="text-lg font-bold tracking-tight text-heading">
        آدرس مطب {doctor.name}
        </h3>
        <span className="text-md text-gray-500 font-bold">
          {doctor.address.detail}
        </span>
      </div>
      <div className="flex gap-4 bg-fourthly py-4 pr-4 rounded-2xl"></div>
    </div>
  );
}
