import { texts } from "@/constants/localization";
import SectionTitle from "../section-title/SectionTitle";
import CardSpecialty from "@/components/card/card-specialty/CardSpecialty";

export default function Specialties() {
  const data: any[] = [];
  const slides = [];
  for (let i = 0; i < data.length; i += 5) {
    slides.push(data.slice(i, i + 5));
  }
  return (
    <div className="flex flex-col gap-8">
      <SectionTitle title={texts.specialties} fontSize="text-2xl" />
      <div className="box shadow-md rounded-md bg-primary p-4">
        <CardSpecialty />
      </div>
    </div>
  );
}

{
  /* <div className="box shadow-md rounded-md bg-secondary p-4">
  <div className="relative w-full">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`relative ${index === currentSlide ? "block" : "hidden"}`}
        data-carousel-item={index === currentSlide ? "active" : ""}
      >
        <div className="no-scrollbar gap relative grid grid-flow-col overflow-x-auto auto-cols-min grid-rows-2 md:grid-rows-1 gap-3 md:gap-5">
          {slide.map(() => {
            <CardSpecialty />;
          })}
        </div>
        <div>
          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-4 text-primary= drop-shadow-lg border border-solid border-primary transition-all hover:border-primary hover:bg-blue-100 ${currentSlide === 0 ? "hidden" : ""}`}
            data-carousel-prev
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M7.96967 19.5303C7.7034 19.2641 7.6792 18.8474 7.89705 18.5538L7.96967 18.4697L14.439 12L7.96967 5.53033C7.7034 5.26406 7.6792 4.8474 7.89705 4.55379L7.96967 4.46967C8.23594 4.2034 8.6526 4.1792 8.94621 4.39705L9.03033 4.46967L16.0303 11.4697C16.2966 11.7359 16.3208 12.1526 16.1029 12.4462L16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button
            className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 text-primary drop-shadow-lg rounded-full border border-solid border-primary transition-all hover:border-primary hover:bg-blue-100 ${
              currentSlide === slides.length - 1 ? "hidden" : ""
            }`}
            data-carousel-next
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M16.0318 4.46967C16.2981 4.73594 16.3223 5.1526 16.1044 5.44621L16.0318 5.53033L9.56246 12L16.0318 18.4697C16.2981 18.7359 16.3223 19.1526 16.1044 19.4462L16.0318 19.5303C15.7655 19.7966 15.3489 19.8208 15.0553 19.6029L14.9711 19.5303L7.97114 12.5303C7.70487 12.2641 7.68066 11.8474 7.89852 11.5538L7.97114 11.4697L14.9711 4.46967C15.264 4.17678 15.7389 4.17678 16.0318 4.46967Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    ))}
  </div>
</div> */
}
