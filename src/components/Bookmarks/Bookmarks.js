import React from 'react';
import { useSelector } from 'react-redux';
import Articles from '../LineToday/Articles';
import NewsList from '../LineToday/NewsList';
import { unBookmarkItem } from '../../actions/bookmarks';
import NewsItem from './NewsItem';

const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks.bookmarkItems)

    const onDeleteBK = ({bookmarkId}) => {
        unBookmarkItem(bookmarkId);
    }

    return (
        <NewsList>
            {
                bookmarks.map((bookmark, i) => {
                    return <NewsItem 
                            bookmark={bookmark}
                            />
                })
            }
        </NewsList>
    )
}

export default Bookmarks