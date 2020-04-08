import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SearchBox.css'
import { search } from '../../redux/action'
import { connect } from "react-redux";

export class SearchBox extends Component {
    constructor() {
        super()
        this.state = {
            query: "",
            lastCall: Date.now()
        }
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount = () => {
        this.setState({
            ...this.state,
            query: this.props.currentUrl
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentUrl!==this.props.currentUrl){
            if (this.props.currentUrl !== this.state.query) {
                this.setState({
                    ...this.state,
                    query: this.props.currentUrl
                })
            }
        }
    }

    handleChange(e, redirect, delay) {
        this.setState({
            ...this.state,
            query: e.target.value,
        }, () => {
            let timeoutID;
            this.props.history.push('/' + this.state.query)
            timeoutID = setTimeout(() => {
                this.redirect()
                this.saveToHistory()
            }, delay)
            if (timeoutID && Date.now() - this.state.lastCall < 500) {
                clearTimeout(timeoutID);
            }
            this.setState({
                ...this.state,
                lastCall: Date.now()
            })
        })
    }

    redirect = () => {
        this.props.search(this.state.query)
    }

    saveToHistory = () => {
        if (this.state.query) {
            let searchHistory = JSON.parse(localStorage.getItem("previouslySearched"))
            if (searchHistory) {
                searchHistory.push(this.state.query)
                localStorage.setItem("previouslySearched", JSON.stringify(searchHistory))
            } else {
                localStorage.setItem("previouslySearched", [this.state.query])
            }
        }
    }

    onLinkClick = () => {
        this.redirect()
        this.saveToHistory()
        this.props.history.push("/" + this.state.query)
    }

    onEnterPressed = (e) => {
        if (e.charCode === 13) {
            this.props.history.push('/' + this.state.query)
            this.redirect()
            this.saveToHistory()
        }
    }

    render() {
        return (
            <>
                <div id="searchBox" className="col-12 col-md-8">
                    <p className="m-0">Type search query term in here:</p>
                    <div className="input-group m-0">
                        <input className="form-control" id="queryString" type="text" autoFocus onChange={(e) => { this.handleChange(e, this.redirect, 800) }} onKeyPress={(e) => this.onEnterPressed(e)} value={this.state.query} placeholder="Enter article for search..." autoComplete="off" />
                        <div className="input-group-append">
                            <button onClick={() => { this.onLinkClick() }} className="btn btn-warning" ><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (query) => { dispatch(search(query)) }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)
