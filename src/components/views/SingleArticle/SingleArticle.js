import React, { Component } from 'react'
import Header from '../../Sections/Header.js'
import { connect } from "react-redux";
import { searchArticle,clearArticleData } from '../../../redux/action'
import {Link } from 'react-router-dom'

class SingleArticle extends Component {
    constructor() {
        super()
        this.state = {
            headLine: "HeadLine",
            Date: "DATE",
            leadParagraph: "Details",
            webUrl : "#"
        }
    }

    componentDidMount = () => {
        this.props.searchArticle(this.props.match.params.id)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.singleArticle.length !== this.props.singleArticle.length) {
            this.setState({
                ...this.state,
                headLine: this.props.singleArticle[0].headline.main,
                Date: this.props.singleArticle[0].pub_date.slice(0, 10),
                leadParagraph: this.props.singleArticle[0].lead_paragraph,
                webUrl : this.props.singleArticle[0].web_url
            })
        }
    }

    componentWillUnmount=()=>{
        this.props.clearArticleData()
    }

    render() {
        return (
            <div className='d-flex flex-column align-items-center'>
                <Header />
                <div className="mt-5 col-12 col-md-8" >
                    {this.props.query?<Link to={"/"+this.props.query}>Go to result page</Link>:null}
                    <h3 className='mt-1' style={{ fontWeight: '700' }}>{this.state.headLine}</h3>
                    <span className='mt-2'>{this.state.Date}</span>
                    <p className='mt-3'>{this.state.leadParagraph}</p>
                    <a target="_blank" href={this.state.webUrl} >Read the full article</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singleArticle: state.searchReducer.singleArticle,
        query: state.searchReducer.recentQuery,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchArticle: (id) => dispatch(searchArticle(id)),
        clearArticleData : ()=>dispatch(clearArticleData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle)
