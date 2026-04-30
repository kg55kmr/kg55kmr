import { ExternalLink } from "~/components/link";

export function Neighborhood() {
  function getHouseNumber(n: number) {
    return n * 2 + 52;
  }

  return (
    <>
      <div className="font-bold">
        Відповідно до рішення виконкому Тернівської районної у місті ради від{" "}
        <ExternalLink href="https://drive.google.com/file/d/1d-8gx8YdNJ4eatxECmYvmdorpetFUr24/view">
          19.02.2025 №37 "Про закріплення територій обслуговування за
          загальноосвітніми навчальними закладами Тернівського району міста
          Кривого Рогу"
        </ExternalLink>{" "}
        за Криворізькою гімназією №55 Криворізької міської ради (вул. Сергія
        Колачевскього, 108А) закріплено наступну територію обслуговування:
      </div>
      <ul className="my-4 ml-8">
        <li>
          вулиця <b>Сергія Колачевського:</b>
          <ol className="my-4 sm:columns-5">
            {Array((162 - 52) / 2 + 1)
              .keys()
              .map((n) => (
                <li key={n}>будинок № {getHouseNumber(n)}</li>
              ))}
          </ol>
        </li>
        <li>
          вулиця <b>Володимира Михайличенка</b>:
          <ol className="my-4 sm:columns-5">
            {Array(79)
              .keys()
              .map((n) => (
                <li key={n}>будинок № {n + 1}</li>
              ))}
          </ol>
        </li>
      </ul>
    </>
  );
}
