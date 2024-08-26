const ContentPageNavigation = ({
  state,
  fetchData,
  prev,
  next,
  query,
  max,
}) => {
  const bttnStyle =
    "border rounded-sm py-1 px-2 flex items-center justify-center text-gray-500 disabled:text-gray-200 disabled:text-gray-200";
  const pages = [];

  if (state != null && state.totalDocs > state.results.length) {
    for (let i = 0; i < state.totalDocs / max; i++) {
      pages.push(i + 1);
    }
    return (
      <div className="flex text-sm gap-1">
        <button
          ref={prev}
          onClick={() => fetchData({ query, page: state.page - 1, max })}
          className={bttnStyle}
        >
          <i class="fi fi-rr-angle-left text-[10px]"></i>
        </button>
        {pages.map((page, index) => (
          <button
            onClick={() => fetchData({ query, page, max })}
            className={`${bttnStyle} ${
              state.page == page && "text-primary border-primary "
            }`}
          >
            {page}
          </button>
        ))}

        <button
          ref={next}
          onClick={() => fetchData({ query, page: state.page + 1, max })}
          className={bttnStyle}
        >
          <i class="fi fi-rr-angle-right text-[10px]"></i>
        </button>
      </div>
    );
  }
};
export default ContentPageNavigation;
