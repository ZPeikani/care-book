import drRamezani from "@/assets/doctors/dr-ramezani.jpg";
import drTaheri from "@/assets/doctors/dr-taheri.webp";

export const doctors = [
  {
    id: 1,
    name: "دکتر مجید رمضانی",
    specialty: "فوق تخصص غدد و متابولیسم",
    image: drRamezani,
    address: {
      city: "اصفهان",
      detail:
        "اصفهان، خیابان آمادگاه، جنب مبل آبنوس، ساختمان آژند، بلوک A، طبقه اول",
    },
    medicalSystemCode: 57852,
    about:"خدمات: تیروئید / دیابت / غده هیپوفیز / غدد فوق کلیه / پوکی استخوان / تنبلی تخمدان",
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
    about:"دکتر حسن طاهری متخصص و جراح ارتوپدی رتبه برتر بورد تخصصی تعویض مفصل زانو و لگن و درمان آسیب های ورزشی و بیماری های ستون فقرات",
  },
];
