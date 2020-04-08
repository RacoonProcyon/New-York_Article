// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import SearchBox from './SearchBox.js';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { MemoryRouter, Router } from 'react-router';
// import TestRenderer from 'react-test-renderer'
// import thunk from 'redux-thunk'
// import { createBrowserHistory } from 'history'

// const initialState = {
//     searchData: [],
//     pageNumber: 0,
//     recentQuery: "",
//     singleArticle: []
// }
// let middlewares = [thunk]
// const mockStore = configureStore(middlewares)
// let store = mockStore({ searchReducer: initialState })

// describe('Header Component Test', () => {
//     const component = mount(
//             <Provider store={store} > // to provide store for numeric connected components
//                 <SearchBox history={createBrowserHistory()} currentUrl="url"></SearchBox>
//             </Provider>
//     );

//     store.dispatch = jest.fn();

//     it("Check if component renders properly", () => {
//         expect(component.find('p').text()).toEqual('Type search query term in here:')
//     })

//     it('should dispatch an action on button click', () => {
//         let wrapper = TestRenderer.create(
//                 <Provider store={store}>
//                     <SearchBox history={createBrowserHistory()} currentUrl="url"></SearchBox>
//                 </Provider>
//         );
//         TestRenderer.act(() => {
//             wrapper.root.findByType('input')
//                 .props.onChange({ target: { value: 'election' } });
//         });
//         expect(store.dispatch).toHaveBeenCalledTimes(1);
//         TestRenderer.act(() => {
//             wrapper.root.findByType('button').props.onClick();
//           });
//           expect(store.dispatch).toHaveBeenCalledTimes(1);
          
//     });

// })
import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchBox } from './SearchBox.js';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Router } from 'react-router';
import TestRenderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

const initialState = {
    searchData: [],
    pageNumber: 0,
    recentQuery: "",
    singleArticle: []
}
let middlewares = [thunk]
const mockStore = configureStore(middlewares)
let store = mockStore({ searchReducer: initialState })
let search = jest.fn()
describe('Header Component Test', () => {
    const component = mount(
        <Provider store={store} > // to provide store for numeric connected components
            <SearchBox history={createBrowserHistory()} currentUrl="url"></SearchBox>
        </Provider>
    );

    store.dispatch = jest.fn();

    it("Check if component renders properly", () => {
        expect(component.find('p').text()).toEqual('Type search query term in here:')
    })

    it('should dispatch an action on button click', () => {
        let wrapper = TestRenderer.create(
            // <Provider store={store}>
            //     <SearchBox history={createBrowserHistory()} currentUrl="url"></SearchBox>
            // </Provider>
            <SearchBox search={search} currentUrl="url" history={createBrowserHistory()} />
        );
        TestRenderer.act(() => {
            wrapper.root.findByType('input')
                .props.onChange({ target: { value: 'election' } });
            // wrapper.root.instance.setState({})
        });
        expect(wrapper.root.instance.state.query).toBe("election");
        console.log("------------------------------------", wrapper.root.instance.state)
        expect(wrapper.root.findByType('input').props.value).toBe('election')
        TestRenderer.act(() => {
            wrapper.root.findByType('button').props.onClick();
        });
        expect(search).toHaveBeenCalledTimes(1);

    });

})