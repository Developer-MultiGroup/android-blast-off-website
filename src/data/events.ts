import { Event } from "@/types";

const events: Event[] = [
  {
    speakers: [
      {
        fullName: "Serkan Alc",
        title: "MultiGroup Community Lead",
        company: "MultiGroup"
        // company: "Microsoft",
        // linkedin: "https://www.linkedin.com/in/daronyondem/",
        // twitter: "https://x.com/daronyondem",
      },
      {
        fullName: "Murat Yener",
        title: "Staff Mobile Engineer",
        company: "Instacart"
      },
      {
        fullName: "Necati Sözer",
        title: "Android Software Engineer",
        company: "Lyrebird Studio"
      },
      {
        fullName: "Melissa Çoralı",
        title: "Android Developer & Scrum Master",
        company: "Akbank"
      }
    ],
    sessions: [
      {
        topic: "Blast-Off",
        date: "2025-05-12",
        startTime: "20:30",
        endTime: "22:00",
        speakerName: "Serkan Alc",
        // url: ""
      },
      {
        topic: "Jetpack Compose Nedir? Temel Bilgilerle Hızlı Başlangıç",
        date: "2025-05-17",
        startTime: "20:30",
        endTime: "22:00",
        speakerName: "Murat Yener",
      },
      {
        topic: "MVVM Mimarisi Nedir? Android'de MVVM Yapısı",
        date: "2025-05-28",
        startTime: "20:30",
        endTime: "22:00",
        speakerName: "Necati Sözer",
      },
      {
        topic: "Clean Architecture Nedir? Android Projelerinde",
        date: "2025-05-31",
        startTime: "20:30",
        endTime: "22:00",
        speakerName: "Necati Sözer",
      },
      {
        topic: "Herkes İçin Erişilebilir Tasarım ve İpuçları",
        date: "2025-06-18",
        startTime: "20:30",
        endTime: "22:00",
        speakerName: "Melissa Çoralı",
      },
    ],
    sponsors: [
      {
        tier: "",
        sponsorSlug: "google",
      },
      {
        tier: "",
        sponsorSlug: "microsoft",
      },
      {
        tier: "",
        sponsorSlug: "turkish-airlines",
      },
      // {
      //   tier: "",
      //   sponsorSlug: "trendyol",
      // },
      {
        tier: "",
        sponsorSlug: "dogus-teknoloji",
      },
      {
        tier: "",
        sponsorSlug: "fibabanka",
      },
      {
        tier: "",
        sponsorSlug: "teknasyon",
      },
      {
        tier: "",
        sponsorSlug: "codeway",
      },
      {
        tier: "",
        sponsorSlug: "pazarama",
      },
      {
        tier: "",
        sponsorSlug: "deepset",
      },
      {
        tier: "",
        sponsorSlug: "softtech",
      },
    ],
  },
];

export default events;