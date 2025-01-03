import Card from "./components/Card";

import Banner from "./components/Banner";

import Container from "./components/Container";

import Head from "./components/Head";

import "./style/head.css";
import "./style/card.css";
import "./style/footer.css";
import "./style/container.css";
import { Footer } from "./components/Footer";

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

const containerItem = [
  {
    image:
      "https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a",

    desc: "Бизнес",
    title: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
    date: "С.Ангирмаа   12 сарын 18, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",

    desc: "Бизнес",
    title: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    date: "М.Хулан   12 сарын 18, 2024",
  },
  {
    image:
      "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",

    desc: "Бизнес",
    title: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    date: "С.Ангирмаа   12 сарын 11, 2024",
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
      <div className="more-width">
        <div className="moreSee">
          <p>Илүү үзэх</p>
        </div>
      </div>
      <div className="containerTitle">
        <p>Бизнес</p>
        <div className="titleLine"></div>
        <p className="">Илүү үзэх</p>
      </div>
      <div className="containerFlex">
        {containerItem.map((item) => {
          return (
            <Container
              imageUrl={item.image}
              desc={item.desc}
              title={item.title}
              date={item.date}
            />
          );
        })}{" "}
      </div>
      <div className="containerTitle">
        <p>Хэвлэлийн мэдээ</p>
        <div className="titleLine"></div>
        <p className="">Илүү үзэх</p>
      </div>
      <div className="containerFlex">
        {containerItem.map((item) => {
          return (
            <Container
              imageUrl={item.image}
              desc={item.desc}
              title={item.title}
              date={item.date}
            />
          );
        })}{" "}
      </div>
      <div className="containerTitle">
        <p>Эдийн засаг</p>
        <div className="titleLine"></div>
        <p className="">Илүү үзэх</p>
      </div>
      <div className="containerFlex">
        {containerItem.map((item) => {
          return (
            <Container
              imageUrl={item.image}
              desc={item.desc}
              title={item.title}
              date={item.date}
            />
          );
        })}{" "}
      </div>
      <div className="containerTitle">
        <p>Олон улс</p>
        <div className="titleLine"></div>
        <p className="">Илүү үзэх</p>
      </div>
      <div className="containerFlex">
        {containerItem.map((item) => {
          return (
            <Container
              imageUrl={item.image}
              desc={item.desc}
              title={item.title}
              date={item.date}
            />
          );
        })}{" "}
      </div>
      <div className="containerTitle">
        <p>Сурталчилгаа</p>
        <div className="titleLine"></div>
        <p className="">Илүү үзэх</p>
      </div>
      <div className="containerFlex">
        {containerItem.map((item) => {
          return (
            <Container
              imageUrl={item.image}
              desc={item.desc}
              title={item.title}
              date={item.date}
            />
          );
        })}{" "}
      </div>

      <Footer />
    </div>
  );
}
export default App;
