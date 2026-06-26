import { texts } from "@/constants/localization";
import SectionTitle from "../section-title/SectionTitle";
import Link from "next/link";
import CardDoctor from "@/components/card/card-doctor/CardDoctor";
import { StaticImageData } from "next/image";

export type Props = {
  doctors: {
    id: number;
    name: string;
    specialty: string;
    image: StaticImageData;
  }[];
};

export default function TopDoctors({doctors}:Props) {
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title={texts.topDoctors} fontSize="text-2xl" />
      <div className="box shadow-md rounded-md bg-white p-4 flex flex-col gap-6">
        <div className="flex items-center">
          <Link href={"/doctors"} className="mr-auto text-primary text-lg">
            مشاهده همه
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {doctors.map(doctor => (
            <CardDoctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
}
