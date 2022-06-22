import { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, API_URL } from '../config';
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

const Shop = () => {

  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Authorization': API_KEY
    }
  });

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isCartShow, setIsCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleCloseAlert = () => {
    setAlertName('');
  }

  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([
        ...order,
        newItem
      ]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })

      setOrder(newOrder);
    }
    setAlertName(item.displayName)

  }

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => {
      return el.id !== itemId
    });
    setOrder(newOrder);
  }

  const handleCartShow = () => {
    setIsCartShow(!isCartShow);
  }

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        }
      }
    });
    setOrder(newOrder);
  }

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      }
    });
    setOrder(newOrder);
  }

  useEffect(function getGoods() {
    setLoading(true);
    instance.get().then(response => response.data.shop).then((response) => {
      setGoods(response);
      setLoading(false);
    });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {
        !loading
          ? <GoodsList goods={goods} addToCart={addToCart} />
          : <Preloader />
      }
      {
        isCartShow && <CartList
          order={order}
          handleCartShow={handleCartShow}
          quantity={order.length}
          removeFromCart={removeFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity} />
      }
      {
        alertName && <Alert displayName={alertName} handleCloseAlert={handleCloseAlert} />
      }
    </main>
  )
}

export default Shop;