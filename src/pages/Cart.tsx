import React from 'react';
import { Link } from 'react-router-dom';
import { ModalWindow } from '../components/ModalWindow/modalWindow';
import { CartItemBlock } from '../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, selectCart } from '../redux/cart/slice';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector(selectCart);

  const [modalActive, setModalActive] = React.useState(false);
  const onTakeOrder = () => {
    if (totalPrice) {
      setModalActive(true);
      dispatch(clearItems());
    } else {
      alert('В корзине нет товаров для заказа');
    }
  };
  return (
    <>
      <div className="container">
        <Breadcrumbs
          links={[
            {
              title: 'Корзина',
              link: '/cart',
            },
          ]}
        />
        <div className="cart">
          <p className="cart-head">Корзина</p>
          {items.map((item: any) => (
            <CartItemBlock key={item.id} {...item} />
          ))}

          <div className="cart-line"></div>
          <div className="cart-bottom">
            <ModalWindow active={modalActive} setActive={setModalActive}></ModalWindow>
            <button className="cart-bottom-order" onClick={onTakeOrder}>
              Оформить заказ
            </button>
            <p>{totalPrice} ₸</p>
          </div>
        </div>
      </div>
    </>
  );
};
