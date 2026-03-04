import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";
import Doctors from "@/components/doctors/Doctors";

const DoctorsPage: NextPageWithLayout = () => {
  return <Doctors />;
};
DoctorsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default DoctorsPage;
