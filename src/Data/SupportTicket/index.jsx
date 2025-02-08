import React from 'react';
import user from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/4.jpg';
import user5 from '../../assets/images/user/5.jpg';
import user6 from '../../assets/images/user/6.jpg';
import user7 from '../../assets/images/user/7.jpg';
import user8 from '../../assets/images/user/8.jpg';
import user9 from '../../assets/images/user/9.jpg';
import user10 from '../../assets/images/user/10.jpg';
import user11 from '../../assets/images/user/11.png';
import user12 from '../../assets/images/user/12.png';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';

export const supportData = [
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'System Architect',
    salary: '$320,800',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 5421,
    email: 't.nixon@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Software Engineer',
    salary: '$132,000',
    office: 'London',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' style={{ width: '60%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 2558,
    email: 'b.greer@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 4804,
    email: 'b.williamson@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Pre-Sales Support',
    salary: '$106,450',
    office: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '20%' }}></div>
        </div>
      </div>
    ),
    extn: 8330,
    email: 'c.vance@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user7}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    salary: '$86,000',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '10%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user8}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' style={{ width: '90%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    salary: '$433,060',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user10}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Accountant',
    salary: '$162,700',
    office: 'Tokyo',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 5407,
    email: 'a.satou@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user11}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$372,000',
    office: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-info' role='progressbar' style={{ width: '40%' }}></div>
        </div>
      </div>
    ),
    extn: 4804,
    email: 'b.williamson@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user12}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Sales Assistant',
    salary: '$137,500',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-warning' style={{ width: '60%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 9608,
    email: 'h.chandler@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    salary: '$327,900',
    office: 'Tokyo',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 6200,
    email: 'r.davidson@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Javascript Developer',
    salary: '$205,500',
    office: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 2360,
    email: 'c.hurst@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Software Engineer',
    salary: '$103,600',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' role='progressbar' style={{ width: '35%' }}></div>
        </div>
      </div>
    ),
    extn: 1667,
    email: 's.frost@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Office Manager',
    salary: '$90,560',
    office: 'London',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-warning' role='progressbar' style={{ width: '55%' }}></div>
        </div>
      </div>
    ),
    extn: 3814,
    email: 'j.gaines@datatables.net',
  },

  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Support Lead',
    salary: '$342,000',
    office: 'Edinburgh',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-danger' role='progressbar' style={{ width: '93%' }}></div>
        </div>
      </div>
    ),
    extn: 9497,
    email: 'q.flynn@datatables.net',
  },
];

export const supportColumns = [
  {
    name: 'Image',
    selector: (row) => row['image'],
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
  {
    name: 'Position',
    selector: (row) => row['position'],
    sortable: true,
    center: false,
  },
  {
    name: 'Salary',
    selector: (row) => row['salary'],
    sortable: true,
    center: false,
  },
  {
    name: 'Office',
    selector: (row) => row['office'],
    sortable: true,
    center: false,
  },
  {
    name: 'Skill',
    selector: (row) => row['skill'],
    sortable: true,
    center: false,
  },
  {
    name: 'Extn',
    selector: (row) => row['extn'],
    sortable: true,
    center: false,
  },
  {
    name: 'Email',
    selector: (row) => row['email'],
    sortable: true,
    center: false,
  },
];

export const TicketData = [
  {
    id: 1,
    title: 'Order',
    num: '2563',
    class: 'progress-bar bg-primary',
  },
  {
    id: 2,
    title: 'Pending',
    num: '8943',
    class: 'progress-bar bg-secondary',
  },
  {
    id: 3,
    title: 'Running',
    num: '2500',
    class: 'progress-bar bg-warning',
  },
  {
    id: 4,
    title: 'Smooth',
    num: '2060',
    class: 'progress-bar bg-info',
  },
  {
    id: 5,
    title: 'Done',
    num: '5600',
    class: 'progress-bar bg-success',
  },
  {
    id: 6,
    title: 'Cancel',
    num: '2560',
    class: 'progress-bar bg-danger',
  },
];
