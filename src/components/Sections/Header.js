import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
                <header id="header" className='container-fluid px-2 py-3 d-flex flex-row justify-content-center align-items-center'>
                    <p className='text-center text-white my-auto'>"The New York Times" article search application</p>
                </header>
        )
    }
}

export default Header
