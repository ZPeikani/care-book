export default function SectionTitle({
  title,
  fontSize,
}: {
  title: string;
  fontSize: string;
}) {
  return (
    <div className="border-b-2 w-full border-gray-300">
      <p
        className={`border-b-4 pb-1 w-fit border-primary ${fontSize} font-semibold`}
      >
        {title}
      </p>
    </div>
  );
}
