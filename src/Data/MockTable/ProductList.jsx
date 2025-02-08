import React from 'react';
import product1 from '../../assets/images/ecommerce/product-table-1.png';
import product2 from '../../assets/images/ecommerce/product-table-2.png';
import product3 from '../../assets/images/ecommerce/product-table-3.png';
import product4 from '../../assets/images/ecommerce/product-table-4.png';
import product5 from '../../assets/images/ecommerce/product-table-5.png';
import product6 from '../../assets/images/ecommerce/product-table-6.png';

export const productData = [
  {
    image: <img src={product1} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Red Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
        </span>&nbsp;&nbsp;
        <span>
          <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
        </span>
      </div>

  },
  {
    image: <img src={product2} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Brown Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
        </span>&nbsp;&nbsp;
        <span>
          <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
        </span>
      </div>
  },
  {
    image: <img src={product3} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Yellow Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  },
  {
    image: <img src={product4} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Green Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$20',
    stock: <div className='font-primary'>Low Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  },
  {
    image: <img src={product5} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Pink Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$30',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  },
  {
    image: <img src={product6} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Blue Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$40',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  },
  {
    image: <img src={product1} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Grey Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  },
  {
    image: <img src={product2} style={{ width: 100, height: 100 }} alt="" />,
    Details: <div>
      <h6>Black Lipstick</h6><br />
      Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Delete</button>
      </span>&nbsp;&nbsp;
      <span>
        <button style={{ width: 80, fontSize: 16, padding: 5 }} className="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Edit </button>
      </span>
    </div>
  }
];
export const productColumns = [
  {
    name: 'Image',
    selector: 'image',
    sortable: true,
    center: true,
  },
  {
    name: 'Details',
    selector: 'Details',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    center: true,
  },
  {
    name: 'Stock',
    selector: 'stock',
    sortable: true,
    center: true,
  },
  {
    name: 'Start_date',
    selector: 'start_date',
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: 'action',
    sortable: true,
    center: true,
  },
];