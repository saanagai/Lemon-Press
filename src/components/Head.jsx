// Components
const Head = (props) => {
  return (
    <div className="Head">
      <div className="Head-Head">
        <div className="head-Lift">
          <img src="/lemonpress.svg" alt="" />

          <p>Товхимол</p>
          <p>Нийтлэлүүд</p>
          <p>Цувралууд</p>
          <p>Подкастууд</p>
          <p>"Бидний тухай"</p>
        </div>
        <div className="head-Right">
          <img src="/search.png" alt="" />
          <button>Уншаад үзье</button>
        </div>
      </div>
      <div className="head-img">
        <img src="./boostme.jpeg" alt="" />
      </div>
    </div>
  );
};
export default Head;
