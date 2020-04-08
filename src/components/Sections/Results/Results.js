import React, { Component } from 'react'
import SearchBox from '../SearchBox.js'
import Header from '../Header.js'
import Articles from './Articles/index'
import PreviouslySearched from '../PreviouslySearched/PreviouslySearched.js'
import './Results.css'
import { search } from '../../../redux/action'
import { connect } from 'react-redux';

export class Results extends Component {
    componentDidMount = () => {
        this.props.search(this.props.match.params.query)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="d-flex flex-column align-items-center mt-4">
                    <SearchBox currentUrl={this.props.match.params.query} history={this.props.history}/>
                    <Articles />
                    <PreviouslySearched/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => dispatch(search(query)),
    }
}

export default connect(null, mapDispatchToProps)(Results)
