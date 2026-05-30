import { texts } from "@/constants/localization";
import { HiOutlineCalendar } from "react-icons/hi";

export default function AppointmentsPanel() {
  return (
    <div className="space-y-8">
      <div className="flex gap-1 items-center">
        <HiOutlineCalendar className="text-3xl mt-2" />
        <p className="font-semibold text-3xl">{texts.appointments}</p>
      </div>
      <div></div>
    </div>
  );
}
