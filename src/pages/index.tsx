import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "./_app";
import Home from "@/components/Home/Home";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};
HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
