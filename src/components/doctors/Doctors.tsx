import { texts } from "@/constants/localization";
import SearchBar from "@/components/Home/search-bar/SearchBar";
import BreadCrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import CardDoctor from "@/components/card/card-doctor/CardDoctor";
import { doctors } from "@/data/doctors";

function Doctors() {
  return (
    <>
      <div className="flex flex-col my-8 gap-8">
        <BreadCrumbs array={[[texts.home, "/"], [texts.doctors]]} />
        <SearchBar display="hidden md:block" doctors={doctors} />
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6 items-center">
          {doctors.map(doctor => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
        </div>
      </div>
    </>
  );
}

export default Doctors;
