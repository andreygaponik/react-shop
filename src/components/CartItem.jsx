const CartItem = (props) => {
  return (
    <>
      <li className="collection-item">
        <div>
          {props.displayName} x <i className="material-icons cart-quantity" onClick={() => props.decQuantity(props.id)}>remove</i> {props.quantity} <i className="material-icons cart-quantity" onClick={() => props.incQuantity(props.id)}>add</i> = {props.price * props.quantity} rub.
          <span
            onClick={props.removeFromCart}
            className="secondary-content delete-item">
            <i className="material-icons">close</i>
          </span>
        </div>
      </li>
    </>
  )
}

export default CartItem;