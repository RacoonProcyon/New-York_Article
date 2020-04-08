import { API_ROOT, API } from '../config';
import constants from '../constanst';
import { getArticle,getSearch } from '../../gateway';


export const search = (query, pageNumber) => {
    let response, pageN;
    if (pageNumber) {
        pageN = pageNumber
    } else {
        pageN = 0
    }
    return (dispatch) => {
       return getArticle(query, pageN)
            .then((res) => {
                response = res.response.docs
            })
            .then(() => {
                dispatch({
                    type: constants.search,
                    payload: response
                })
                dispatch({
                    type: constants.pageNumber,
                    payload: pageN
                })
                dispatch({
                    type: constants.recentQuery,
                    payload: query
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const searchArticle = (id) => {
    let response
    return (dispatch) => {
       return getSearch(id)
            .then((res) => {
                response = res.response.docs
            })
            .then(() => {
                dispatch({
                    type: constants.searchArticle,
                    payload: response
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const clearArticleData = () => {
    return (dispatch) => {
        dispatch({
            type: constants.clearArticleData,
        })
    }
}


export const clearSearchData = () => {
    return (dispatch) => {
        dispatch({
            type: constants.clearSearchData,
        })
    }
}