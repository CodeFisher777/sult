import ReactPaginate from 'react-paginate';
import { selectCard } from '../redux/card/slice';
import { useSelector } from 'react-redux';
type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  const { items, status } = useSelector(selectCard);
  console.log(items.length);
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={5}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};
