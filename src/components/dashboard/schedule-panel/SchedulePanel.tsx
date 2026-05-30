import { texts } from "@/constants/localization";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function SchedulePanel() {
  return (
    <div className="space-y-8">
      <div className="flex gap-1 items-center">
        <HiOutlineCalendarDays className="text-3xl mt-2" />
        <p className="font-semibold text-3xl">{texts.schedule}</p>
      </div>
      <div></div>
    </div>
  );
}
