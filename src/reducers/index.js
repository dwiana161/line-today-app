import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import bookmarks from './bookmarks';
import news from './news';
import history from "../utils/history";

export const reducers = combineReducers({
    router: connectRouter(history), 
    news,
    bookmarks 
});