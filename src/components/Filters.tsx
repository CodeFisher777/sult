import React, { ChangeEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Card } from '../redux/card/types';
import arrowUp from './../assets/images/arrowupmobile.svg';
import arrowDown from './../assets/images/arrowdownmobile.svg';
import { CategoriesVertical } from './CategoriesVertical';
import { setMinPrice, setMaxPrice, selectFilter } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { preProcessFile } from 'typescript';
import { useSelector } from 'react-redux';
type FiltersProps = {
  items: Card[];
};

export const Filters: React.FC<FiltersProps> = ({ items }) => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({ query: '(max-width:950px)' });
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [minPriceInput, setMinPriceInput] = React.useState<string>('');
  const [maxPriceInput, setMaxPriceInput] = React.useState<string>('');
  const [checkBrand, setCheckBrand] = React.useState<Card[]>([]);
  const [checkedValues, setValues] = React.useState<string[]>([]);
  const [length, setLength] = React.useState([]);

  //@ts-ignore
  const uniqArrBrand: string[] = [...new Set<string>(items.map((items) => items.brand))];
  const [open, setOpen] = React.useState<boolean>(true);
  const [filteredBrand, setFilteredBrand] = React.useState<string[]>([]);
  const [lengthBrand, setLengthBrand] = React.useState<number[]>([]);
  console.log(lengthBrand);
  //открытие брэндов
  const [openBrand, setOpenBrand] = React.useState<boolean>(false);
  const onChangeOpen = (event: React.MouseEvent<HTMLLabelElement>) => {
    if (uniqArrBrand.length > 4) {
      setOpenBrand(!openBrand);
    } else {
      setOpenBrand(false);
    }
  };

  //показать отфильтрованный по цене

  const delFilters = () => {
    dispatch(setMinPrice(0));
    dispatch(setMaxPrice(0));
    setMinPriceInput('');
    setMaxPriceInput('');
    setSearchValue('');
    setFilteredBrand([]);
    setCheckBrand([]);
  };
  const arrPrice = items.map((item) => item.price);

  //поиск брэнда
  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilteredBrand(
      uniqArrBrand.filter((item: string) => item.toLowerCase().includes(searchValue.toLowerCase())),
    );
  };
  const arrRender = filteredBrand.length !== 0 ? filteredBrand : uniqArrBrand;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setValues((pre) => [...pre, value]);
    } else
      setValues((pre) => {
        return [...pre.filter((brand) => brand !== value)];
      });
  };

  const onShowFiltered = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setMinPrice(Number(minPriceInput)));
    dispatch(setMaxPrice(Number(maxPriceInput)));
    checkedValues.forEach((name) => {
      const a = items.filter((item) => item.brand === name);
      //@ts-ignore
      setCheckBrand((pre) => [...pre, a]);
    });
    console.log(checkBrand);
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
              value={minPriceInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMinPriceInput(event.target.value)
              }
              type="text"
              placeholder="0"
            />
            <div>-</div>
            <input
              value={maxPriceInput}
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
                value={searchValue}
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
              className={openBrand ? 'filters-brand-checkboxes active' : 'filters-brand-checkboxes'}
            >
              {arrRender.map((brand: string, i: number) => (
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
