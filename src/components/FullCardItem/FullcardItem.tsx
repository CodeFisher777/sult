import React from 'react';
import styles from './FullCardItem.module.scss';

export const FullcardItem = () => {
  return (
    <div className={styles.root}>
      <img className={styles.root__imgmain} src="./images/AOS.png" alt="" />
      <div className={styles.root__text}>
        <p className={styles.root__text__instock}>В наличии</p>
        <p className={styles.root__text__name}>
          BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот
        </p>
        <div className={styles.root__text__v}>
          <img src="./images/littlebootle.svg" alt="" /> <p>90 г</p>
        </div>
        <div className={styles.root__text__pricecart}>
          <p>48,76 ₸</p>
          <div className={styles.root__text__pricecart__buttons}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <button className={styles.root__text__pricecart__tocart}>
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
              <span>Производитель:</span> <span>BioMio</span>
            </li>
            <li>
              <span>Бренд:</span> <span>BioMio</span>
            </li>
            <li>
              <span>Артикул:</span> <span>37653586</span>
            </li>
            <li>
              <span>Штрихкод:</span> <span>735735875287452587</span>
            </li>
          </ul>
          <p className={styles.root__text__description}>Описание ▲</p>
          <p className={styles.root__text__lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, voluptatem expedita
            deserunt eos assumenda vel mollitia nisi. Impedit saepe cumque temporibus dolores fuga,
            velit veniam odit consectetur incidunt quam ullam!
          </p>
          <div className={styles.root__text__line}></div>
          <div className={styles.root__text__options}>
            <p>Характеристики ▲</p>
            <ul>
              <li>
                <span>Назначение:</span> <span>BioMio</span>
              </li>
              <li>
                <span>Тип:</span> <span>BioMio</span>
              </li>
              <li>
                <span>Производитель:</span> <span>633435</span>
              </li>
              <li>
                <span>Бренд:</span> <span>346346</span>
              </li>
              <li>
                <span>Артикул:</span> <span>364363</span>
              </li>
              <li>
                <span>Штрихкод:</span> <span>346363</span>
              </li>
              <li>
                <span>Вес:</span> <span>90 г</span>
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
