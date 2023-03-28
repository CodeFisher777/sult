import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/filter/slice';

export function CategoriesVertical() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const categories = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средство для загара',
    'Средство для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  return (
    <div className="categoriesvertical">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onChangeCategory(categoryName)}
            className={categoryId === categoryName ? 'active' : ''}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
