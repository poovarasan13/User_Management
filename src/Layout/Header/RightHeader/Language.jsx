import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Deutsch, English, Español, Français, Português, 简体中文 } from '../../../Constant';

const Language = () => {
  const [langdropdown, setLangdropdown] = useState(false);
  const [selected, setSelected] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };
  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language);
    } else {
      setLangdropdown(!language);
    }
  };

  return (
    <li className='language-nav'>
      <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
        <div className='current_lang'>
          <div className='lang' onClick={() => LanguageSelection(langdropdown)}>
            <i className={`flag-icon flag-icon-${selected === 'en' ? 'us' : selected === 'du' ? 'de' : selected}`}></i>
            <span className='lang-txt'>{selected}</span>
          </div>
        </div>
        <div className={`more_lang ${langdropdown ? 'active' : ''}`}>
          <div className='lang' onClick={() => changeLanguage('en')}>
            <i className='flag-icon flag-icon-us'></i>
            <span className='lang-txt'>
              {English}
              <span> {'(US)'}</span>
            </span>
          </div>
          <div className='lang' onClick={() => changeLanguage('du')}>
            <i className='flag-icon flag-icon-de'></i>
            <span className='lang-txt'>{Deutsch}</span>
          </div>
          <div className='lang' onClick={() => changeLanguage('es')}>
            <i className='flag-icon flag-icon-es'></i>
            <span className='lang-txt'>{Español}</span>
          </div>
          <div className='lang' onClick={() => changeLanguage('fr')}>
            <i className='flag-icon flag-icon-fr'></i>
            <span className='lang-txt'>{Français}</span>
          </div>
          <div className='lang' onClick={() => changeLanguage('pt')}>
            <i className='flag-icon flag-icon-pt'></i>
            <span className='lang-txt'>
              {Português}
              <span> {'(BR)'}</span>
            </span>
          </div>
          <div className='lang' onClick={() => changeLanguage('cn')}>
            <i className='flag-icon flag-icon-cn'></i>
            <span className='lang-txt'>{简体中文}</span>
          </div>
          <div className='lang' onClick={() => changeLanguage('ae')}>
            <i className='flag-icon flag-icon-ae'></i>
            <span className='lang-txt'>
              {'لعربية'}
              <span> {'(ae)'}</span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Language;
