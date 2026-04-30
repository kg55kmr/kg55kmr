import type { Class, Lesson as LessonType, Subject } from "distance-learning";
import { Download } from "lucide-react";
import { useState } from "react";
import { ExternalLink } from "~/components/link";
import { Pagination } from "~/components/pagination";
import { Pdf } from "~/components/pdf";
import { StructuredContent } from "~/components/structured-content";
import { Tabs } from "~/components/tabs";
import { yearsList } from "~/data/distance-learning";
import { useDistanceLearning } from "~/hooks/use-queries";
import { pagination } from "~/lib/pagination";
import { asset } from "~/lib/utils";
import {
  type LessonData,
  type LessonExt,
  buildLesson,
  formatClass,
} from "./distance-learning.utils";

export function DistanceLearning(props: {
  years: string;
  activeTab?: string;
  onTabClick?: (tab?: string) => void;
}) {
  const data = useDistanceLearning(props.years);
  return (
    <Classes
      activeTab={props.activeTab}
      onTabClick={props.onTabClick}
      years={props.years}
      classes={data}
    />
  );
}

function Classes(props: {
  years: string;
  classes: Class[];
  activeTab?: string;
  onTabClick?: (tab?: string) => void;
}) {
  const isLast = props.years === yearsList[0];
  return (
    <Tabs
      value={props.activeTab}
      onValueChange={(className) => props.onTabClick?.(className)}
    >
      {props.classes.map(({ name: className, subjects }) => (
        <Tabs.Tab
          key={className}
          id={className}
          title={formatClass(className, props.years)}
        >
          <Subjects
            subjects={subjects}
            years={props.years}
            className={className}
          />
        </Tabs.Tab>
      ))}
      {isLast && OtherTabs()}
    </Tabs>
  );
}

function OtherTabs() {
  return [
    <Tabs.Tab key="contacts" id="contacts" title="Зворотній зв'язок">
      <Pdf src={asset("documents/emails.pdf")} />
    </Tabs.Tab>,
    <Tabs.Tab
      key="consultation"
      id="consultation"
      title="Графік онлайн/офлайн консультацій"
    >
      <Pdf
        src={asset(
          "documents/графік-онлайн-офлайн-консультацій-дистанційне-навчання.pdf",
        )}
      />
    </Tabs.Tab>,
    <Tabs.Tab key="human" id="human" title="Освітня платформа Human">
      <Human />
    </Tabs.Tab>,

    <Tabs.Tab key="pupil-help" id="pupil-help" title="На допомогу учням">
      <PupilHelp />
    </Tabs.Tab>,

    <Tabs.Tab key="teacher-help" id="teacher-help" title="На допомогу вчителю">
      <TeacherHelp />
    </Tabs.Tab>,

    <Tabs.Tab key="parents-help" id="parents-help" title="На допомогу батькам">
      <ParentsHelp />
    </Tabs.Tab>,
  ];
}

function Human() {
  return (
    <div className="content">
      <p>
        <b>
          Криворізьку гімназію №55 приєднано до сучасної освітньої платформи
          HUMAN. Освітня платформа HUMAN - система, яка забезпечує повноцінний
          навчальний процес в умовах дистанційного навчання і включає навчальні
          плани, мережу школи, розклад уроків, зберiгання тем та планів уроків,
          роботу з медіаматерiалами, видачу і перевірку домашніх завдань,
          календар здійснення контролю за якістю знань, моніторинг діяльності як
          окремо взятого класу, так і учня й учителя, навчальний профіль учня, у
          якому зберігаються усі досягнення дитини.
        </b>
      </p>
      <ul>
        <li>
          <ExternalLink href="https://intercom.help/human-help-center/en/articles/3853556-%D1%80%D0%B5%D1%94%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%B2-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%96-human">
            Реєстрація учнів в системі HUMAN
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://intercom.help/human-help-center/en/articles/4152986-%D1%8F%D0%BA-%D0%BF%D1%80%D0%B8%D1%94%D0%B4%D0%BD%D0%B0%D1%82%D0%B8%D1%81%D1%8F-%D0%B4%D0%BE-%D0%B7%D0%B0%D0%BA%D0%BB%D0%B0%D0%B4%D1%83">
            Як приєднатися до закладу
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://intercom.help/human-help-center/en/collections/2238534-%D0%B4%D0%BB%D1%8F-%D1%83%D1%87%D0%BD%D1%96%D0%B2">
            Довідковий центр для учнів
          </ExternalLink>
        </li>
      </ul>
      <img
        src={asset("images/зверніть-увагу.jpg")}
        className="w-60 p-3 md:float-right"
      />
      <p>
        <b>Шановні батьки та учні!</b>
      </p>
      <p>
        Опрацювання навчального матеріалу під час карантину - це особиста
        відповідальність учня, тому просимо контролювати виконання завдань
        дітьми та дотримання ними таких правил:
      </p>
      <p>Уроки будуть проводитися згідно розкладу.</p>
      <p>
        Завдання на урок можна взяти на освітній платформі HUMAN або на
        офіційному сайті школи у розділі «Дистанційне навчання».
      </p>
      <p>
        Урок створюються та наповнюються відповідно до розкладу уроків учнів 1-9
        класів КГ №55 КМР. Учень переглядає навчальні матеріали, виконує
        завдання та виконанні роботи надсилає вчителю на освітній платформі
        HUMAN або на електронну адресу.
      </p>
      <p>
        Під час дистанційного навчання здійснюється оцінювання учнів (крім учнів
        1-3 класів). Тому просимо відповідально та ретельно виконувати усі
        завдання
      </p>
    </div>
  );
}

