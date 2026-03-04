import { texts } from "@/constants/localization";
import Link from "next/link";
import logo from "@/assets/logo/darkblue.jpeg";
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
export default function Header() {
  const router = useRouter();
  return (
    <header>
      <div className="flex md:justify-between justify-center items-center w-full px-16 py-5">
        <div className="flex flex-row items-center">
          <div className="w-3xs">
            <Link href={"/"}>
              <img src={logo.src} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:flex flex-row items-center justify-center gap-10 text-lg w-full ">
            <Link
              href={"/"}
              className={`font-semibold ${router.pathname === "/" ? "text-primary" : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"}`}
            >
              {texts.home}
            </Link>
            <Link
              href={"/doctors"}
              className={`font-semibold ${router.pathname === "/doctors" ? "text-primary" : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"}`}
            >
              {texts.doctors}
            </Link>
            <Link
              href={"/blog"}
              className={`font-semibold ${router.pathname === "/blog" ? "text-primary" : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"}`}
            >
              {texts.blog}
            </Link>
            <Link
              href={"/about-us"}
              className={`font-semibold ${router.pathname === "/about-us" ? "text-primary" : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"}`}
            >
              {texts.aboutUs}
            </Link>
            <Link
              href={"/contact-us"}
              className={`font-semibold ${router.pathname === "/contact-us" ? "text-primary" : "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"}`}
            >
              {texts.contactUs}
            </Link>
          </div>
        </div>
        <div className="bg-sky-50 px-1.5 py-0.5 rounded-lg">
          <Link href="/auth?mode=sign-up" className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <FaUser className="text-primary" />
            </div>
            <div className="mr-5.5 text-primary font-semibold">
              <p>
                {texts.signUp} | {texts.signIn}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full py-0.5 bg-linear-to-l from-thirdly to-primary"></div>
    </header>
  );
}
