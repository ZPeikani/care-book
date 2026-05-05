import cold from "@/assets/blogs/cold.jpg";
import studied from "@/assets/blogs/reading.jpg";
import purpura from "@/assets/blogs/purpura.jpg";
import facial from "@/assets/blogs/facial.jpg";
import SectionTitle from "../section-title/SectionTitle";
import { texts } from "@/constants/localization";
import Link from "next/link";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
export default function CareBlogs() {
  const article = [
    {
      image: cold,
      title: "علت طولانی شدن سرماخوردگی چیست؟",
      desc: "اصلا مهم نیست چقدر خود را از شر میکروب‌ها و ویروس‌ها در امان نگه می‌دارید. معمولا فصل‌های سرد سال می‌تواند باعث ایجاد سرماخوردگی در شما شود.",
      link: "/blog",
    },
    {
      image: studied,
      title: "بهترین خوراکی های انرژی زا برای درس خواندن چیست؟",
      desc: "درس خواندن در نقطه‌ای باعث می‌شود تا تمام انرژی‌ای که داریم، صرف شود و از خستگی دل‌مان بخواهد ساعت‌ ها کتاب را کنار بگذاریم و یک گوشه بنشینیم.",
      link: "/blog",
    },
    {
      image: purpura,
      title: "خونریزی زیر پوستی یا پورپورا چیست؟",
      desc: "خونریزی زیر پوستی (لکه‌های خون در پوست یا خونریزی پوست نیز نامیده می‌شود) به لکه‌های بنفش رنگ قابل تشخیص که بر روی پوست قرار دارند، گفته می‌شود.",
      link: "/blog",
    },
    {
      image: facial,
      title: "فیشال صورت چیست؟مزایای درمانی آن را بشناسید",
      desc: "دراز می‌کشید و در حالتی آرام و به‌قول فرنگی‌ها ریلکس، پوستتان را تمیز می‌کنند و لایه‌برداری؛ عالی است، نه؟ اگر تجربه این کار را نداشته باشید، احتمالا نمی‌توانید این صحنه را به‌خوبی درک کنید.",
      link: "/blog",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title={texts.healthArticle} fontSize="text-2xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center m-auto gap-3">
        {article.map(item => (
          <>
            <Link href={item.link}>
              <div className="h-81 w-71.75 flex flex-col border border-gray-400 rounded-xl bg-white hover:shadow-2xl">
                <div className="overflow-hidden bg-transparent rounded-md shadow-none bg-clip-border">
                  <img src={item.image.src} className="m-2 w-67.5" />
                </div>
                <div className="px-4 flex flex-col justify-between items-center">
                  <p className="block mt-2 text-lg font-semibold text-gray-900 hover:text-gray-500">
                    {truncateText(item.title, 35)}
                  </p>
                  <p className="block py-2">{truncateText(item.desc, 100)}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