function PupilHelp() {
  const items: LinkItem[] = [
    {
      text: "Аудіоуроки для 8–19 класів з історії України, української мови та літератури “Вчися вухами” від ГО “Смарт освіта”",
      url: "https://audiolessons.nus.org.ua/",
    },
    {
      text: "Тренажер із правопису української мови пропонує різні вправи для закріплення та перевірки тем",
      url: "https://webpen.com.ua/",
    },
    {
      text: "Онлайн-курс “Історія України в історіях” від EdEra пропонує добірку відео, подкастів, текстів та тестів",
      url: "https://znohistory.ed-era.com/?fbclid=IwAR1S67b_ynxWt9rJC4-U3XNFVYT2ooNza9IEGREu_u4FsjyPaR8XNRhlTu8",
    },
    {
      text: "Ресурс Englishpage містить безплатні онлайн-уроки граматики, вправи із читання, письма та аудіо",
      url: "https://www.englishpage.com/",
    },
    {
      text: "Онлайн-курс “Автостопом по біології” має конспекти та тестові завдання",
      url: "https://courses.ed-era.com/courses/course-v1:EdEra-Osvitoria+BIO+1/about",
    },
    {
      text: "YouTube-канал вчителя фізики Павла Віктора, де зібрано 45 відеоуроків із докладними поясненнями та прикладами розв’язання задач",
      url: "https://www.youtube.com/playlist?list=PLYLAAGsAQhw9d06xrbr-DmvDC5LjU1oZ2",
    },
  ];

  return <Links src={items} />;
}

