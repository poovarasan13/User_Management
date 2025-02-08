import React, { useContext, useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';
import CustomizerContext from '../../../_helper/Customizer';

const MoonLight = () => {
  const { addMixBackgroundLayout } = useContext(CustomizerContext);
  const [moonlight, setMoonlight] = useState(false);

  const MoonlightToggle = (light) => {
    if (light) {
      addMixBackgroundLayout('light-only');
      document.body.className = 'light-only';
      setMoonlight(!light);
    } else {
      addMixBackgroundLayout('dark-only');
      document.body.className = 'dark-only';
      setMoonlight(!light);
    }
  };

  return (
    <li>
      <div className={`mode ${moonlight && 'active'}`} onClick={() => MoonlightToggle(moonlight)}>
        <SvgIcon iconId={'moon'} />
      </div>
    </li>
  );
};

export default MoonLight;
