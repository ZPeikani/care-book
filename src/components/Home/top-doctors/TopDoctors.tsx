import { texts } from "@/constants/localization";
import SectionTitle from "../section-title/SectionTitle";

export default function TopDoctors() {
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title={texts.topDoctors} fontSize="text-2xl" />
    </div>
  );
}
