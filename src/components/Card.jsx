// Components
const Card = (props) => {
  return (
    <div className="Card">
      <div className="Contents">
        <img src={props.imageUrl} />
        <div className="content-text">
          <p>{props.desc}</p>
          <h2>{props.title}</h2>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