function TeacherHelp() {
  const items: LinkItem[] = [
    {
      text: "Як технічно організувати дистанційне навчання – покрокова інструкція",
      url: "https://bit.ly/33LwF2M",
    },
    {
      text: "Як вони це роблять. Вчительки початкової, базової та старшої шкіл про організацію оцінювання і дистанційного навчання",
      url: "https://bit.ly/3anfc37",
    },
    {
      text: "Як працювати в Google-клас: покрокова інструкція",
      url: "https://bit.ly/3bGXNms",
    },
    {
      text: "Як використовувати YouTube у дистанційному навчанні",
      url: "https://bit.ly/39O51Uh",
    },
    {
      text: "Дистанційне навчання в 3-4 класах: інструкції, приклади уроків та комунікації з батьками",
      url: "https://bit.ly/2yz4d8Z",
    },
    {
      text: "10 ЛАЙФХАКІВ ДЛЯ ВЧИТЕЛІВ і порада батькам – вчителька математики про дистанційне навчання",
      url: "https://bit.ly/2VdGDWP",
    },
    {
      text: "Як організувати дистанційне навчання для дітей з ООП. Досвід вчителів",
      url: "https://bit.ly/3a5Odbi",
    },
    {
      text: "Працювати з класом онлайн. Як гімназія “Очаг” навчає дистанційно",
      url: "https://bit.ly/3egl2pz",
    },
    {
      text: "Як розробити дистанційний урок для 1-2 класів – інструкція від вчительки",
      url: "https://bit.ly/2yvy3ez",
    },
    {
      text: "Простою мовою: які рекомендації щодо дистанційного навчання дає латвійське міністерство освіти своїм учителям",
      url: "https://bit.ly/2KaVlIX",
    },
    {
      text: "Як організувати дистанційне навчання: досвід директорів шкіл",
      url: "https://bit.ly/34UOQ6V",
    },
    {
      text: "Практики та підходи до дистанційного навчання – рекомендації для вчителів",
      url: "https://bit.ly/2YaInDB",
    },
    {
      text: "Як сільська школа використовує власну онлайн-платформу (і як це зробити іншим закладам)",
      url: "https://bit.ly/2SkkFki",
    },
    {
      text: "Трудове і фізкультура онлайн – як учителі проводять уроки на відстані",
      url: "https://bit.ly/3aWrCyz",
    },
    {
      text: "Дистанційне навчання: як зацікавити учнів – поради від учительки",
      url: "https://bit.ly/2WoaCMi",
    },
    {
      text: "Найважливіше – підтримка. Як дистанційно навчаються старші школярі у Фінляндії",
      url: "https://bit.ly/3nj9aHN",
    },
    {
      text: "Як поєднати дистанційне навчання з інклюзивним",
      url: "https://bit.ly/2xSuoYd",
    },
    {
      text: "Як створити ефективний контент уроків української для формувального оцінювання – лайфхаки від вчительки",
      url: "https://bit.ly/2zNU8pc",
    },
    {
      text: "Освіта може стати більш суспільною справою, а не просто послугою. Засновник PISA про школи після пандемії",
      url: "https://bit.ly/2AiOJ9T",
    },
    {
      text: "Уроки карантину. Що радять директори шкіл",
      url: "https://bit.ly/3dOPSoC",
    },
    {
      text: "Уроки карантину: що радять учителі",
      url: "https://bit.ly/3cU2Y2H",
    },
    {
      text: "Коли освіта в пріоритеті. Як школи і батьки співпрацювали дистанційно",
      url: "https://bit.ly/3hooW10",
    },
    {
      text: "Онлайн-навчання для дітей з ООП – як зробити його доступнішим",
      url: "https://bit.ly/37A636N",
    },
    {
      text: "Змішане навчання. Як вчителі працюють і офлайн, і онлайн",
      url: "https://bit.ly/3d7chxS",
    },
    {
      text: "Недистанційна освіта під час карантину: 10 фактів про те, як в Індії учні навчають учнів",
      url: "https://bit.ly/32lVXF5",
    },
    {
      text: "Навчання в зимовий локдаун: що рекомендує Київ своїм закладам освіти",
      url: "https://bit.ly/38RzClo",
    },
    {
      text: "Як учителю створити презентацію до уроку – відеоінструкція",
      url: "https://bit.ly/39dzdde",
    },
    {
      text: "Тривалість навчального заняття під час дистанційого формату",
      url: "https://mon.gov.ua/ua/news/trivalist-navchalnogo-zanyattya-pid-chas-distancijnogo-formatu-lishayetsya-nezminnoyu-rozyasnennya-mon",
    },
  ];

  return <Links src={items} />;
}

function ParentsHelp() {
  const items: LinkItem[] = [
    {
      text: "Батькам школярів: 20 запитань та відповідей про дистанційне навчання",
      url: "https://eo.gov.ua/2021/01/12/batkam-shkoliariv-20-zapytan-ta-vidpovidey-pro-dystantsiyne-navchannia",
    },
    {
      text: "Інструкція для батьків про електроннний щоденник Нові знання",
      url: "https://www.youtube.com/watch?v=zT2a4uTNyqc",
    },
    {
      text: "Як організувати дистанційне навчання для дитини",
      url: "https://www.youtube.com/watch?v=C-_Q3yMCvpw",
    },
    {
      text: "Батькам школярів: 20 питань та відповідей про дистанційне навчання",
      url: "https://eo.gov.ua/batkam-shkoliariv-20-zapytan-ta-vidpovidey-pro-dystantsiyne-navchannia/2021/01/12/",
    },
    {
      text: "Поради батькам щодо підтримки дитини в системі дистанційного навчання",
      url: asset("documents/поради-батькам-дистанційне-навчання-1.pdf"),
    },
    {
      text: "Поради батькам щодо контролю під час дистанційного навчання",
      url: asset("documents/поради-батькам-дистанційне-навчання-1.pdf"),
    },
  ];

  return <Links src={items} />;
}

