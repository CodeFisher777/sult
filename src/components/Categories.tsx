import React from 'react';

type CategoriesProps = {
  value: string;
  onChangeCategory: any;
};

export const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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

  return (
    <section className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          //@ts-ignore
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
