import React, { Component } from 'react';
import Header from './../../Sections/Header.js'
import SearchBox from './../../Sections/SearchBox.js'
import PreviouslySearched from '../../Sections/PreviouslySearched/PreviouslySearched.js'

class Home extends Component {

    componentDidMount(){
        if(localStorage.getItem('previouslySearched')){
            console.log(localStorage.getItem('previouslySearched'));
        }else{
            localStorage.setItem('previouslySearched',JSON.stringify([]))
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="d-md-flex flex-row justify-content-center mt-4">
                    <SearchBox currentUrl="" history={this.props.history}/>
                </div>
                <div className="d-md-flex flex-row justify-content-center">
                    <PreviouslySearched/>

                </div>
                
            </div>
        )
    }
}
export default Home;