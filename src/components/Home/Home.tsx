import banner from "@/assets/poster/NTGXNG.jpg";
import SearchBar from "./search-bar/SearchBar";
import Specialties from "./specialties/Specialties";
import TopDoctors from "./top-doctors/TopDoctors";
import bannerContactUs from "@/assets/poster/more-info.png";
import bannerDoctorRegister from "@/assets/poster/doctor-register.png";
import drRamezani from "@/assets/doctors/dr-ramezani.jpg";
import drTaheri from "@/assets/doctors/dr-taheri.webp";
import CareBlogs from "./blogs/CareBlogs";
export const doctors = [
  {
    id: 1,
    name: "دکتر مجید رمضانی",
    specialty: "متخصص غدد",
    image: drRamezani,
  },
  {
    id: 2,
    name: "دکتر حسن طاهری",
    specialty: "تخصص ارتوپدی",
    image: drTaheri,
  },
];
export default function Home() {
  return (
    <div className="mb-10 flex flex-col gap-16">
      <div>
        <img src={banner.src} alt="banner" />
        <SearchBar display="hidden md:block" doctors={doctors} />
      </div>
      <Specialties />
      <img src={bannerContactUs.src} alt="bannerContactUs" />
      <TopDoctors doctors={doctors} />
      <CareBlogs />
      <img
        src={bannerDoctorRegister.src}
        alt="bannerDoctorRegister"
        className="w-fit m-auto"
      />
    </div>
  );
}
