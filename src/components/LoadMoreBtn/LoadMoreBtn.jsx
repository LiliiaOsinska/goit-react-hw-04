import s from "../LoadMoreBtn/LoadMoreBtn.jsx";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <button className={s.load_Btn} onClick={() => setPage((prev) => prev + 1)}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
