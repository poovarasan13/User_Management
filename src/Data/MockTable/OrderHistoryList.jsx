import React from 'react';
import product1 from '../../assets/images/product/1.png';
import product2 from '../../assets/images/product/2.png';
import product3 from '../../assets/images/product/3.png';
import product4 from '../../assets/images/product/4.png';
import product15 from '../../assets/images/product/15.png';
import product14 from '../../assets/images/product/14.png';
import product11 from '../../assets/images/product/11.png';
import product12 from '../../assets/images/product/12.png';
import product13 from '../../assets/images/product/13.png';
import { Image } from '../../AbstractElements';


export const OrderHistoryData = [
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: `${product1}`, alt: '' }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Long Top</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: 'M',
    Color:'Lavander',
    Article_number: '01024224',
    Units: '1',
    Price: '$25'
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product1}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Fancy watch</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: "L",
    Color: "Blue",
    Article_number: "2024242",
    Units: "1",
    Price: "$85"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product2}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Man shoes</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: "XL",
    Color: "Brown",
    Article_number: "875554",
    Units: "1",
    Price: "$89"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product3}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Dress</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: "M",
    Color: "Green",
    Article_number: "45645643",
    Units: "1",
    Price: "$35"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product4}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Slipper</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: "XXL",
    Color: "Pink",
    Article_number: "94864563",
    Units: "1",
    Price: "$50"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product15}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Jacket</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: "XXXL",
    Color: "Black",
    Article_number: "6466645",
    Units: "1",
    Price: "$285"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product11}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Handbag</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: "M",
    Color: "Brown",
    Article_number: "555758",
    Units: "1",
    Price: "$245"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product12}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Iphone6</a>
      <div className="order-process"><span className="order-process-circle cancel-order"></span>Cancelled</div>
    </div>,
    Size: "S",
    Color: "Orange",
    Article_number: "1245554",
    Units: "1",
    Price: "$235"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product13}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Watch</a>
      <div className="order-process"><span className="order-process-circle cancel-order"></span>Cancelled</div>
    </div>,
    Size: "R",
    Color: "Pista",
    Article_number: "123456",
    Units: "1",
    Price: "$55"
  },
  {
    Product: <Image attrImage={{ className: "img-fluid img-30", src: `${product14}`, alt: "" }} />,
    Product_Name: <div className="product-name"><a href="#javascript">Long Top</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: "L",
    Color: "Blue",
    Article_number: "456879",
    Units: "1",
    Price: "$5"
  },
];
export const OrderHistoryColumns = [
  {
    name: <h6>Product</h6>,
    selector: (row) => row.Product,
    sortable: true,
    center: true,
  },
  {
    name: <h6>Product Name</h6>,
    selector: (row) => row.Product_Name,
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <h6>Size</h6>,
    selector: (row) => row.Size,
    sortable: true,
    center: true,
  },
  {
    name: <h6>Color</h6>,
    selector: (row) => row.Color,
    sortable: true,
    center: true,
  },
  {
    name: <h6>Article number</h6>,
    selector: (row) => row.Article_number,
    sortable: true,
    center: true,
  },
  {
    name: <h6>Units</h6>,
    selector: (row) => row.Units,
    sortable: true,
    center: true,
  },
  {
    name: <h6>Price</h6>,
    selector: (row) => row.Price,
    sortable: true,
    center: true,
  },
];