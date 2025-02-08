import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Form, Row } from 'reactstrap';
import { X } from 'react-feather';
import { Link } from 'react-router-dom';
import CustomContext from '../../_helper/Customizer';
import Leftbar from './Leftbar/index';
import RightHeader from './RightHeader/index';
import { MENUITEMS } from '../Sidebar/Menu';
import { Loading } from '../../Constant';
import SvgIcon from '../../Components/Common/Component/SvgIcon';

const Header = () => {
  const id = window.location.pathname.split('/').pop();
  const layout = id;
  const { toggleIcon } = useContext(CustomContext);
  // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState('');
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState(false);
  // eslint-disable-next-line
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const { customizer } = useContext(CustomContext);

  const layout_type = customizer.settings.layout_type;
  // const layout_versions = customizer.color.mix_background_layout;

  // const layout_version = localStorage.getItem('layout_version') || (layout_versions && localStorage.setItem('layout_version', layout_versions));

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setsearchValue('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix();
    const items = [];

    mainmenu.map((menuItems) => {
      menuItems.Items.filter((mItems) => {
        if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
          items.push(mItems);
        }
        if (!mItems.children) return false;
        mItems.children.filter((subItems) => {
          if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
            subItems.icon = mItems.icon;
            items.push(subItems);
          }
          if (!subItems.children) return false;
          subItems.children.filter((suSubItems) => {
            if (suSubItems.title.toLowerCase().includes(keyword)) {
              suSubItems.icon = mItems.icon;
              items.push(suSubItems);
            }
            return suSubItems;
          });
          return subItems;
        });
        checkSearchResultEmpty(items);
        setsearchValue(items);
        return mItems;
      });
      return menuItems;
    });
  };

  const checkSearchResultEmpty = (items) => {
    if (!items.length) {
      setSearchResultEmpty(true);
      document.querySelector('.empty-menu').classList.add('is-open');
    } else {
      setSearchResultEmpty(false);
      document.querySelector('.empty-menu').classList.remove('is-open');
    }
  };

  const addFix = () => {
    setSearchResult(true);
    document.querySelector('.Typeahead-menu').classList.add('is-open');
    document.body.classList.add(`${layout_type}`);
    // if (document.body.classList.value !== 'box-layout') {
    //   document.body.classList.add('offcanvas');
    // }
  };

  const removeFix = () => {
    setSearchResult(false);
    setsearchValue('');
    document.querySelector('.Typeahead-menu').classList.remove('is-open');
    document.body.classList.add(`${layout_type}`);
    document.body.classList.remove('offcanvas');
  };

  return (
    <Fragment>
      <div className={`page-header ${toggleIcon ? 'close_icon' : ''}`}>
        <Row className='header-wrapper m-0'>
          <Form className='form-inline search-full col' action='#' method='get'>
            <div className='form-group w-100'>
              <div className='Typeahead Typeahead--twitterUsers'>
                <div className='u-posRelative'>
                  <input className='Typeahead-input form-control-plaintext w-100' id='demo-input' type='search' placeholder='Search Cuba ..' defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                  <div className='spinner-border Typeahead-spinner' role='status'>
                    <span className='sr-only'>{Loading}</span>
                  </div>
                  <X className='close-search' onClick={() => document.querySelector('.search-full').classList.remove('open')} />
                </div>
                <div className='Typeahead-menu' id='search-outer'>
                  <div className='header-search-suggestion custom-scrollbar'>
                    {searchValue
                      ? searchValue.map((data, index) => {
                          return (
                            <div className='ProfileCard u-cf' key={index}>
                              <div className='ProfileCard-details'>
                                <div className='ProfileCard-realName'>
                                  <Link to={data.path + '/' + layout} className='realname  w-100 d-flex justify-content-start gap-2' onClick={removeFix}>
                                    <SvgIcon style={{ width: '16px', height: '16px' }} className='stroke-icon' iconId={`stroke-${data.icon}`} />
                                    <SvgIcon style={{ width: '16px', height: '16px' }} className='fill-icon' iconId={`fill-${data.icon}`} />
                                    {data.title}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ''}
                  </div>
                </div>
                <div className='Typeahead-menu empty-menu'>
                  <div className='tt-dataset tt-dataset-0'>
                    <div className='EmptyMessage'>{'Opps!! There are no result found.'}</div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <Leftbar />
          <RightHeader />
        </Row>
      </div>
    </Fragment>
  );
};

export default Header;
