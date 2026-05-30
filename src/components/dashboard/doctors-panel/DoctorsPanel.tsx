import Buttons from "@/components/shared/buttons/Buttons";
import { texts } from "@/constants/localization";
import { FaStethoscope } from "react-icons/fa";

export default function DoctorsPanel() {
  return (
    <div className="space-y-8">
      <div className="flex gap-1 items-center">
        <FaStethoscope className="text-3xl mt-2" />
        <p className="font-semibold text-3xl">{texts.doctors}</p>
      </div>
      <div className="flex justify-between">
        <input
          className="w-1/4 outline-none text-gray-900 pr-2 bg-white border-2 border-gray-400 rounded-md"
          type="search"
          placeholder="جستجوی پزشک"
        />
        <div>
          <Buttons buttonType="button" buttonText="افزودن پزشک جدید" classNames="px-3"/>
        </div>
      </div>
      <div></div>
    </div>
  );
}
