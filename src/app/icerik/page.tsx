import SessionContainer from "@/components/session-container";
import Speakers from "@/components/speakers";
import events from "@/data/events";
import { BookOpen, Check, Play, Target, Users, Video } from "lucide-react";

export default function ContentPage() {
  return (
    <section>
      <section className="bg-primary text-white min-h-screen flex flex-col justify-between pt-48">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl mb-4 text-center md:text-left">
              Kemerlerinizi Bağlayın,
              <br />
              Kalkışa Geçiyoruz!
            </h1>
            <p className="text-base md:text-lg mb-6 font-montserrat-mid w-full md:w-1/2 text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <a
              href="#"
              className="text-accent hover:underline font-medium font-montserrat-mid text-center md:text-left"
            >
              Blast Off Content
            </a>
          </div>
        </div>

        <div className="bg-[#f8f9fb] text-black mt-20 py-20 w-full">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-0 flex flex-col sm:flex-row gap-8 justify-center">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="border border-black rounded-2xl p-4 w-full sm:w-1/3 min-h-[150px] relative"
              >
                <div className="w-10 h-10 bg-sky-300 border border-black rounded-md absolute top-4 left-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20">
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 pt-20 pb-10">
          Konuşmacılırmız ile{" "}
          <span className="text-accent  underline underline-offset-3 md:no-underline decoration-accent">
            Tanışın
          </span>
        </h2>
        <Speakers speakers={events[0].speakers} />
      </section>

      <section className="bg-[#f8f9fb] text-black py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6 sm:mb-8 pb-10">
            İçeriği Kendine Göre{" "}
            <span className="text-accent  underline underline-offset-3 md:no-underline decoration-accent">
              Şekillendir
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Card 1 */}
            <div className="border border-black rounded-3xl p-8 relative flex flex-col justify-between w-full md:w-1/2">
              <div className="absolute top-6 right-6 w-10 h-10 bg-sky-300 rounded-md border border-black" />
              <div className="text-left w-5/6">
                <h3 className="text-2xl font-montserrat-semi mb-4">
                  Bootcamp Sürecine Katıl
                </h3>
                <p className="text-base font-montserrat-mid">
                  Bootcamp süreci boyunca bir grupla birlikte eğitim alma
                  fırsatı yakala ve süreci kendin için en verimli şekilde
                  planla.{" "}
                  <span className="font-montserrat">
                    Bitirme projeleri, düzenli ödevler, canlı ders anlatımları
                  </span>{" "}
                  ve çok daha fazlası bu yolculukta seni bekliyor!
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a href="#" className="w-40 h-12 bg-neutral-900 rounded-xl text-white text-lg font-semibold flex items-center justify-center focus:outline-none">
                  lorem
                </a>
                <span className="h-8 w-px bg-gray-400 mx-2" />
                <span className="font-bold text-xl">#Bootcamp</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-black rounded-3xl p-8 relative flex flex-col justify-between w-full md:w-1/2">
              <div className="absolute top-6 right-6 w-10 h-10 bg-sky-300 border border-black rounded-md " />
              <div className="text-left w-5/6">
                <h3 className="text-2xl font-montserrat-semi mb-4">
                  Kaynakça olarak Kullan
                </h3>
                <p className="text-base font-montserrat-mid">
                  Bootcamp süreci boyunca bir grupla birlikte eğitim alma
                  fırsatı yakala ve süreci kendin için en verimli şekilde
                  planla.{" "}
                  <span className="font-montserrat">
                    Bitirme projeleri, düzenli ödevler, canlı ders anlatımları
                  </span>{" "}
                  ve çok daha fazlası bu yolculukta seni bekliyor!
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a href="#" className="w-40 h-12 bg-blue-500 rounded-xl text-white text-lg font-semibold flex items-center justify-center focus:outline-none">
                  lorem
                </a>
                <span className="h-8 w-px bg-gray-400 mx-2" />
                <span className="font-bold text-xl">#Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background font-montserrat-mid pb-20">
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat mb-6 sm:mb-8 pt-20 pb-10">
          İçeriği Kendine Göre{" "}
          <span className="text-accent  underline underline-offset-3 md:no-underline decoration-accent">
            Şekillendir
          </span>
        </h2>
        <SessionContainer event={events[0]} />
      </section>

      <section className="flex flex-col justify-center align-middle items-center w-full py-16 bg-[#f8f9fb] px-4 md:px-0">
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 py-10">
          İçeriği Kendine Göre{" "}
          <span className="text-accent  underline underline-offset-3 md:no-underline decoration-accent">
            Şekillendir
          </span>
        </h2>

        {/* Main content container */}
        <div className="max-w-7xl rounded-3xl flex flex-col md:flex-row overflow-hidden bg-[#9BD5F1] font-montserrat-mid">
          {/* Left section */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4 font-montserrat-semi">
              Bu Heyecan Verici macerada Yerini Ayırt
            </h2>
            <p className="text-lg mb-6">
              Eğer içerik ilgini çektiyse hemen yerini ayırt ve sen de bize
              katıl!
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Play className="mt-1 flex-shrink-0" size={24} />
                <p>Canlı anlatım ile daha verimli bir süreç geçir</p>
              </div>
              <div className="flex items-start space-x-4">
                <Video className="mt-1 flex-shrink-0" size={24} />
                <p>Video kayıtları ile kaçırdığın kısımları tekrar et</p>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="mt-1 flex-shrink-0" size={24} />
                <p>Ders içi kaynaklar ile daha sağlam temel at</p>
              </div>
              <div className="flex items-start space-x-4">
                <Target className="mt-1 flex-shrink-0" size={24} />
                <p>Uygulama projeleri ile öğrendiklerini pekiştir</p>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="mt-1 flex-shrink-0" size={24} />
                <p>Danışmanlara soru cevaplar ile daha hızlı ilerle</p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 border-l">
            <div className="bg-white rounded-lg p-4 text-center mb-6 border-2 border-black">
              <h3 className="text-xl font-bold">Sizi Bekleyen İçerikler</h3>
            </div>

            <p className="mb-6">
              Detaylıca hazırlanmış ve kolay takip edilebilir uygulama odaklı
              bir eğitim serisi
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 gap-4">
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>500+ Katılımcı</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>200+ Kaynakça</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>40+ Saat Eğitim</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>20+ Uzman Konuk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>5 Etkinlik Danışmanı</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>5 Uygulama projesi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>5 CodeChallenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>1 Bitirme Projesi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>5 CodeChallenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="text-green-600" size={24} />
                <span>1 Bitirme Projesi</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