type LinkItem = { text: string; url: string };

function Links(props: { src: LinkItem[] }) {
  return (
    <ol className="ml-4 list-decimal">
      {props.src.map((l) => (
        <li key={l.url}>
          <ExternalLink href={l.url}>{l.text}</ExternalLink>
        </li>
      ))}
    </ol>
  );
}

function Subjects(props: {
  years: string;
  className: string;
  subjects: Subject[];
}) {
  return (
    <StructuredContent TOCTitle="Предмети" className="grid-cols-[1fr_20%]">
      {props.subjects.map(({ name, lessons }, i) => (
        <StructuredContent.Section
          key={name}
          id={`subject-${i + 1}`}
          title={name}
          className="mb-4"
        >
          <div className="mb-3 hidden border border-blue-300 bg-blue-100 p-2 font-bold lg:block">
            {name}
          </div>
          <Lessons
            lessons={lessons}
            subject={name}
            years={props.years}
            className={props.className}
          />
        </StructuredContent.Section>
      ))}
    </StructuredContent>
  );
}

function Lessons(props: {
  years: string;
  className: string;
  subject: string;
  lessons: LessonType[];
}) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const lessons = props.lessons.map((lesson) => ({
    ...lesson,
    ...buildLesson({
      ...lesson,
      years: props.years,
      className: props.className,
    }),
  }));

  const { items, itemsPlaceholder } = pagination({
    page: page - 1,
    items: lessons,
    itemsPerPage,
  });

  const hasGroups = lessons.find((l) => l.group) !== undefined;

  return (
    <>
      <table className="table-responsive">
        <colgroup>
          <col />
          <col />
          {hasGroups && <col />}
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Клас</th>
            {hasGroups && <th>Група</th>}
            <th>Тема</th>
          </tr>
        </thead>
        <tbody>
          {items.map((lesson, i) => (
            <Lesson
              key={props.subject + lesson.title + i}
              hasGroups={hasGroups}
              subject={props.subject}
              years={props.years}
              className={props.className}
              {...lesson}
            />
          ))}
          {itemsPlaceholder.map((_, i) => (
            <tr key={i} data-placeholder>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
        totalItems={props.lessons.length}
      />
    </>
  );
}

type LessonProps = LessonType & LessonData & LessonExt & { hasGroups: boolean };

function Lesson(props: LessonProps) {
  const { ref } = props;
  return (
    <tr ref={ref} className="group">
      <td>{props.date}</td>
      <td className="whitespace-nowrap">{props.fullClass}</td>
      {props.hasGroups && (
        <td className="md:text-center">
          {props.group}
          {props.group && <span className="md:hidden"> група</span>}
        </td>
      )}
      <td>
        <ExternalLink href={buildUrl(props)}>{props.theme}</ExternalLink>
        <ExternalLink
          href={buildDownloadUrl(props)}
          className="ml-1 text-black md:hidden md:group-hover:inline-block"
        >
          <Download className="inline-block size-5" />
        </ExternalLink>
      </td>
    </tr>
  );
}

function buildUrl(lesson: LessonType & LessonExt) {
  if (lesson.sha) {
    const shaUrl = `https://kg55kmr.pp.ua/api/github/sha/distance_learning_${lesson.years}/${lesson.sha}`; // TODO: replace sha
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(shaUrl)}`;
  }

  const pdfUrl = `https://raw.githubusercontent.com/kg55kmr/distance-learning_${lesson.years}/main/data/${lesson.className}/${lesson.subject}/${lesson.title}.pdf`;
  return `https://mozilla.github.io/pdf.js/legacy/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
}

function buildDownloadUrl(lesson: LessonType & LessonExt) {
  const ext = lesson.ext ? lesson.ext : ".pdf";
  return `https://raw.githubusercontent.com/kg55kmr/distance-learning_${lesson.years}/main/data/${lesson.className}/${lesson.subject}/${lesson.title}${ext}`;
}
