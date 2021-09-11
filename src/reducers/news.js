import { 
    GET_DATA_WAITING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
} from "../constants/actionTypes";

// const initialState = {
//     categories: [], 
//     categoryTab: [], 
//     loading: true,
//     error: ""
// }

export default (news = {categories: [], categoryTab:[], loading: true, error: ""}, action) => {
    switch (action.type) {
        case GET_DATA_WAITING:
            news['loading'] = true;
            return news
        case GET_DATA_SUCCESS:
            // news['loading'] = false;
            news['categories'] = action.payload.categories;
            news['categoryTab'] = action.payload.categoryTab
            return news;
        case GET_DATA_FAILED:
            // news['loading']= false
            news['error']= action.error;
            return news
        default:
            return news;
    }
}
