import { BOOKMARK_ITEM, UNBOOKMARK_ITEM, GET_BOOKMARK_ITEMS } from "../constants/actionTypes";
import { titleSlicer } from "../utils/helper";

const initialState = {
    bookmarkItems: []
};

export default ( state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BOOKMARK_ITEM:
            return { 
                ...state, 
                bookmarkItems: [payload, ...state.bookmarkItems]
            };
        case UNBOOKMARK_ITEM:
            return {
                ...state,
                bookmarkItems: state.bookmarkItems.filter(
                    item => item.id !== payload.id
                )
            };
        case GET_BOOKMARK_ITEMS:
            // bookmarks["bookmarkItems"] = action.payload
            // return bookmarks;
            return {
                ...state,
                bookmarkItems: payload
            };
            
            default:
                return state;
    }
};