import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {search} from '../../../../redux/action'
class index extends Component {

    constructor(){
        super()
        this.state = {
            articlesList : []
        }
    }

    clickPrevious=(e)=>{
        e.preventDefault()
        if(this.props.pageNumber>0){
            this.props.search(this.props.recentQuery,this.props.pageNumber-1)
        }
    }

    clickNext=(e)=>{
        e.preventDefault()
        this.props.search(this.props.recentQuery,this.props.pageNumber+1)
    }

    componentDidMount = ()=>{
        this.setState({
            ...this.state,
            articlesList : this.props.searchData
        })
    }

    componentDidUpdate = (prevProps)=>{
        if(this.props.searchData !== prevProps.searchData){
            this.setState({
                ...this.state,
                articlesList:this.props.searchData
            })
        }
    }

    showList = ()=>{
        return (
            <>
            {this.state.articlesList.map((data,i)=>(
                <Link to={'/article/'+data.uri.slice(data.uri.lastIndexOf("/")+1, data.uri.length)} key={i}><li className="list-group-item">{data.headline.main}</li></Link>
            )
            )}
            </>
        )
    }

    render() {
        return (
            <article id="articles" className="col-12 col-md-8 mt-3">
                <p className="m-0">Results:</p>
                <ul className="list-group">
                    {this.state.articlesList.length?this.showList():null}
                   </ul>
                <a href='/' onClick={(e)=>this.clickPrevious(e)}>Prev</a> 
                <a className='float-right' href='/' onClick={(e)=>this.clickNext(e)}>Next</a> 
            </article>
        )
    }
}

const mapStateToProps = (state)=>{
   return {
       searchData: state.searchReducer.searchData,
       pageNumber: state.searchReducer.pageNumber,
       recentQuery: state.searchReducer.recentQuery
   }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        search : (query,pageNumber)=>{dispatch(search(query,pageNumber))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(index)
