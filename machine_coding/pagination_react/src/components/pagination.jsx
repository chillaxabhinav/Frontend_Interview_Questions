import '../app.css';

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
    const maxVisiblePages = 10;

    const onPageChange = (e) => {
		const pageId = e.target.getAttribute('data-id');
		if (!pageId) return;
        if (pageId === '...') return;
		const intPageId = parseInt(pageId);
		if (intPageId === -2) setCurrentPage((prev) => prev - 1);
		else if (intPageId === -1) setCurrentPage((prev) => prev + 1);
		else setCurrentPage(intPageId);
	}

    const renderPageKeys = (currPage, key) => {
        return (
            <span className={`pgn_btn${currPage === currentPage ? ' selected' : ''}`} data-id={currPage} key={key}>
                {currPage}
            </span>
        )
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(renderPageKeys(i));
            }
        } else {
            // truncation logic
            const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (startPage > 1) {
                if (startPage > 2) {
                    pageNumbers.push(renderPageKeys(1));
                }
                pageNumbers.push(renderPageKeys('...', 'ellipsis-start'))
            }
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(renderPageKeys(i, i));
            }
            if (endPage < totalPages) {
                pageNumbers.push(renderPageKeys('...', 'ellipsis-end'));
                if (endPage < totalPages - 1){
                    pageNumbers.push(renderPageKeys(totalPages, totalPages));
                }
            }
        }
        return pageNumbers;
    };

    return (
        <div className="pagination" onClick={(e) => onPageChange(e)}>
            {currentPage !== 1 && (
                <span className="pgn_btn" data-id={-2}>
                    ⏮️
                </span>
            )}
            {renderPageNumbers()}
            {currentPage !== totalPages && (
                <span className="pgn_btn" data-id={-1}>
                    ⏭️
                </span>
            )}
        </div>
    )
}

export default Pagination;
