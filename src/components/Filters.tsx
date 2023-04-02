import React, { ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../redux/card/types';
import arrowUp from './../assets/images/arrowupmobile.svg';
import arrowDown from './../assets/images/arrowdownmobile.svg';
import { CategoriesVertical } from './CategoriesVertical';
import { setMinPrice, setMaxPrice } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
type FiltersProps = {
  items: Card[];
};

export const Filters: React.FC<FiltersProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const [searchValue, setSearchValue] = React.useState('');
  const [minPriceInput, setMinPriceInput] = React.useState('');
  const [maxPriceInput, setMaxPriceInput] = React.useState('');
  const [checkBrand, setCheckBrand] = React.useState('');
  const [checkedValues, setValues] = React.useState([]);
  const [length, setLength] = React.useState([]);

  //@ts-ignore
  const uniqArrBrand: [] = [...new Set(items.map((items) => items.brand))];
  const [open, setOpen] = React.useState(true);
  const [filteredBrand, setFilteredBrand] = React.useState([]);

  //открытие брэндов
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

  //показать отфильтрованный по тцене
  const onShowFiltered = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMinPrice(Number(minPriceInput)));
    dispatch(setMaxPrice(Number(maxPriceInput)));
  };
  const delFilters = () => {
    dispatch(setMinPrice(0));
    dispatch(setMaxPrice(0));
  };
  const arrPrice = items.map((item) => item.price);

  //поиск брэнда
  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilteredBrand(
      uniqArrBrand.filter((item: string) => item.toLowerCase() == searchValue.toLowerCase()),
    );
  };
  const arrRender = filteredBrand.length !== 0 ? filteredBrand : uniqArrBrand;
  const handleChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      //@ts-ignore
      setValues((pre) => [...pre, value]);
    } else
      setValues((pre) => {
        return [...pre.filter((brand) => brand !== value)];
      });
  };

  return (
    <div className="filters">
      <div className="filters-head">
        <p className="filters-firstp">Подбор по параметрам</p>{' '}
        {isMobile && (
          <button onClick={() => setOpen(!open)} className="buttonm">
            {open ? (
              <img className="buttonm-arrowdown" src={arrowUp} alt="" />
            ) : (
              <img className="buttonm-arrowdown" src={arrowDown} alt="" />
            )}
          </button>
        )}
      </div>
      {open && (
        <div className="filters-allparams">
          <p className="filters-secondp">
            Цена <b>₸</b>
          </p>
          <div className="filters-price">
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMinPriceInput(event.target.value)
              }
              type="text"
              placeholder="0"
            />
            <div>-</div>
            <input
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMaxPriceInput(event.target.value)
              }
              type="text"
              placeholder={String(Math.max(...arrPrice))}
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
              {arrRender.map((brand: string, i) => (
                <li key={i}>
                  <input type="checkbox" value={brand} onChange={handleChange} />
                  <p className="filters-brand-checkboxes-name">{brand}</p>
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
            <button onClick={delFilters}>
              <img src="./images/trash.svg" alt="" />
            </button>
          </div>
        </div>
      )}
      <CategoriesVertical />
    </div>
  );
};
