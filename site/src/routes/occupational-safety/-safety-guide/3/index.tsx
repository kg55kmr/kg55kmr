import image from "./1.jpg";

export function Content() {
  return (
    <div className="content">
      <h1 className="text-red-600">Подбай про свою безпеку!</h1>

      <p className="text-lg font-bold text-red-800 italic">
        У великому місті і дорослі і діти повинні бути обачними, уважними, знати
        і виконувати правила безпечної поведінки. Запам'ятайте їх!
      </p>
      <div className="grid-cols-3 justify-items-center gap-3 lg:grid">
        <div>
          <h2 className="text-orange-600">
            10 впевнених{" "}
            <span className="font-bold text-green-600">"ЗАВЖДИ"</span>
          </h2>
          <ol>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span> уважний
              на дорозі, де рухається транспорт.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              пам'ятаю, що для пішохода - тротуари, для машини - дорога.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              слухаюсь сигналів світлофора.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              переходжу дорогу у спеціально обладнаних для цього місцях.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              правильно обходжу транспорт, що стоїть: трамвай - спереду,
              тролейбус і автобус - ззаду.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span> виконую
              накази знаків дорожнього руху.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span> виконую
              правила дорожнього руху для велосипедистів.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span> виконую
              правила користування ліфтом.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              пам'ятаю: будівництво - не місце для ігор.
            </li>
            <li>
              <span className="font-bold text-green-600">Я ЗАВЖДИ</span>{" "}
              дотримуюсь правил протипожежної безпеки.
            </li>
          </ol>
        </div>
        <img
          src={image}
          className="w-96 self-center border-4 border-orange-600"
        />
        <div>
          <h2 className="text-orange-600">
            10 рішучих <span className="text-red-600">"НІКОЛИ"</span>
          </h2>
          <ol>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              виходжу з дому, не попередивши дорослих.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              забуваю найпотрібніші номери телефонів.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              розмовляю на вулиці з незнайомими людьми.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              повідомляю по телефону, що я вдома сам.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              поспішаю відчиняти двері на дзвінок. Спочатку дивлюсь у вічко.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не вмикаю
              електроприлади мокрими руками.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              торкаюсь незнайомих предметів.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не дратую
              собак: з друзів вони можуть перетворитися на ворогів.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не
              залишаю молодших брата чи сестричку вдома самих.
            </li>
            <li>
              <span className="font-bold text-red-600">Я НІКОЛИ</span> не ходжу
              до водоймищ без дорослих.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
