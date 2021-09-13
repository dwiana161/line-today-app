import React, { Fragment } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { bookmark, unBookmarkItem } from "../../actions/bookmarks";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import { titleSlicer } from "../../utils/helper";
import "../LineToday/Article.css";

const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks.bookmarkItems);
    console.log(bookmarks);
    const dispatch = useDispatch();

    const isBookmark = item => {
    if (bookmarks !== null) {
        // bookmarks = JSON.parse(bookmarks)
        return (
        bookmarks.findIndex(bookmark => bookmark.id === item.id) > -1
        )
    }
    }
    
    const bookmarkItem = item => {
    dispatch(bookmark(item));
    };

    const unBookmark = item => {
    dispatch(unBookmarkItem(item));
    };
    return (
      <div>
          <Row className='justify-content-md-center mb-4 pb-4'>
        <Card className='card'>
        <Col xs={12} sm={12}>
            <p className='h5  text-center'>
              {bookmarks.length === 0 ? (
                <Fragment className='fragment'>
                  You have {bookmarks.length} Bookmarks(s)
                </Fragment>
              ) : (
                <Fragment className='fragment'> {bookmarks.length} Bookmarks(s)</Fragment>
              )}
            </p>
          </Col>
       {bookmarks.map((item, i) => (
          <div>
          <a
            href={item.url.url}
            className="articles-item"
            key={i}
          >
            <img
              className="img w-full h-60 rounded"
              src={
                "https://obs.line-scdn.net/" +
                item.thumbnail.hash +
                "/w580"
              }
            />

            <Card.Body>
              <Card.Title>
            <p className="text-xl font-medium text-black">
              {titleSlicer(item.title)}
            </p>
            </Card.Title>
            <Card.Text>
            <p className="text-normal text-gray-400">
              {item.publisher}
            </p>
            </Card.Text>
            
            </Card.Body>
          </a>
          <Row className='justify-content-md-center mb-4 pb-4'>
          {isBookmark(item) ? (
            <FaBookmark
              className='float-right mt-2 icon-button'
              size='1.5em'
              onClick={() => unBookmark(item)}
            />
          ) : (
            <FaRegBookmark
              className='float-right mt-2 icon-button'
              size='1.5em'
              onClick={() => bookmarkItem(item)}
            />
          )}
        </Row>
        </div>
    ))}
      </Card>
      </Row>
      </div>
    )
}

export default Bookmarks