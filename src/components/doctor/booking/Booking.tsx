import Buttons from "@/components/shared/buttons/Buttons";
import { texts } from "@/constants/localization";
import { Prop } from "@/hooks/doctors/type";
import { CiLocationOn } from "react-icons/ci";
import { TbBuildingHospital } from "react-icons/tb";


export default function Booking({doctor}:Prop) {
return(
    <div className="flex flex-col gap-4 min-w-2/5 h-fit bg-fourthly py-7 px-4 rounded-2xl">
        <div className="flex items-center gap-1">
            <TbBuildingHospital className="text-xl mt-1" />
            <h3 className="text-lg font-bold tracking-tight text-heading">نوبت دهی مطب</h3>
        </div>
        <div className="flex flex-col gap-4 border border-primary px-2 py-4 rounded-xl">
            <div className="flex items-start gap-1">
                <CiLocationOn className="text-xl text-blue-600 shrink-0 mt-0.5" />
                <p className="flex-1">
                <span className="text-blue-600">{texts.address} : </span>
                <span>{doctor.address.detail}</span>
                </p>
            </div>
            <hr className="text-blue-600 border-dashed" />
            <div className="flex justify-end ml-4">
                <Buttons buttonText="نوبت بگیرید" buttonType="button" classNames="px-10"/>
            </div>
        </div>
    </div>
    )
}