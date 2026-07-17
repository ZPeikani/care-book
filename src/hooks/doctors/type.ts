import { StaticImageData } from "next/image";

export type Props = {
  doctors: {
    id: number;
    name: string;
    specialty: string;
    image: StaticImageData;
    address: {
      city: string;
      detail: string;
    };
    medicalSystemCode: number;
    about:string,
  }[];
};

export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: StaticImageData;
  address: {
    city: string;
    detail: string;
  };
  medicalSystemCode: number;
  about:string,
};

export type Prop = {
  doctor: Doctor;
};
