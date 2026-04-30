import image from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

export function Content() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <div className="rounded-lg border border-black bg-red-200 p-3">
            Для забезпечення харчування учнів 1-9 класів працює шкільна їдальня
            на 180 посадочних місць.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            Їдальня обладнана відповідно до санітарних вимог.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            Протягом тижня діти отримують кисло-молочні продукти, м’ясні і рибні
            страви, фрукти, соки а також страви з овочів та круп.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            Кожного дня для окремих категорій учнів складається меню.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            За рахунок бюджетних асигнувань здійснюється харчування учнів 1-4
            класів, дітей, які постраждали від наслідків Чорнобильської
            катастрофи, дітей-сиріт, дітей, позбавлених батьківського піклування
            та дітей з малозабезпечених та багатодітних сімей.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            Організовано дієтичне харчування.
          </div>
          <div className="rounded-lg border border-black bg-red-200 p-3">
            В їдальні працює буфет, в асортименті якого: мучні, кондитерські
            вироби, напої, соки.
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img src={image} className="w-80 object-contain" />
          <img src={image2} className="w-80 object-contain" />
          <img src={image3} className="w-80 object-contain" />
        </div>
      </div>
      <div className="content my-5 flex items-center gap-3 border-4 border-orange-400 p-2 font-bold text-red-600">
        <div>
          Для оформлення безкоштовного харчування учнів пільгових категорій
          батьки або особи, які їх замінюють, на ім’я керівника навчального
          закладу подають такі документи:
          <ul>
            <li>заяву;</li>
            <li>
              копію посвідчення або довідку, що підтверджує соціальний статус
              дитини.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
