import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from '../redux/filter/slice';
import { Sort, SortPropertyEnum } from '../redux/filter/types';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};
type PopupClick = MouseEvent & {
  path: Node[];
};
type SortPopupProps = {
  value: Sort;
};

export const sortList: SortItem[] = [
  { name: 'Название ▼', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'Название ▲', sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: 'Цена ▼', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Цена ▲', sortProperty: SortPropertyEnum.PRICE_ASC },
];

export const NameAndSort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      let path = sortRef.current && event.composedPath().includes(sortRef.current);
      if (!path) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <section className="nameandsort">
      <h1>Косметика и гигиена</h1>
      <div ref={sortRef} className="sort">
        <div className="sort-label">
          <p>Сортировка:</p>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
          <div className="sort-popup">
            <ul>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
});
