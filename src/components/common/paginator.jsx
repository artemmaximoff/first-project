import React, { useEffect, useState } from 'react';
import s from './paginator.module.css';



let Paginator = ({ totalItemsCount, currentPage, pageSize, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button className={s.paginatorBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}> Назад </button>
        }
        <span> {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => {
                return <span className={currentPage === p ? s.selectedPage : s.pageNumber}
                    onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
        </span>
        {portionCount > portionNumber &&
            <button className={s.paginatorBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>{`>`}</button>
        }
    </div>

}
export default Paginator;