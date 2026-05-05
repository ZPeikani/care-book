import errorImage from "@/assets/404/404.png";
import Buttons from "../shared/buttons/Buttons";
import { texts } from "@/constants/localization";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center">
      <img src={errorImage.src} alt="" className="w-screen h-screen relative" />
      <div className="absolute bottom-24">
        <Link href="/">
          <Buttons
            buttonText={texts.mainPage}
            buttonType="button"
            classNames="w-50 text-xl"
          />
        </Link>
      </div>
    </div>
  );
}
