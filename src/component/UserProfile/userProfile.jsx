import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './navbar/navbar';
import SideBar from './sidebar/sidebar';
import JobList from './jobList/jobList';
import './style/components/layout.scss';

class UserProfile extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter> 
            <div className="mainContainer">
                <NavBar />
                <div className="contentContainer">
                    <SideBar />
                    <JobList />
                </div>
            </div>
            </BrowserRouter> 
         );
    }
}
 
export default UserProfile;