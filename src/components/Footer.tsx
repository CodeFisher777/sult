export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-card">
            <img src="./images/footerlogo.png" alt="" />
            <p>
              Компания «Султан» — снабжаем <br /> розничные магазины товарами <br />
              "под ключ" в Кокчетаве и Акмолинской <br /> области
            </p>
            <span>Подпишись на скидки и акции</span>
            <div className="footer-card-email">
              <input type="text" placeholder="Введите ваш E-mail" />
              <button className="footer-card-email-circle">
                <img src="./images/footerinput.png" alt="" />
              </button>
            </div>
          </div>
          <div className="footer-menu">
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
          <div className="footer-menu">
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
          <div className="footer-saveprice">
            <p>Скачать прайс-лист:</p>
            <button>
              Прайс-лист
              <img src="./images/arrow-down.svg" alt="" />
            </button>
            <p>Связь в мессенджерах:</p>
            <div className="footer-saveprice-social">
              <img src="./images/whatsup.png" alt="" />
              <img src="./images/telegram.png" alt="" />
            </div>
          </div>
          <div className="footer-contacts">
            <p>Контакты</p>
            <p>+7 (777) 490-00-91</p>
            <p>время работы: 9:00-20:00</p>
            <p>Заказать звонок</p>
            <p>opt.sultan@mail.ru</p>
            <p>На связи в любое время</p>
            <img src="./images/Visa.png" alt="" />
            <img src="./images/mastercard.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
