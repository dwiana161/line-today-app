import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { bookmarkItem, unBookmarkItem } from '../../actions/bookmarks';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import NewsDefaultImage from './obi-onyeador-UEQvUtRs224-unsplash.jpg';

const NewsItem = ({ item, theme, bookmarkItem, unBookmarkItem, bookmarkItems }) => {
  
  const isBookmark = item => {
    if (bookmarkItems !== null) {
      return (
        bookmarkItems.findIndex(bookmark => bookmark.title === item.title) > -1
      );
    }
  };

  const bookmark = item => {
    bookmarkItem(item);
  };

  const unBookmark = item => {
    unBookmarkItem(item);
  }

  return (
    <>
      {isBookmark(item) ? (
            <FaBookmark
              className="float-right mt-2 icon-button"
              size="1.5em"
              onClick={() => unBookmark(item)}
            />
          ) : (
            <FaRegBookmark
              className="float-right mt-2 icon-button"
              size="1.5em"
              onClick={() => bookmark(item)}
            />
          )
      }
      </>
  );
}


const mapStateToProps = state => ({
  bookmarkItems: state.bookmarks.bookmarkItems
});

export default connect(
  mapStateToProps,
  { bookmarkItem, unBookmarkItem }
)(NewsItem);
