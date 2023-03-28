import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { NameAndSort } from '../components/NameAndSort';
import { Categories } from '../components/Categories';
import { Pagination } from '../components/Pagination';
import { Filters } from '../components/Filters';
import { CardBlock } from '../components/CardBlock';
import { Skeleton } from '../components/CardBlock/Skeleton';

import { fetchCardRedux } from '../redux/card/asyncActions';
import { selectCard } from '../redux/card/slice';

export const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector(selectCard);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getCards = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');

    dispatch(fetchCardRedux({ sortBy, order, categoryId, currentPage }));
  };
  React.useEffect(() => {
    getCards();
  }, [categoryId, sort.sortProperty, currentPage]);

  return (
    <>
      <div className="container">
        <NameAndSort />
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <section className="parametersandcards">
          <Filters arrBrand={items} />
          <div className="rightside">
            <div className="card">
              {status === 'loading'
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => <CardBlock {...obj} key={obj.id} />)}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur molestiae
              blanditiis hic tempora dolor, modi architecto laborum nesciunt delectus, ipsa
              excepturi quis doloribus quasi! Et repudiandae unde nesciunt natus.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
