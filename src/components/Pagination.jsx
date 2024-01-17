import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from '../components/Product'
import spfFour from '../../src/assets/specialOffer/spfFour.webp'

// Example items, to simulate fetching from another resources.
const items = [
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "01"
    },
    {
        name: "02"
    },
    {
        name: "03"
    },
    {
        name: "04"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
    {
        name: "05"
    },
    {
        name: "06"
    },
    {
        name: "07"
    },
    {
        name: "08"
    },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div>
            <Product image={spfFour} heading={item.name + index}/>6
          </div>
        ))}
    </>
  );
}  

function Pagination({ itemsPerPage }) {
    let [pageNum, setpageNum] = useState(1)
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setpageNum(event.selected + 1)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );



    
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-wrap'>
      <Items currentItems={currentItems}/>
      </div>
      <div className='flex justify-between'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName='flex gap-x-3'
        pageClassName='border border-solid border-black p-4 hover:bg-red-400'
      />
      <p>Product from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
      </div>
    </>
  );
}

export default Pagination


