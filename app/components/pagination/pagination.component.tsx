import React from 'react';
import { Link, useSearchParams } from '@remix-run/react';

/**
 * @type {React.FC<{
 * totalPages: number|string
 * pageParam?: string
 * }>}
 */

const createURL = (params: URLSearchParams, pageParam: string, index: number) => {
  const url = new URLSearchParams(params);
  url.set(pageParam, index.toString());
  return url;
};

export const Pagination = ({ totalPages = Number.MAX_SAFE_INTEGER, pageParam = 'page', className = '', ...attrs }) => {
  const [queryParams] = useSearchParams();
  const currentPage = Number(queryParams.get(pageParam) || 1);
  totalPages = Number(totalPages);
  console.log(currentPage);
  const items = Array.from({ length: totalPages }, (_, index) => createURL(queryParams, pageParam, index + 1));
  //   const pagesLinks =
  const previousQuery = new URLSearchParams(queryParams);
  previousQuery.set(pageParam, (currentPage - 1).toString());
  const nextQuery = new URLSearchParams(queryParams);
  nextQuery.set(pageParam, (currentPage + 1).toString());
  console.log(items);
  return (
    <div className='pagination'>
      <nav className={['pagination__nav', className].filter(Boolean).join(' ')} {...attrs}>
        {currentPage <= 1 && (
          <span className='pagination__link disabled'>
            <img width={40} height={40} src='/assets/chevron-left.svg' alt='arrow left icon' />
          </span>
        )}
        {currentPage > 1 && (
          <Link className='pagination__link' to={`?${previousQuery.toString()}`}>
            <img width={40} height={40} src='/assets/chevron-left.svg' alt='arrow left icon' />
          </Link>
        )}
        {items.map((page, index) => (
          <div className='' key={index}>
            <Link
              className={`pagination__number ${currentPage == index + 1 ? 'active' : ''}`}
              to={`?${page.toString()}`}
            >
              {index + 1}
            </Link>
          </div>
        ))}
        {currentPage >= totalPages && (
          <span className='pagination__link disabled'>
            <img width={40} height={40} src='/assets/chevron-right.svg' alt='arrow right icon' />
          </span>
        )}
        {currentPage < totalPages && (
          <Link className='pagination__link' to={`?${nextQuery.toString()}`}>
            <img width={40} height={40} src='/assets/chevron-right.svg' alt='arrow right icon' />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
