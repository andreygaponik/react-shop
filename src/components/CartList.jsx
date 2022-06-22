import CartItem from "./CartItem";

const CartList = (props) => {
  const totalPrice = props.order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0);

  return (
    <div className="collection basket-list">
      <li className="collection-item active pink lighten-3">
        Cart
        <i onClick={props.handleCartShow} className="material-icons right close-cart">close</i></li>
      {
        props.order.length
          ? props.order.map((item) => {
            return <CartItem
              key={item.id}
              {...item}
              incQuantity={props.incQuantity}
              removeFromCart={() => props.removeFromCart(item.id)}
              decQuantity={props.decQuantity}
            />
          })
          : <li className="collection-item">Cart is empty</li>
      }
      <li className="collection-item active pink lighten-3">
        Total cost: {totalPrice} rub.
      </li>
      <li className="collection-item">
        <button href="#" className="btn btn-small">Checkout</button>
      </li>
    </div>
  )
}

export default CartList;