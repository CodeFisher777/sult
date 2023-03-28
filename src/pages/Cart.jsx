import React from 'react';
import { Link } from 'react-router-dom';
import { ModalWindow } from '../components/ModalWindow/modalWindow';
import { CartItem } from '../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../redux/cart/slice';

export const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);

  const [modalActive, setModalActive] = React.useState(false);
  const onTakeOrder = () => {
    setModalActive(true);
    dispatch(clearItems());
  };
  return (
    <>
      <div className="container">
        <div className="cart">
          <p className="cart-head">Корзина</p>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <div className="cart-line"></div>
          <div className="cart-bottom">
            <ModalWindow active={modalActive} setActive={setModalActive}></ModalWindow>
            <button onClick={onTakeOrder}>Оформить заказ</button>
            <p>{totalPrice} ₸</p>
          </div>
        </div>
      </div>
    </>
  );
};
