function Card(props) {
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: '18rem', height: 'auto', objectFit: 'cover' }}>
        <img src={props.src} key={props.src} className="card-img-top" alt="{props.src}" />
      </div>
    </div>
  );
}
export default Card;
