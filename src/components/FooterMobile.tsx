import toplogo from '../assets/images/footerlogo.png';
import arrowdown from '../assets/images/arrow-down.svg';
import finput from '../assets/images/footerinput.png';
import visa from '../assets/images/Visa.png';
import mastercard from '../assets/images/mastercard.png';
import whatsup from '../assets/images/whatsup.png';
import telegram from '../assets/images/telegram.png';

export function FooterMobile() {
  return (
    <footer className="footerm">
      <div className="container">
        <div className="footerm-top">
          <img className="footerm-top-logo" src={toplogo} alt="" />
          <button>
            Прайс-лист
            <img src={arrowdown} alt="" />
          </button>
        </div>
        <div className="footerm-text">
          <p>
            Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и
            Акмолинской области
          </p>
          <p>Подпишись на скидки и акции</p>
        </div>
        <div className="footerm-emflex">
          <div className="footerm-email">
            <input type="text" placeholder="Введите ваш E-mail" />
            <button className="footerm-email-circle">
              <img src={finput} alt="" />
            </button>
          </div>
        </div>
        <div className="footerm-infolist">
          <div className="footerm-infolist-links">
            <p>Меню сайта:</p>
            <ul>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Доставка и оплата</a>
              </li>
              <li>
                <a href="#">Возврат</a>
              </li>
              <li>
                {' '}
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footerm-infolist-links">
            <p>Категории:</p>
            <ul>
              <li>
                <a href="#">Бытовая химия</a>
              </li>
              <li>
                <a href="#">Косметика и гигиена</a>
              </li>
              <li>
                <a href="#">Товары для дома</a>
              </li>
              <li>
                {' '}
                <a href="#">Товары для детей и мам</a>
              </li>
              <li>
                {' '}
                <a href="#">Посуда</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerm-bottom">
          <div className="footerm-contacts">
            <p>Контакты</p>
            <p>+7 (777) 490-00-91</p>
            <p>время работы: 9:00-20:00</p>
            <p>Заказать звонок</p>
            <p>opt.sultan@mail.ru</p>
            <p>На связи в любое время</p>
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>
          <div className="footerm-bottom-sviaz">
            <p>Связь в мессенджерах:</p>
            <div className="footerm-bottom-sviaz-social">
              <img src={whatsup} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
