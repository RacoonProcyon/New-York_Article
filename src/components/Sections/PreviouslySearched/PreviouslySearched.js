import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {search} from '../../../redux/action'
import {  connect} from "react-redux";

class PreviouslySearched extends Component {

    callAPI = (query)=>{
        
        this.props.search(query)
    }

    showList = ()=>{
        if(localStorage.getItem('previouslySearched')){
            let pastSearches = JSON.parse(localStorage.getItem('previouslySearched')).filter((val,i,arr)=>(arr.indexOf(val)===i))
           return localStorage.getItem('previouslySearched')?pastSearches.map((value,index)=>{
                return (
                    <Link key={index} className="dropdown-item" to={"/"+value} onClick={()=>{this.callAPI(value)}}>{value}</Link>
                    )
                    }):null
        }
    }

    render() {
        

        return (
                <div id='dropdown' className="dropdown px-3 col-12 col-md-8">
                    <button className="btn btn-secondary dropdown-toggle btn-block mt-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        previously searched
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{maxHeight:'500px',overflow:'scroll'}}>
                        {
                           this.showList()
                        }
                    </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        search : (query)=>{dispatch(search(query))}
    }
}

export default connect(null,mapDispatchToProps)(PreviouslySearched)
