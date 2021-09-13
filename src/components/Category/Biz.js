import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Articles from '../LineToday/Articles';
import NewsList from '../LineToday/NewsList';
import { bookmark } from '../../actions/bookmarks';

const Biz = () => {
    const news = useSelector((state) => state.news)
    const dispatch = useDispatch();

    const addBookmark = (article) => {
        dispatch(bookmark(article));
    }

    return (
        <NewsList>
            {
                news.categories[10].articleCategory.map((article, i) => {
                    if (article.type !== 56 && article.type !==86 &&
                        article.type !==57 && article.sections[0].type !==12){
                            return <Articles 
                                    sections={article.sections} 
                                    title={article.title} 
                                    key={i}
                                    bookmarks={article}
                                    />
                        }
                })
            }
        </NewsList>
    )
}

export default Biz
