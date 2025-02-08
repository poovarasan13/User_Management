import { DollarSign, Layers, ShoppingBag, ShoppingCart } from 'react-feather';
import { Cancel, Done, New, Pending } from '../../Constant';

export const WidgetJoinsData = [
  {
    rate: '68%',
    arrow: 'fa-angle-up',
    heading: New,
    value: 6981,
    icon: <ShoppingBag className='font-primary float-start ms-2' />,
  },
  {
    rate: '12%',
    arrow: 'fa-angle-down',
    heading: Pending,
    value: 783,
    icon: <Layers className='font-primary float-start ms-2' />,
  },
  {
    rate: '68%',
    arrow: 'fa-angle-up',
    heading: Done,
    value: 3674,
    icon: <ShoppingCart className='font-primary float-start ms-2' />,
  },
  {
    rate: '68%',
    arrow: 'fa-angle-up',
    heading: Cancel,
    value: 69,
    icon: <DollarSign className='font-primary float-start ms-2' />,
  },
];
