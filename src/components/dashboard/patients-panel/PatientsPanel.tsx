import { texts } from "@/constants/localization";
import { HiOutlineUsers } from "react-icons/hi";

export default function PatientsPanel() {
  return (
    <div className="space-y-8">
      <div className="flex gap-1 items-center">
        <HiOutlineUsers className="text-3xl mt-2" />
        <p className="font-semibold text-3xl">{texts.patients}</p>
      </div>
      <div></div>
    </div>
  );
}
