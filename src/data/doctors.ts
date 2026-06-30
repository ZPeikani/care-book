import drRamezani from "@/assets/doctors/dr-ramezani.jpg";
import drTaheri from "@/assets/doctors/dr-taheri.webp";

export const doctors = [
  {
    id: 1,
    name: "دکتر مجید رمضانی",
    specialty: "متخصص غدد",
    image: drRamezani,
    address: {
      city: "اصفهان",
      detail:
        "اصفهان، خیابان آمادگاه، جنب مبل آبنوس، ساختمان آژند، بلوک A، طبقه اول",
    },
    medicalSystemCode: 57852,
  },
  {
    id: 2,
    name: "دکتر حسن طاهری",
    specialty: "تخصص ارتوپدی",
    image: drTaheri,
    address: {
      city: "اصفهان",
      detail:
        "اصفهان، از سمت فلسطین، خیابان آمادگاه، اولین بن بست سمت چپ،کوچه 21، انتهای کوچه دست راست، طبقه‌ 3، ساختمان پرتو",
    },
    medicalSystemCode: 173002,
  },
];
