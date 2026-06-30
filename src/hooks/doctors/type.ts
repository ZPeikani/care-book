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
};

export type Prop = {
  doctor: Doctor;
};
