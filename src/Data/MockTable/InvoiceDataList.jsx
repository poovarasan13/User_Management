import React from 'react';

export const InvoiceListData = [
  {
    Item_Description: <td>
      <label>Lorem Ipsum</label>
      <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </td>,
    Hours: <p className="itemtext digits">5</p>,
    Rate: <p className="itemtext digits">$75</p>,
    Sub_total: <p className="itemtext digits">$375.00</p>
  },
  {
    Item_Description: <td>
      <label>Lorem Ipsum</label>
      <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </td>,
    Hours: <p className="itemtext digits">10</p>,
    Rate: <p className="itemtext digits">$75</p>,
    Sub_total: <p className="itemtext digits">$750.00</p>
  },
  {
    Item_Description: <td>
      <label>Lorem Ipsum</label>
      <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </td>,
    Hours: <p className="itemtext digits">3</p>,
    Rate: <p className="itemtext digits">$75</p>,
    Sub_total: <p className="itemtext digits">$225.00</p>
  },
  {
    Item_Description: <td>
      <label>Lorem Ipsum</label>
      <p className="m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </td>,
    Hours: <p className="itemtext digits">10</p>,
    Rate: <p className="itemtext digits">$75</p>,
    Sub_total: <p className="itemtext digits">$750.00</p>
  },
  {
    Hours: "HST",
    Rate: "13%",
    Sub_total: "$419.25"
  },
  {
    Rate: <td className="Rate">
      <h6 className="mb-0 p-2">Total</h6>
    </td>,
    Sub_total: <td className="payment digits">
      <h6 className="mb-0 p-2">$3,644.25</h6>
    </td>
  },
];
export const InvoiceColumns = [
  {
    name: <h6>Item Description</h6>,
    selector: 'Item_Description',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <h6>Hours</h6>,
    selector: 'Hours',
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <h6>Rate</h6>,
    selector: 'Rate',
    sortable: true,
    center: true,
  },
  {
    name: <h6>Sub-total</h6>,
    selector: 'Sub_total',
    sortable: true,
    center: true,
  },
];