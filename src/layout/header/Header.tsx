import { texts } from "@/constants/localization";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/auth?mode=sign-up">
          <h1>
            {texts.signUp} | {texts.signIn}
          </h1>
        </Link>
      </div>
    </header>
  );
}
