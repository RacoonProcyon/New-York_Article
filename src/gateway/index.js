import {API_ROOT,API} from '../redux/config';

export const getArticle = (query, pageN) => {
    console.log(query, pageN)
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    };
    return (
        fetch(API_ROOT + query + "&page=" + pageN, requestOptions)
            .then(res => res.json())
    )
}

export const getSearch = (id) => {
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    };
    return (
        fetch(API(id), requestOptions)
            .then(res => res.json())
    )

}