import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './FullCardItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

import { addOneItem } from '../../redux/cart/slice';
import { selectCartItemById } from '../../redux/cart/slice';
import share from '../../assets/images/share.png';
import download from '../../assets/images/downloadblack.svg';
import { useMediaQuery } from 'react-responsive';
import { Back } from '../back';
type FullcardItemProps = {
  card: {
    id: string;
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
  const location = useLocation();
  const onPlus = () => {
    setItemCount(itemCount + 1);
  };
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const onMinus = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  const cardPlusCount = { ...card, itemCount, count: 0, description: 'description' };
  const onClickPlus = () => {
    dispatch(addOneItem(cardPlusCount));
  };

  return (
    <>
      <Breadcrumbs
        links={[
          {
            title: card.title,
            link: location.pathname,
          },
        ]}
      />
      {isMobile && (
        <Link to="/">
          <Back />
        </Link>
      )}
      <div className={styles.root}>
        <img className={styles.root__imgmain} src={card.imageUrl} alt="" />
        <div className={styles.root__text}>
          <p className={styles.root__text__instock}>В наличии</p>
          <p className={styles.root__text__name}>{card.title}</p>
          <div className={styles.root__text__v}>
            <img src="./images/littlebootle.svg" alt="" /> <p>{card.size} г</p>
          </div>

          <div className={styles.root__pricecontainer}>
            <div className={styles.root__text__pricecart}>
              <p>{card.price} ₸</p>
              <div className={styles.root__text__pricecart__buttons}>
                <button disabled={itemCount === 0} onClick={onMinus}>
                  -
                </button>
                <p>{itemCount}</p>
                <button onClick={onPlus}>+</button>
              </div>
            </div>
            <div className={styles.root__buttonscontainer}>
              <button
                disabled={itemCount === 0}
                onClick={onClickPlus}
                className={styles.root__text__pricecart__tocart}
              >
                В корзину <img src="./images/cartitem.svg" alt="" />
              </button>
              {isMobile && (
                <button disabled>
                  <img src={share} alt="" />
                </button>
              )}
            </div>
          </div>
          <div className={styles.root__text__linkblock}>
            {!isMobile && (
              <button disabled>
                <img src={share} alt="" />
              </button>
            )}
            <button>
              При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области
            </button>
            <button disabled>
              Прайс-лист <img src={download} alt="" />
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
    </>
  );
};
