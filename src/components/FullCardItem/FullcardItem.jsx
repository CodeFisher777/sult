import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FullCardItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem } from '../../redux/cart/slice';
import { selectCartItemById } from '../../redux/card/slice';

export const FullcardItem = ({ card }) => {
  const dispatch = useDispatch();
  const { id } = card;
  const onClickPlus = () => {
    dispatch(addItem(card));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
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
            <button disabled={addedCount === 0} onClick={onClickMinus}>
              -
            </button>
            <p>{addedCount}</p>
            <button onClick={onClickPlus}>+</button>
          </div>
          <Link to="/cart" className={styles.root__text__pricecart__tocart}>
            В корзину <img src="./images/cartitem.svg" alt="" />
          </Link>
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
