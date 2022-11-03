import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// 
function usePagination ({ onPageChange = null }) {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(false);
  // 
  const changePage = (idx) => e => {
    const selected = idx + 1;
    if (page !== selected) {
      onPageChange(selected);
      setPage(selected)
    }
  }
  // 
  const togglePagination = (sent) => { setEnabled(sent); }
  // 
  return [
    {
      setCount, count,
      page, setPage,
      togglePagination
    },
    () =>
      <div className='flex gap-1 flex-wrap'>
        {
          count > 0 && enabled && Array.from(Array(Math.ceil(count / 20)).keys()).map((_, index) => <div
            onClick={changePage(index)}
            className={`w-8 grid place-items-center cursor-pointer ${index + 1 === page ? 'bg-blue-400' : 'bg-blue-100'}`}
          >{index + 1}</div>)
        }
      </div>
  ]
}
// 
usePagination.propTypes = {
  onPageChange: PropTypes.func.isRequired
}
// 
export default usePagination
