// import App from './App';

// import React from 'react'
// import {shallow} from 'enzyme'
// import { shallowToJson } from 'enzyme-to-json';


// describe('App Component Test',()=>{
//     const component = shallow(<App/>)

//     it("Check if component renders properly", ()=>{
//         expect(shallowToJson(component)).toMatchSnapshot();;
//     })
// })


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme';
import { Route, Switch } from "react-router-dom";
import { MemoryRouter,Router } from 'react-router';
import { createMemoryHistory, createBrowserHistory } from "history";
import SingleArticle from './components/views/SingleArticle/SingleArticle'

import Home from './components/views/Home';
import Results from './components/Sections/Results/Results'
import App from './App';

const initialState = {
    searchData: [],
    pageNumber: 0,
    recentQuery: "",
    singleArticle: []
}
let middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store;
store = mockStore({searchReducer:initialState})

test('valid path should redirect to home', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Provider store={store} > // to provide store for numeric connected components
                <Route path="/" render={() => <Home />} />
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
});

test('valid path should redirect', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/test']} initialIndex={0}>
            <Provider store={store} > // to provide store for numeric connected components
                <Route path="/:query" render={() => <Results match={{params:{query:"test"}}}/>} />
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Results)).toHaveLength(1);
});

test('valid path should redirect', () => {
    // let history = createBrowserHistory()
    const wrapper = mount(
        <MemoryRouter initialEntries={['/article/123']} initialIndex={0} >
            <Provider store={store} > // to provide store for numeric connected components
                <Route path="/article/:id" render={() => <SingleArticle match={{params:{id:123}}} />} />
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(SingleArticle)).toHaveLength(1);
});
