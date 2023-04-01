import React, { ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../redux/card/types';
import arrowUp from './../assets/images/arrowupmobile.svg';
import arrowDown from './../assets/images/arrowdownmobile.svg';
import { CategoriesVertical } from './CategoriesVertical';

type FiltersProps = {
  items: Card[];
};

export const Filters: React.FC<FiltersProps> = ({ items }) => {
  const isMobile = useMediaQuery({ query: '(max-width:720px)' });
  const [searchValue, setSearchValue] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [checkBrand, setCheckBrand] = React.useState('');
  //@ts-ignore
  const uniqArrBrand: [] = [...new Set(items.map((items) => items.brand))];
  const [openBurger, setOpenBurger] = React.useState(true);
  const [filteredBrand, setFilteredBrand] = React.useState([]);
  const [filteredPrice, setFilteredPrice] = React.useState([]);

  const [openBrand, setOpenBrand] = React.useState(false);
  let ulClasses = ['filters-brand-checkboxes'];
  if (openBrand) {
    ulClasses = ['filters-brand-checkboxes active'];
  } else {
    ulClasses = ['filters-brand-checkboxes'];
  }
  const onChangeOpen = (event: React.MouseEvent<HTMLLabelElement>) => {
    if (uniqArrBrand.length > 4) {
      setOpenBrand(!openBrand);
    } else {
      setOpenBrand(false);
    }
  };
  const onShowFiltered = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilteredPrice(
      //@ts-ignore
      items.filter(
        (item: Card) => item.price >= Number(minPrice) && item.price <= Number(maxPrice),
      ),
    );
    console.log(filteredPrice);
  };

  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilteredBrand(
      uniqArrBrand.filter((item: string) => item.toLowerCase() == searchValue.toLowerCase()),
    );
  };
  const arrRender = filteredBrand.length !== 0 ? filteredBrand : uniqArrBrand;

  return (
    <div className="filters">
      <div className="filters-head">
        <p className="filters-firstp">Подбор по параметрам</p>{' '}
        {isMobile && (
          <button onClick={() => setOpenBurger(!openBurger)} className="buttonm">
            {openBurger ? (
              <img className="buttonm-arrowdown" src={arrowUp} alt="" />
            ) : (
              <img className="buttonm-arrowdown" src={arrowDown} alt="" />
            )}
          </button>
        )}
      </div>
      {openBurger && (
        <div className="filters-allparams">
          <p className="filters-secondp">
            Цена <b>₸</b>
          </p>
          <div className="filters-price">
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) => setMinPrice(event.target.value)}
              type="text"
              placeholder="0"
            />
            <div>-</div>
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) => setMaxPrice(event.target.value)}
              type="text"
              placeholder="10 000"
            />
          </div>
          <div className="filters-brand">
            <p className="filters-brand-firstp">Бренд</p>
            <div className="filters-brand-search">
              <input
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(event.target.value)
                }
                type="text"
                placeholder="Поиск..."
              />
              <button onClick={onSearch} className="filters-brand-search-circle">
                <img src="./images/search.svg" alt="" />
              </button>
            </div>
            <ul
              //@ts-ignore
              className={ulClasses}
            >
              {arrRender.map((items: string, i) => (
                <li key={i}>
                  <input onChange={(event) => setCheckBrand(event.target.value)} type="checkbox" />
                  <p className="filters-brand-checkboxes-name">{items}</p>
                  <p>({items.length})</p>
                </li>
              ))}
            </ul>
            <label onClick={onChangeOpen}>
              Показать все <img src="./images/sortarrowdown.svg" alt="" />
            </label>
          </div>
          <div className="filters-brand-buttons">
            <button onClick={onShowFiltered}>Показать</button>
            <button>
              <img src="./images/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}
      <CategoriesVertical />
    </div>
  );
};
