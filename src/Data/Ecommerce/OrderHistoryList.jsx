import React from 'react';
import product1 from '../../assets/images/ecommerce/product-table-6.png';
import product2 from '../../assets/images/ecommerce/product-table-5.png';
import product3 from '../../assets/images/ecommerce/product-table-4.png';
import product4 from '../../assets/images/ecommerce/product-table-3.png';
import product11 from '../../assets/images/ecommerce/product-table-2.png';
import product12 from '../../assets/images/ecommerce/product-table-1.png';
import product13 from '../../assets/images/ecommerce/product-table-1.png';
import product14 from '../../assets/images/ecommerce/product-table-6.png';
import product15 from '../../assets/images/ecommerce/product-table-5.png';
import { H6, Image } from '../../AbstractElements';

export const OrderHistoryData = [
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product1, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Women Top</a>
      </div>
    ),
    Price: '$25',
    Stock: 'In Stock',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product2, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Women Shorts</a>
      </div>
    ),
    Price: '$85',
    Stock: 'In Stock',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product3, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Cyclamen</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$89',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product4, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Men Solid Denim jacket</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$35',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product11, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Blue Shirt</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$50',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product12, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Red Shirt</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$285',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product13, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Red Shirt</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$245',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product14, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Women Top</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$235',
  },
  {
    Product: <Image attrImage={{ className: 'align-self-center img-fluid img-60 border-0', src: product15, alt: '' }}></Image>,
    Product_Name: (
      <div className='product-name'>
        <a href='#javascript'>Women Shorts</a>
      </div>
    ),
    Stock: 'In Stock',
    Price: '$55',
  },
];
export const OrderHistoryColumns = [
  {
    name: <H6>Product</H6>,
    selector: (row) => row.Product,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Product Name</H6>,
    selector: (row) => row.Product_Name,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: <H6>Size</H6>,
    selector: (row) => row.Size,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Color</H6>,
    selector: (row) => row.Color,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Article number</H6>,
    selector: (row) => row.Article_number,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Units</H6>,
    selector: (row) => row.Units,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Price</H6>,
    selector: (row) => row.Price,
    sortable: true,
    center: true,
  },
];
