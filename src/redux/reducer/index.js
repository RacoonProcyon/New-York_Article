import constants from '../constanst';

const initialState = {
  searchData: [],
  pageNumber: 0,
  recentQuery: "",
  singleArticle: []
}

function Search(state = initialState, action) {
  switch (action.type) {
    case constants.search:
      return {
        ...state,
        searchData: action.payload,
      };
    case constants.pageNumber:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case constants.recentQuery:
      return {
        ...state,
        recentQuery: action.payload,
      };

    case constants.searchArticle:
      return {
        ...state,
        singleArticle: action.payload,
      };
    case constants.clearSearchData:
      return {
        ...state,
        searchData: [],
      };
    case constants.clearArticleData:
      return {
        ...state,
        singleArticle: [],
      };
    default:
      return state;
  }
};
export default Search;



