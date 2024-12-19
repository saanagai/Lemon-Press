import Card from "./components/Card";

import Banner from "./components/Banner";

import Head from "./components/Head";
import "./style/style.css";

const cardItem = [
  {
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    image:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    desc: "Зах зээл",
    date: "С.Ангирмаа   12 сарын 17, 2024",
  },

  {
    title: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    image:
      "https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a",
    desc: "БИЗНЕС",
    date: "М.Хулан   12 сарын 18, 2024",
  },

  {
    title: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    image:
      "https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2",
    desc: "Зах зээл",
    date: "С.Ангирмаа   12 сарын 18, 2024",
  },
  {
    title: "Аз жаргалын амт нэгээр нэмэгдлээ",
    image:
      "https://dash-api.yld.mn/api/image/28b2bfc0-03b5-41d1-befc-0b4e483c81f8",
    desc: "Сурталчилгаа",
    date: "Б. Эмүжин   12 сарын 18, 2024",
  },
];

function App() {
  return (
    <div>
      <Head />
      <div className="Cards">
        <div className="Contents">
          <div className="Contents-inner">
            {cardItem.map((item) => {
              return (
                <Card
                  title={item.title}
                  imageUrl={item.image}
                  desc={item.desc}
                  date={item.date}
                />
              );
            })}
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
}
export default App;
