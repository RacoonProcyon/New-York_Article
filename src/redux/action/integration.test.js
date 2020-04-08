import React from 'react'
import { shallow } from 'enzyme'
import { search, searchArticle } from './index.js'
import { store } from '../../store.js'
import { getArticle, getSearch } from '../../gateway'

jest.mock('../../gateway', () => ({
    getArticle: jest.fn(),
    getSearch: jest.fn()
}));

let mockResponse = { response: { docs: [1, 2] } }
describe('API call test', () => {
    beforeEach(function () {
        getArticle.mockImplementation(() => { return Promise.resolve(mockResponse) });
        getSearch.mockImplementation(() => { return Promise.resolve(mockResponse) });
    });


    test("Check if page number is set", () => {
        store.dispatch(search("test", 1))
            .then(() => {
                const newState = store.getState();
                expect(newState.searchReducer.pageNumber).toBe(1);
            })
    })

    test("Check if search data is set", () => {
        store.dispatch(search("test", 1))
            .then(() => {
                const newState = store.getState();
                expect(newState.searchReducer.searchData).toBe(mockResponse.response.docs);
            })
    })

    test("Check if single article is set", () => {
        store.dispatch(searchArticle("testId"))
            .then(() => {
                const newState = store.getState();
                expect(newState.searchReducer.singleArticle).toBe(mockResponse.response.docs);
            })
    })
})