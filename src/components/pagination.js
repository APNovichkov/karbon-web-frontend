import React, { useEffect, useState } from 'react';

const NUM_ITEMS_PER_PAGE = 10

const Pagination = (props) => {
    let {productsLength, setStartingIndex, setEndingIndex} = props;

    const [paginationArray, setPaginationArray] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePageNumberClick = (event, pageItem) => {
        console.log("Clicked item with these values: ", pageItem);

        setStartingIndex(pageItem.indexStart)
        setEndingIndex(pageItem.indexEnd)

        setCurrentIndex(pageItem.index-1);
    }

    useEffect(() => {
        console.log("Setting pagination parameters with products length: ", Math.floor(productsLength/NUM_ITEMS_PER_PAGE));

        let pArr = []
        for(let i = 0; i < Math.floor(productsLength/NUM_ITEMS_PER_PAGE); i++) {
            pArr.push({
                index: i+1,
                indexStart: i*NUM_ITEMS_PER_PAGE,
                indexEnd: (i+1)*NUM_ITEMS_PER_PAGE
            })
        }
        if(productsLength%NUM_ITEMS_PER_PAGE != 0) {
            pArr.push({
                index: Math.floor(productsLength/NUM_ITEMS_PER_PAGE)+1,
                indexStart: Math.floor(productsLength/NUM_ITEMS_PER_PAGE)*NUM_ITEMS_PER_PAGE,
                indexEnd: productsLength
            })
        }

        console.log("Got pArr: ", pArr);

        setPaginationArray(pArr);
    }, []);


    return (
        <div className="pagination-wrapper">
            <div className="d-flex justify-content-center">
            {paginationArray.map((pageItem, index) => (
                <div onClick={(event) => handlePageNumberClick(event, pageItem)} className={`pagination-item ${index === currentIndex && "current-pagination-item"}`}>{pageItem.index}</div>
            ))}
            </div>
        </div>
    )
}

export default Pagination;