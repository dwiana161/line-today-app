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
      <Col xs={12} sm={6} md={6} lg={4} xl={4} className='my-2'>
        <Card>
          {item.urlToImage ? (
            <div 
              className='urlImage'
              style={{ backgroundImage: `url(${item.urlToImage})` }}
            />
          ) : (
            <div
              className='urlImage'
              style={{ backgroundImage: `url(${NewsDefaultImage})`}}
            />
          )}
        <Card.Body>
          <Card.Title>
            {item.title}
          </Card.Title>
          <Card.Text>
           {item.description}
          </Card.Text>
          <Button variant="primary" href={item.url} target="_blank">Go somewhere</Button>
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
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>
            Published: <Moment format='YYYY/MM/DD' date={item.publishedAt} />
          </small>
        </Card.Footer>
        </Card>
      </Col>
    )
}

const mapStateToProps = state => ({
  bookmarkItems: state.bookmarks.bookmarkItems
});

export default connect(
  mapStateToProps,
  { bookmarkItem, unBookmarkItem }
)(NewsItem);
