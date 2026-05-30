import { texts } from "@/constants/localization";
import SectionTitle from "../section-title/SectionTitle";
import Link from "next/link";

export default function TopDoctors() {
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title={texts.topDoctors} fontSize="text-2xl" />
      <div className="box shadow-md rounded-md bg-white p-4">
        <div className="flex items-center">
          <Link href={"/doctors"} className="mr-auto text-primary text-lg">
            مشاهده همه
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
