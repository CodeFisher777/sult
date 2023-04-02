import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/slice';
import logo from '../assets/images/logo.svg';
import gps from '../assets/images/gps.svg';
import email from '../assets/images/email.svg';
import search from '../assets/images/search.svg';
import arrowDown from '../assets/images/arrow-down.svg';
import cart from '../assets/images/cart.svg';
import photo from '../assets/images/photo.png';
import burger from '../assets/images/burger.svg';
import searchm from '../assets/images/searchm.svg';
import catalogm from '../assets/images/catalogm.svg';
import headerPhone from '../assets/images/headerphone.svg';
import headerTel from '../assets/images/headertel.png';
import close from '../assets/images/closeburger.png';
import { useMediaQuery } from 'react-responsive';

export function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
  const isMounted = React.useRef(false);
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return isMobile ? (
    <header className="headerm">
      <div className="container">
        <div className="headerm-topm">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <img src={close} alt="" /> : <img src={burger} alt="" />}
          </button>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="header-bottom-right-cart">
            <Link to="/cart" className="header-bottom-right-cart-image">
              <img src={cart} alt="" />
              <div className="header-bottom-right-cart-count">
                <span>{totalCount}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
      <div className="container">
        <div className="headerm-bottom">
          <div className="headerm-bottom-left">
            <img src={catalogm} alt="" />
            <p>Каталог</p>
          </div>
          <div className="header-stick"></div>
          <div className="headerm-bottom-right">
            <img src={searchm} alt="" />
            <p>Поиск</p>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
      {open && (
        <>
          <div className="container">
            <div className="header-top-info">
              <div className="header-top-info-address">
                <img src={gps} alt="location" />
                <div className="header-top-info-address-text">
                  <p className="header-top-info-address-text-head">
                    г. Кокчетав, ул. Ж. Ташенова 129Б
                  </p>
                  <p className="header-top-info-email-text-parag">(Рынок Восточный)</p>
                </div>
              </div>

              <div className="header-top-info-email">
                <img src={email} alt="email" />
                <div className="header-top-info-email-text">
                  <p className="header-top-info-email-text-head">opt.sultan@mail.ru</p>
                  <p className="header-top-info-email-text-parag">На связи в любое время</p>
                </div>
              </div>
              <div className="header-top-info-phone">
                <img src={headerPhone} alt="email" />
                <div className="header-top-info-email-text">
                  <p className="header-top-info-email-text-head">Отдел продаж</p>
                  <p className="header-top-info-email-text-parag">+7 (777) 490-00-91</p>
                </div>
              </div>
            </div>
            <div className="headerm-call">
              <img src={headerTel} alt="" />
              <p>Заказать звонок</p>
            </div>
            <div className="headerm-line"></div>
            <div className="headerm-menu">
              <p>Меню сайта:</p>
              <p>О компании</p>
              <p>Доставка и оплата</p>
              <p>Возврат</p>
              <p>Контакты</p>
            </div>
            <button className="headerm-download">
              Прайс-лист
              <img src={arrowDown} alt="" />
            </button>
          </div>
        </>
      )}
    </header>
  ) : (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-top-info">
            <div className="header-top-info-address">
              <img src={gps} alt="location" />
              <div className="header-top-info-address-text">
                <p className="header-top-info-address-text-head">
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </p>
                <p className="header-top-info-email-text-parag">(Рынок Восточный)</p>
              </div>
            </div>
            <div className="header-stick"></div>
            <div className="header-top-info-email">
              <img src={email} alt="email" />
              <div className="header-top-info-email-text">
                <p className="header-top-info-email-text-head">opt.sultan@mail.ru</p>
                <p className="header-top-info-email-text-parag">На связи в любое время</p>
              </div>
            </div>
          </div>
          <nav className="header-top-menu">
            <ul>
              <li>
                <a href="#">О компании</a>
              </li>
              <div className="header-stick"></div>
              <li>
                <a href="#">Доставка и оплата</a>
              </li>
              <div className="header-stick"></div>
              <li>
                <a href="#">Возврат</a>
              </li>
              <div className="header-stick"></div>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-line"></div>
      <div className="container">
        <div className="header-bottom">
          <div className="header-bottom-left">
            <Link to="/">
              <img className="header-bottom-left-logo" src={logo} alt="" />
            </Link>
            <a className="header-bottom-left-catalog" href="#">
              <p>Каталог</p>
              <img src="./images/frame.svg" alt="" />
            </a>
            <div className="header-bottom-left-search">
              <input type="text" placeholder="Поиск..." />
              <button className="header-bottom-left-search-circle">
                <img src={search} alt="" />
              </button>
            </div>
            <div className="header-bottom-left-search-call">
              <div className="header-bottom-left-search-call-text">
                <p>+7 (777) 490-00-91</p>
                <p>время работы: 9:00-20:00</p>
                <p>Заказать звонок</p>
              </div>
              <img src={photo} alt="" />
              <div className="header-stick"></div>
            </div>
          </div>
          <div className="header-bottom-right">
            <button>
              Прайс-лист
              <img src={arrowDown} alt="" />
            </button>
            <div className="header-stick"></div>
            <div className="header-bottom-right-cart">
              <Link to="/cart" className="header-bottom-right-cart-image">
                <img src={cart} alt="" />
                <div className="header-bottom-right-cart-count">
                  <span>{totalCount}</span>
                </div>
              </Link>
              <div className="header-bottom-right-cart-text">
                <p>Корзина</p>
                <p>{totalPrice} ₸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-line"></div>
    </header>
  );
}
