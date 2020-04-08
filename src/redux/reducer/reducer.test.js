// import { types } from './../../actions/types';
import constants from '../constanst';
import searchReducer from './index';


let initState =  {
    searchData: [],
    pageNumber: 0,
    recentQuery: "",
    singleArticle: []
  }


describe('Search Reducer', () => {

    it('Should return default state', () => {
        const newState = searchReducer(undefined, {});
        expect(newState).toEqual(initState);
    });

    it('Should return new state if receiving type searchData', () => {
        const testData = [{ title: 'Test 1'}, { title: 'Test 2'}, { title: 'Test 3'}];
        const newState = searchReducer(undefined, {
            type: constants.search,
            payload: testData
        });
        expect(newState.searchData).toEqual(testData);
    });
    
    it('Should return new state if receiving type pageNumber', () => {
        const testData = 2;
        const newState = searchReducer(undefined, {
            type: constants.pageNumber,
            payload: testData
        });
        expect(newState.pageNumber).toEqual(testData);
    });

    it('Should return new state if receiving type recentQuery', () => {
        const testData = "testQuery";
        const newState = searchReducer(undefined, {
            type: constants.recentQuery,
            payload: testData
        });
        expect(newState.recentQuery).toEqual(testData);
    });

    it('Should return new state if receiving type searchArticle', () => {
        const testData = ["test1","test2"];
        const newState = searchReducer(undefined,{
            type: constants.searchArticle,
            payload: testData
        });
        expect(newState.singleArticle).toEqual(testData);
    });
    
    it('Should return new state if receiving type clearArticleData', () => {
        const testData = [];
        const newState = searchReducer(undefined,{
            type: constants.clearArticleData,
        });
        expect(newState.singleArticle).toEqual(testData);
    });

    it('Should return new state if receiving type clearSearchData', () => {
        const testData = [];
        const newState = searchReducer(undefined,{
            type: constants.clearSearchData,
        });
        expect(newState.searchData).toEqual(testData);
    });

});