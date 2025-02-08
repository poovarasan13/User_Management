import { Earnings, Products, Messages, NewUser } from '../../Constant';
import { Database, ShoppingBag, MessageCircle, UserPlus } from 'react-feather';
export const NumbersUpData = [
  {
    color: 'bg-primary',
    icon: <Database className='icon-bg' />,
    heading: Earnings,
    amount: 6659,
  },
  {
    color: 'bg-secondary',
    icon: <ShoppingBag className='icon-bg' />,
    heading: Products,
    amount: 9856,
  },
  {
    color: 'bg-primary',
    icon: <MessageCircle className='icon-bg' />,
    heading: Messages,
    amount: 893,
  },
  {
    color: 'bg-primary',
    icon: <UserPlus className='icon-bg' />,
    heading: NewUser,
    amount: 4563,
  },
];
