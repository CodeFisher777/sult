import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/slice';

export function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-top-info">
            <div className="header-top-info-address">
              <img src="./images/gps.svg" alt="location" />
              <div className="header-top-info-address-text">
                <p className="header-top-info-address-text-head">
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </p>
                <p className="header-top-info-email-text-parag">(Рынок Восточный)</p>
              </div>
            </div>
            <div className="header-stick"></div>
            <div className="header-top-info-email">
              <img src="./images/email.svg" alt="email" />
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
              <img className="header-bottom-left-logo" src="./images/logo.svg" alt="" />
            </Link>
            <a className="header-bottom-left-catalog" href="#">
              <p>Каталог</p>
              <img src="./images/frame.svg" alt="" />
            </a>
            <div className="header-bottom-left-search">
              <input type="text" placeholder="Поиск..." />
              <button className="header-bottom-left-search-circle">
                <img src="./images/search.svg" alt="" />
              </button>
            </div>
            <div className="header-bottom-left-search-call">
              <div className="header-bottom-left-search-call-text">
                <p>+7 (777) 490-00-91</p>
                <p>время работы: 9:00-20:00</p>
                <p>Заказать звонок</p>
              </div>
              <img src="./images/photo.png" alt="" />
              <div className="header-stick"></div>
            </div>
          </div>
          <div className="header-bottom-right">
            <button>
              Прайс-лист
              <img src="./images/arrow-down.svg" alt="" />
            </button>
            <div className="header-stick"></div>
            <div className="header-bottom-right-cart">
              <Link to="/cart" className="header-bottom-right-cart-image">
                <img src="./images/cart.svg" alt="" />
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
