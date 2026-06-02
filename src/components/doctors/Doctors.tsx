import { texts } from "@/constants/localization";
import SearchBar from "../Home/search-bar/SearchBar";
import BreadCrumbs from "../shared/breadcrumbs/Breadcrumbs";
import CardDoctor from "../card/card-doctor/CardDoctor";

function Doctors() {
  return (
    <>
      <div className="flex flex-col my-8 gap-8">
        <BreadCrumbs array={[[texts.home, "/"], [texts.doctors]]} />
        <SearchBar display="hidden md:block" />
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6 items-center">
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
          <CardDoctor />
        </div>
      </div>
    </>
  );
}

export default Doctors;
