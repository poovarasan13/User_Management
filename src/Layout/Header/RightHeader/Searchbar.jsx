import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';

const Searchbar = () => {
  const [searchresponsive, setSearchresponsive] = useState(false);
  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive);
      document.querySelector('.search-full').classList.add('open');
      document.querySelector('.more_lang').classList.remove('active');
    } else {
      setSearchresponsive(!searchresponsive);
      document.querySelector('.search-full').classList.remove('open');
    }
  };

  return (
    <li>
      <span className='header-search'>
        <SvgIcon iconId='search' onClick={() => SeacrhResposive(searchresponsive)} />
      </span>
    </li>
  );
};

export default Searchbar;
