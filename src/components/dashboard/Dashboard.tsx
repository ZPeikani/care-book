import { texts } from "@/constants/localization";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center m-auto">
      <div className="box shadow-md rounded-md bg-white p-4">
        <div>
          <p className="font-bold text-lg">{texts.doctors}</p>
        </div>
        <div></div>
      </div>
      <div className="box shadow-md rounded-md bg-white p-4">
        <div>
          <p className="font-bold text-lg">{texts.appointments}</p>
        </div>
        <div></div>
      </div>
      <div className="box shadow-md rounded-md bg-white p-4">
        <div>
          <p className="font-bold text-lg">{texts.schedule}</p>
        </div>
        <div></div>
      </div>
      <div className="box shadow-md rounded-md bg-white p-4">
        <div>
          <p className="font-bold text-lg">{texts.patients}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
