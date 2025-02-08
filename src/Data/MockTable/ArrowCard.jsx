import { ArrowDown, ArrowUp } from 'react-feather';
import { Month, Sale, Today, Week, Year } from '../../Constant';

export const ArrowCardData = [
  {
    heading: Sale,
    time: Today,
    arrow: <ArrowDown className='font-primary' />,
    val: 25698,
    difference: '-$2658(36%)',
  },
  {
    heading: Sale,
    time: Month,
    arrow: <ArrowUp className='font-primary' />,
    val: 6954,
    difference: '+$369(15%)',
  },
  {
    heading: Sale,
    time: Week,
    arrow: <ArrowUp className='font-primary' />,
    val: 63147,
    difference: '+$69(65%)',
  },
  {
    heading: Sale,
    time: Year,
    arrow: <ArrowUp className='font-primary' />,
    val: 963198,
    difference: '+$3654(90%)',
  },
];
