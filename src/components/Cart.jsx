const Cart = (props) => {
  const { quantity = 0 } = props;

  return (
    <div
      className="cart pink lighten-1 white-text"
      onClick={props.handleCartShow}
    >
      <i className="material-icons">shopping_cart</i>
      {
        quantity
          ? <span className="cart-quantity">{quantity}</span>
          : null
      }
    </div>
  )
}

export default Cart;