import { texts } from "@/constants/localization";
import BreadCrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import { Prop } from "@/hooks/doctors/type";
import DoctorInfo from "./doctor-info/DoctorInfo";
import Booking from "./booking/Booking";

export default function Doctor({ doctor }: Prop) {
  return (
    <div className="flex flex-col my-8 gap-8">
      <BreadCrumbs
        array={[[texts.home, "/"], [texts.doctors, "/doctors"], [doctor.name]]}
      />
      <div className="flex w-full gap-4">
        <DoctorInfo doctor={doctor} />
        <Booking doctor={doctor}/>
      </div>
    </div>
  );
}
