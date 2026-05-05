import Link from "next/link";
import sample from "@/assets/footer/sample.png";
import { texts } from "@/constants/localization";
import SectionTitle from "@/components/Home/section-title/SectionTitle";
import logo from "@/assets/logo/darkblue.jpeg";
import { FaEnvelope, FaHeadset, FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="m-3 bg-gray-100 rounded-xl shadow-md shadow-gray-300 md:px-16 px-17.5 py-8 space-y-6">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="mx-auto">
          <div className="flex justify-center">
            <img src={logo.src} className="h-fit my-auto" />
            <img src={sample.src} width="90" />
          </div>
          <div>
            <p className="text-lg font-medium text-center">
              سامانه رزرو و دریافت نوبت ویزیت از مطب در سراسر کشور.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SectionTitle title={texts.links} fontSize="text-lg" />
          <div className="flex flex-col gap-2">
            <Link href="/" className="">{texts.home}</Link>
            <Link href="/doctors" className="">{texts.doctors}</Link>
            <Link href="/about-us" className="">{texts.aboutUs}</Link>
            <Link href="/contact-us" className="">{texts.contactUs}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SectionTitle title={texts.services} fontSize="text-lg" />
          <div className="flex flex-col gap-2">
            <Link href="/account">{texts.account}</Link>
            <Link href="">{texts.onlineVisit}</Link>
            <Link href="/blog">{texts.healthArticle}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:mt-4">
          <div className="flex gap-3">
            <div className="border p-2 rounded-lg h-fit my-auto">
              <FaPhoneVolume className="text-xl" />
            </div>
            <div>
              <p>{texts.contactUs}</p>
              <p className="text-primary">031-38050</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="border p-2 rounded-lg h-fit my-auto">
              <FaHeadset className="text-xl" />
            </div>
            <div>
              <p>ساعت پشتیبانی</p>
              <p>از 10 تا 17</p>
            </div>
          </div>
          <Link href={"/contact-us"} className="flex gap-3">
            <div className="border p-2 rounded-lg h-fit my-auto">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p>ارسال نظر</p>
              <p>نظر یا انتقاد</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 text-lg">
        <p className="text-primary pt-3">
          تمام حقوق مادی و معنوی متعلق به سایت{" "}
          <span className="text-blue-400">carebook</span> می باشد - 1405
        </p>
      </div>
    </footer>
  );
}
