const Container = (props) => {
  return (
    <div className="rowNews">
      <div classNamr="news">
        <img src={props.imageUrl} />
        <div className="news-text">
          <p>{props.desc}</p>
          <h2>{props.title}</h2>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Container;
