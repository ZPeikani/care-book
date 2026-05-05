import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/assets/logo/darkblue.jpeg";
import { texts } from "@/constants/localization";
import {
  HiOutlineCalendar,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export function Sidebar() {
  const router = useRouter();
  return (
    <div className="flex gap-16">
      <div className="h-screen w-full max-w-60 p-4 shadow-xl shadow-blue-gray-900/5 ">
        <div className="mb-4 flex flex-col">
          <Link href="/" className="pb-4 px-4">
            <img src={logo.src} />
          </Link>
        </div>
        <ul className="flex flex-col gap-4 text-gray-700 font-bold">
          <Link href={"/dashboard/products-panel"}>
            <li
              className={`flex gap-2 items-center py-2 px-1  hover:cursor-pointer ${
                router.pathname === "/dashboard"
                  ? "bg-thirdly rounded-md "
                  : "hover:bg-gray-100 hover:rounded-md"
              }`}
            >
              <HiOutlineHome className="text-2xl" />
              <p className="text-lg">{texts.dashboard}</p>
            </li>
          </Link>
          <Link href={"/dashboard/appointments-panel"}>
            <li
              className={`flex gap-2 items-center py-2 px-1 hover:cursor-pointer ${
                router.pathname === "/dashboard/appointments-panel"
                  ? "bg-thirdly rounded-md "
                  : "hover:bg-gray-100 hover:rounded-md"
              }`}
            >
              <HiOutlineCalendar className="text-2xl" />
              <p className="text-lg">{texts.appointments}</p>
            </li>
          </Link>
          <Link href={"/dashboard/doctors-panel"}>
            <li
              className={`flex gap-2 items-center py-2 px-1 hover:cursor-pointer ${
                router.pathname === "/dashboard/doctors-panel"
                  ? "bg-thirdly rounded-md "
                  : "hover:bg-gray-100 hover:rounded-md"
              }`}
            >
              <HiOutlineUserGroup className="text-2xl" />
              <p className="text-lg">{texts.doctors}</p>
            </li>
          </Link>
          <Link href={"/dashboard/patients-panel"}>
            <li
              className={`flex gap-2 items-center py-2 px-1 hover:cursor-pointer ${
                router.pathname === "/dashboard/patients-panel"
                  ? "bg-thirdly rounded-md "
                  : "hover:bg-gray-100 hover:rounded-md"
              }`}
            >
              <HiOutlineUsers className="text-2xl" />
              <p className="text-lg">{texts.patients}</p>
            </li>
          </Link>
          <Link href={"/dashboard/schedule-panel"}>
            <li
              className={`flex gap-2 items-center py-2 px-1 hover:cursor-pointer ${
                router.pathname === "/dashboard/schedule-panel"
                  ? "bg-thirdly rounded-md "
                  : "hover:bg-gray-100 hover:rounded-md"
              }`}
            >
              <HiOutlineCalendarDays className="text-2xl" />
              <p className="text-lg">{texts.schedule}</p>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="my-12">{children}</div> */}
    </div>
  );
}
