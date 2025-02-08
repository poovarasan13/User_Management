import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import { CHECKALL, DeliveryComplete, DeliveryProcessing, Notification, OrderComplete, TicketsGenerated } from '../../../Constant';

const Notificationbar = () => {
  const [notificationDropDown, setNotificationDropDown] = useState(false);

  return (
    <li className='onhover-dropdown'>
      <div className='notification-box' onClick={() => setNotificationDropDown(!notificationDropDown)}>
        <SvgIcon iconId='notification' />
        <span className='badge rounded-pill badge-secondary'>4</span>
      </div>
      <div className={`notification-dropdown onhover-show-div ${notificationDropDown ? 'active' : ''}`}>
        <h6 className='f-18 mb-0 dropdown-title'>{Notification}</h6>
        <ul>
          <li className='b-l-primary border-4'>
            <p>
              {DeliveryProcessing} <span className='font-danger'>{'10 min.'}</span>
            </p>
          </li>
          <li className='b-l-success border-4'>
            <p>
              {OrderComplete}
              <span className='font-success'>{'1 hr'}</span>
            </p>
          </li>
          <li className='b-l-info border-4'>
            <p>
              {TicketsGenerated}
              <span className='font-info'>{'3 hr'}</span>
            </p>
          </li>
          <li className='b-l-warning border-4'>
            <p>
              {DeliveryComplete}
              <span className='font-warning'>{'6 hr'}</span>
            </p>
          </li>
          <li>
            <a className='f-w-700' href='#javascript'>
              {CHECKALL}
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Notificationbar;
