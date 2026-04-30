import type { InferFilename } from "~/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-process/educational-programs",
)({
  component: RouteComponent,
  staticData: { title: "Навчальні програми" },
});

function RouteComponent() {
  return (
    <div className="font-philosopher flex flex-row flex-wrap justify-center gap-5">
      {programs.map((v) => (
        <div key={v.href} className="relative w-72 border border-black">
          <img
            src={imageAsset(v.image)}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-y border-black bg-white/75 py-4 text-center">
            <ExternalLink href={v.href}>{v.title}</ExternalLink>
          </div>
        </div>
      ))}
    </div>
  );
}

type Program = {
  title: string;
  image: InferFilename<typeof imageAsset>;
  href: string;
};

const imageAsset = dirAsset("images/");

const programs: Program[] = [
  {
    title: "Математика 5-6 класи",
    image: "навчальні-програми-математика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Matem.osv.galuz-5-6-kl/Matem.5-6-kl.Ister.14.07.pdf",
  },
  {
    title: "Алгебра 7-9 класи",
    image: "навчальні-програми-математика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Matem.osv.galuz-2023/Alhebra.7-9.klas.Ister.26.07.2023.pdf",
  },
  {
    title: "Геометрія 7-9 класи",
    image: "навчальні-програми-математика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Matem.osv.galuz-2023/Heometriya.7-9%20kl.Ister.26.07.2023.pdf",
  },
  {
    title: "Українська мова 5-6 класи",
    image: "навчальні-програми-українська-мова.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Movno-literat.osv.hal/27.11.2023/Ukr.mova.5-6-kl.Holub.Horoshkina.27.11.2023.pdf",
  },
  {
    title: "Українська мова 7-9 класи",
    image: "навчальні-програми-українська-мова.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/navchalni-prohramy-na-osnovi-modelnykh/2024/09/ukrayinska-mova-7-9-klasy-holub-ta-in-29-10-2024.pdf",
  },
  {
    title: "Українська література 5-6 класи",
    image: "навчальні-програми-українська-література.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Movno-literat.osv.hal/27.11.2023/Ukr.lit.5-6-kl.Yatsenko.ta.in.27.11.2023.pdf",
  },
  {
    title: "Українська література 7-9 класи",
    image: "навчальні-програми-українська-література.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2024/Model.navch.prohr.5-9.klas-2024/31-12-2024/ukrayinska-literatura-7-9-kl-yatsenko-ta-in-31-12-2024.pdf",
  },
  {
    title: "Зарубіжна література 5-9 класи",
    image: "навчальні-програми-зарубіжна-література.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Movno-literat.osv.hal/Zar.lit.5-9-kl.Nikolenko.ta.in.28.12.2023.pdf",
  },
  {
    title: "Іноземна мова 5-9 класи",
    image: "навчальні-програми-англійська.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Inozemni.movy.5-9-kl/Inoz.mov.5-9-kl.Redko.ta.in.14.07.pdf",
  },
  {
    title: "Інтегрований курс «Пізнаємо природу» 5-6 класи",
    image: "навчальні-програми-пізнаємо-природу.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Prirod.osv.galuz/Pizn.pryr.5-6-kl.Bida.ta.in.14.07.pdf",
  },
  {
    title: "Географія 6-9 класи",
    image: "навчальні-програми-географія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Prirod.osv.galuz/Heohrafiya/Heohrafiya.6-9-kl.Zapototskyy.ta.in.06.05.2022.pdf",
  },
  {
    title: "Фізика 7-9 класи",
    image: "навчальні-програми-фізика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Fizyka-2023/Fizyka.7-9.kl.Maksymovych.ta.in.20.02.2023.pdf",
  },
  {
    title: "Біологія 7-9 класи",
    image: "навчальні-програми-біологія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Pryrodnycha.osvitnya.haluz.2023/Biolohiya.7-9.klas.Sobol.26.07.2023.pdf",
  },
  {
    title: "Хімія 7-9 класи",
    image: "навчальні-програми-хімія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Pryrodnycha.osvitnya.haluz.2023/Khimiya.7-9.klas.Hryhorovych.29.12.2023.pdf",
  },
  {
    title: "Інтегрований курс «Здоров’я, безпека та добробут» 5-6 класи",
    image: "навчальні-програми-здоров`я-безпека-добробут.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Sotsial.ta.zdorovyazberezh.osv.haluz.2023/30.11.2023/Zdorov.bezp.ta.dobrob.5-6-kl.Vorontsova.ta.in.30.11.2023-1.pdf",
  },
  {
    title: "Інтегований курс «Здоров’я, безпека та добробут» 7-9 класи",
    image: "навчальні-програми-здоров`я-безпека-добробут.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2024/Model.navch.prohr.5-9.klas-2024/30-12-2024/zdorovya-bezp-ta-dobrobut-7-9-klas-intehr-kurs-vorontsova-ta-in-24122024.pdf",
  },
  {
    title: "Вступ до історії України та громадянської освіти. 5 клас",
    image: "навчальні-програми-історія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Hromad.ta.istor.osv.hal/Vstup.do.ist.Ukr.ta.hrom.osv-5.kl.Bakka.ta.in.10.08.pdf",
  },
  {
    title: "Історія України. Всесвітня історія. 6 клас",
    image: "навчальні-програми-історія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Hromad.ta.istor.osv.hal/Ist.Ukr.Vsesv.ist.6-kl.dlya.ZZSO-Hisem.ta.in.14.07.pdf",
  },
  {
    title: "Всесвітня історія 7-9 класи",
    image: "навчальні-програми-історія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Hromad.ta.istor.osv.hal.2023/16.08.2023/Vsesvitnya.istoriya.7-9.kl.Shchupak.ta.in.13.09.2023.pdf",
  },
  {
    title: "Історія України 7-9 класи",
    image: "навчальні-програми-історія.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Hromad.ta.istor.osv.hal.2023/16.08.2023/Istoriya.Ukrayiny.7-9.kl.Burlaka.ta.in.13.09.2023.pdf",
  },
  {
    title: "Інформатика 5-6 класи",
    image: "навчальні-програми-інформатика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Inform.osv.haluz.5-6-kl/Inform.5-6-kl.Ryvkind.ta.in.14.07.pdf",
  },
  {
    title: "Інформатика 7-9 класи",
    image: "навчальні-програми-інформатика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Inform.osv.haluz.2023/16.08.2023/Informatyka.7-9%20kl.Ryvkind.ta.in.16.08.2023.pdf",
  },
  {
    title: "Мистецтво 5-6 класи",
    image: "навчальні-програми-музика.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Mist.osv.gal/Mystetstvo.5-6-kl.Masol.Prosina.14.07.pdf",
  },
  {
    title: "Технології 5-6 класи",
    image: "навчальні-програми-технології.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2021/14.07/Model.navch.prohr.5-9.klas.NUSH-poetap.z.2022/Tehnol.osv.gal/Tekhnol.5-6-klas.Khodzytska.ta.in.14.07.pdf",
  },
  {
    title: "Технології 7-9 класи",
    image: "навчальні-програми-технології.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Tekhnolohichna.osvitnya.haluz.2023/16.08.2023/Tekhnolohiyi.7-9%20klas.Khodzytska.ta.in.16.08.2023.pdf",
  },
  {
    title: "Фізична культура 5-9 класи",
    image: "навчальні-програми-фізична-культура.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2024/Model.navch.prohr.5-9.klas-2024/fizkult-5-9-kl-bazhenkov-ta-in-22-08-2024.pdf",
  },
  {
    title: "Початкова школа 1-2 класи",
    image: "навчальні-програми-початкова-школа.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/programy-1-4-klas/2022/08/15/Typova.osvitnya.prohrama.1-4/Typova.osvitnya.prohrama.1-2.Savchenko.pdf",
  },
  {
    title: "Початкова школа 3-4 класи",
    image: "навчальні-програми-початкова-школа.jpg",
    href: "https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/programy-1-4-klas/2022/08/15/Typova.osvitnya.prohrama.1-4/Typova.osvitnya.prohrama.3-4.Savchenko.pdf",
  },
];
