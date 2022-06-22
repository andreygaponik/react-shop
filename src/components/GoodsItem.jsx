const GoodsItem = (props) => {
  const { id, displayName, price } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.full_background} />
      </div>
      <div className="card-content">
        <span className="card-title">{props.displayName}</span>
        <p>{props.displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => props.addToCart({
          id,
          displayName,
          price
        })}>Buy</button>
        <span className="right">{props.price} rub.</span>
      </div>
    </div>
  )
}

export default GoodsItem;

// mainId
// displayName
// displayDescription
// price => regularPrice
// price => finalPrice
// images => full_background