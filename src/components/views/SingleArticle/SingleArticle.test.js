import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import SingleArticle from './SingleArticle';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

const initialState = {
    searchData: [],
    pageNumber: 0,
    recentQuery: "",
    singleArticle: []
}
let middlewares = [thunk]
const mockStore = configureStore(middlewares)
let store = mockStore({ searchReducer: initialState })

it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Provider store={store}>
        <SingleArticle match={{ params: { id: "123" } }} />
    </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});