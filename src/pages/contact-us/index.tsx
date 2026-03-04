import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";
import ContactUs from "@/components/contact-us/ContactUs";

const ContactUsPage: NextPageWithLayout = () => {
  return <ContactUs />;
};
ContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default ContactUsPage;
