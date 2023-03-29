import React from 'react';

type CategoriesProps = {
  value: string;
  onChangeCategory: (parametr: string) => void;
};

export const categories = [
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

export const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  return (
    <section className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onChangeCategory(categoryName)}
            className={value === categoryName ? 'active' : ''}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </section>
  );
};
