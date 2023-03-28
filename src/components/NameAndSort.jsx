import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from '../redux/filter/slice';

export const NameAndSort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  const list = [
    { name: 'Название ▼', sortProperty: 'title' },
    { name: 'Название ▲', sortProperty: '-title' },
    { name: 'Цена ▼', sortProperty: 'price' },
    { name: 'Цена ▲', sortProperty: '-price' },
  ];

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
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
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className="sort-popup">
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
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
};
