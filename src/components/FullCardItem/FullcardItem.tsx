import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FullCardItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, minusItem, addOneItem } from '../../redux/cart/slice';
import { selectCartItemById } from '../../redux/card/slice';

type FullcardItemProps = {
  card: {
    id: number;
    imageUrl: string;
    title: string;
    size: number;
    price: number;
    brand: string;
    manufacture: string;
    code: number;
    descrition: string;
  };
};
export const FullcardItem: React.FC<FullcardItemProps> = ({ card }) => {
  const dispatch = useDispatch();
  const { id } = card;
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const [itemCount, setItemCount] = React.useState(addedCount);

  const onPlus = () => {
    setItemCount(itemCount + 1);
  };

  const onMinus = () => {
    setItemCount(itemCount - 1);
  };

  const cardPlusCount = { ...card, itemCount };
  const onClickPlus = () => {
    dispatch(addOneItem(cardPlusCount));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className={styles.root}>
      <img className={styles.root__imgmain} src={card.imageUrl} alt="" />
      <div className={styles.root__text}>
        <p className={styles.root__text__instock}>В наличии</p>
        <p className={styles.root__text__name}>{card.title}</p>
        <div className={styles.root__text__v}>
          <img src="./images/littlebootle.svg" alt="" /> <p>{card.size} г</p>
        </div>
        <div className={styles.root__text__pricecart}>
          <p>{card.price} ₸</p>
          <div className={styles.root__text__pricecart__buttons}>
            <button disabled={itemCount === 0} onClick={onMinus}>
              -
            </button>
            <p>{itemCount}</p>
            <button onClick={onPlus}>+</button>
          </div>
          <button onClick={onClickPlus} className={styles.root__text__pricecart__tocart}>
            В корзину <img src="./images/cartitem.svg" alt="" />
          </button>
        </div>
        <div className={styles.root__text__linkblock}>
          <button>
            <img src="./images/share.png" alt="" />
          </button>
          <button>
            При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области
          </button>
          <button>
            Прайс-лист <img src="./images/downloadblack.svg" alt="" />
          </button>
        </div>
        <div className={styles.root__text__parameters}>
          <ul>
            <li>
              <span>Производитель:</span> <span>{card.manufacture}</span>
            </li>
            <li>
              <span>Бренд:</span> <span>{card.brand}</span>
            </li>
            <li>
              <span>Артикул:</span> <span>37653586</span>
            </li>
            <li>
              <span>Штрихкод:</span> <span>{card.code}</span>
            </li>
          </ul>
          <p className={styles.root__text__description}>Описание ▲</p>
          <p className={styles.root__text__lorem}>{card.descrition}</p>
          <div className={styles.root__text__line}></div>
          <div className={styles.root__text__options}>
            <p>Характеристики ▲</p>
            <ul>
              <li>
                <span>Назначение:</span> <span>{card.title}</span>
              </li>
              <li>
                <span>Тип:</span> <span>BioMio</span>
              </li>
              <li>
                <span>Производитель:</span> <span>{card.manufacture}</span>
              </li>
              <li>
                <span>Бренд:</span> <span>{card.brand}</span>
              </li>
              <li>
                <span>Артикул:</span> <span>364363</span>
              </li>
              <li>
                <span>Штрихкод:</span> <span>{card.code}</span>
              </li>
              <li>
                <span>Вес:</span> <span>{card.size} г</span>
              </li>
              <li>
                <span>Объём:</span> <span>90 г</span>
              </li>
              <li>
                <span>Кол-во в кооробке:</span> <span>90 шт.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
