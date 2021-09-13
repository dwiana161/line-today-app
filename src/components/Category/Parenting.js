import React from 'react'
import { useSelector } from 'react-redux';
import Articles from '../LineToday/Articles';
import NewsList from '../LineToday/NewsList';
import { bookmark } from '../../actions/bookmarks';

const Parenting = () => {
    const news = useSelector((state) => state.news)

    const addBookmark = (article) => {
        bookmark(article);
    }

    return (
        <NewsList>
             {
                news.categories[15].articleCategory.map((article, i) => {
                    if (article.type !== 56 && article.type !== 86 && 
                        article.type !== 57 && article.sections[0].type !== 12){
                        return <Articles 
                                sections={article.sections} 
                                title={article.title} 
                                key={i}
                                // onHandleBookmark={addBookmark}
                                // bookmark={article}
                                />     
                    }
                    
                })
            }
        </NewsList>
    )
}

export default Parenting
