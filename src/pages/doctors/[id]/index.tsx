import Doctor from "@/components/doctor/Doctor";
import { doctors } from "@/data/doctors";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";

const DoctorPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const doctor = doctors.find((item) => item.id === Number(id));
  if (!doctor) {
    return <div>پزشکی یافت نشد.</div>;
  }
  return <Doctor doctor={doctor} />;
};
DoctorPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default DoctorPage;
