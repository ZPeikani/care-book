import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

type BreadCrumbsProps = {
  array: string[][];
};

export default function BreadCrumbs({ array }: BreadCrumbsProps) {
  const breadcrumbs = array.map((item, index) => {
    const isLast = index === array.length - 1;
    if (isLast) {
      return (
        <span className="underline pr-1 text-lg" key={index + 1}>
          {item[0]}
        </span>
      );
    } else {
      return (
        <Link
          className="text-gray-400 no-underline px-1 hover:text-primary text-lg"
          key={index + 1}
          href={item[1]}
        >
          {item[0]}
        </Link>
      );
    }
  });

  return (
    <div>
      <nav className="flex" aria-label="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {crumb}
            {index < breadcrumbs.length - 1 && (
              <FaChevronLeft className="text-gray-400 text-sm" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
