import React from 'react';
import { useSelector } from 'react-redux';
import NewsList from '../LineToday/NewsList';
import NewsItem from './NewsItem';

const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks.bookmarkItems)

    return (
        <NewsList>
            {
                bookmarks.map((bookmark) => {
                    return <NewsItem 
                            bookmark={bookmark}
                            />
                })
            }
        </NewsList>
    )
}

export default Bookmarks