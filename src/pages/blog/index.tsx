import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";
import Blog from "@/components/blog/Blog";

const BlogPage: NextPageWithLayout = () => {
  return <Blog />;
};
BlogPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default BlogPage;
