import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BookmarkApi } from '../../api';
import Context from './index';

const BookmarkProvider = (props) => {
  const [bookmark, setBookmark] = useState([]);
  const [mybookmarkData, setMybookmarkData] = useState([]);
  const [activeTabss, setActiveTabss] = useState('1');
  const [editrow, setEditrow] = useState({});
  const [editimgurl, setEditImgUrl] = useState('');
  const [editModal, seteditModal] = useState(false);


  useEffect(() => {
    const getBookmark = async () => {
      try {
        await axios.get(BookmarkApi).then((resp) => {
          setBookmark(resp.data);
        });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getBookmark();
  }, [setBookmark]);

  const addNewBookmark = (bookmarkData, img_url) => {
    const bookmarkTemp = {
      id: bookmark.length + 1,
      fillStar: false,
      image: img_url,
      title: bookmarkData.title,
      website_url: bookmarkData.url,
      desc: bookmarkData.desc,
      collection: bookmarkData.collection,
    };
    setBookmark([...bookmark, bookmarkTemp]);

  };

  const updatebookmark = (id, updatedData, img_url) => {
    const bookmarkTemp = {
      id: id,
      fillStar: updatedData.fillStar,
      image: img_url,
      title: updatedData.title,
      website_url: updatedData.url,
      desc: updatedData.desc,
      collection: updatedData.collection,
    };
    setBookmark(bookmark.map((item) => (item.id === id ? bookmarkTemp : item)));
  };

  const removebookmark = (id) => {
    setBookmark(bookmark.filter((data) => data.id !== id));
  };

  const mybookmark = (mybookmarkdata) => {
    setMybookmarkData((prev) => [...prev, mybookmarkdata]);
  };

  const updateMybookmark = (id, updateMydata, img_url) => {
    const bookmarkTemp = {
      id: id,
      fillStar: updateMydata.fillStar,
      image: img_url,
      title: updateMydata.title,
      website_url: updateMydata.url,
      desc: updateMydata.desc,
      collection: updateMydata.collection,
    };
    setMybookmarkData(
      mybookmarkData.map((item) => (item.id === id ? bookmarkTemp : item))
    );
  };



  const removemybookmark = (id) => {
    setMybookmarkData(mybookmarkData.filter((data) => data.id !== id));
  };

  return (
    <Context.Provider
      value={{
        ...props,
        bookmark,
        mybookmarkData,
        activeTabss,
        editrow,
        editimgurl,
        editModal,
        seteditModal: seteditModal,
        setEditrow: setEditrow,
        setActiveTabss: setActiveTabss,
        setEditImgUrl: setEditImgUrl,
        mybookmark: mybookmark,
        updatebookmark: updatebookmark,
        removebookmark: removebookmark,
        addNewBookmark: addNewBookmark,
        updateMybookmark: updateMybookmark,
        removemybookmark: removemybookmark,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default BookmarkProvider;
