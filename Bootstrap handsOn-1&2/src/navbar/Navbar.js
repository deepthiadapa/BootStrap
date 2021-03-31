import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component{
    
    render(){
        return(
            
            
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" className="navbar-brand"> hTrack</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="item">
                                <a href="#" className="nav-link"><i class="fa fa-fw fa-home"></i>Home</a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav-link">Products</a>
                            </li>
                            <li className="item">
                                <a href="#" className="nav-link">Goals</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            <div className="d-flex">
                
                <div className=" benefits mr-auto p-2 w-75">
                    <h1>Benefits</h1>
                    <li>Set Goals</li>
                    <li>Receive customized notifications</li>
                    <li>Get tips from experts and coaches</li>
                </div>

                <div className=" login p-2 w-25">
                    <h1>Login</h1>
                </div>
            </div>
            </div>
            
        )  
    }
}
export default Navbar;