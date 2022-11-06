import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type typeCommon = string | number

interface Props {
  totalCount: typeCommon
  page: typeCommon
  perPage: typeCommon
}

const Pagination = ({ totalCount, page, perPage }: Props) => {
  const [queryPage, setQueryPage] = useState<typeCommon>(page)
  const router = useRouter()

  useEffect(() => {
    if ('page' in router.query) {
      setQueryPage(Number(router.query.page))
    }
  }, [router])

  const pageIntoArray = Array.from(Array(totalCount).keys())

  const pageNumClick = (_page: typeCommon) => {
    if (_page > 0 && _page <= pageIntoArray.length) {
      router
        .push({
          pathname: router.pathname,
          query: { page: _page, perPage },
        })
        .then((r) => r)
    }
  }

  const changePage = (_page: number) => {
    pageNumClick(_page)
  }

  return (
    <ul className="flex items-center justify-center space-x-1">
      <li
        onClick={() => pageNumClick(Number(page) - 1)}
        className={clsx(
          [queryPage !== 1 ? 'cursor-pointer' : 'pointer-events-none cursor-not-allowed'],
          'rounded-lg bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:hover:bg-primary-500'
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </li>

      {pageIntoArray.map((_page) => {
        return (
          <li
            key={_page}
            onClick={() => changePage(_page + 1)}
            className={clsx(
              {
                'bg-primary-500': queryPage === _page + 1,
              },
              'cursor-pointer list-none rounded-lg px-4 py-2 text-white transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500'
            )}>
            {_page + 1}
          </li>
        )
      })}
      <li
        onClick={() => pageNumClick(Number(page) + 1)}
        className={clsx(
          [
            queryPage !== pageIntoArray.length
              ? 'cursor-pointer'
              : 'pointer-events-none cursor-not-allowed',
          ],
          'rounded-lg bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-150 hover:bg-primary-500 hover:text-white dark:bg-gray-700 dark:hover:bg-primary-500'
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </li>
    </ul>
  )
}

export default Pagination
