import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: number;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      //@ts-ignore
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={5}
      previousLabel="<"
      forcePage={currentPage - 1}
      //@ts-ignore
      renderOnZeroPageCount={null}
    />
  );
};
