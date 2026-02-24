import SignIn from "@/components/sign-in/SignIn";
import SignUp from "@/components/sign-up/SignUp";
import { useRouter } from "next/router";

export default function Auth() {
  const router = useRouter();
  const { mode } = router.query;
  return <div>{mode === "sign-in" ? <SignIn /> : <SignUp />}</div>;
}
