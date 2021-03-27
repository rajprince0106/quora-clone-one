import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
import { QuestionAnswerRounded } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */
const Header = () =>{
    const location = window.location.href;

    return (
        <div className="Header">
            <div className="Header__left">
                 <div className="left__logo">
                     <img src={"assets/images/quora.png"} alt="" className="Logo" height="100px" width="100px"  />
                 </div>
                 <div className={`left__Home ${
                     location === "http://localhost:3002/" ? "current-location" : null
                      }`}>
                     <HomeIcon />
                     <h4>Home</h4>
                 </div>
                 <div className="left__notifications">
                     <NotificationsIcon />
                     <h4>Notifications</h4>
                 </div>
            </div>
            <div className="Header__center">
                  <input type="text" placeholder="Search" />
                  <SearchIcon />
            </div>
            <div className="Header__right">
                 <div className="right__user">
                     <Avatar src="" alt="User Profile" />
                 </div>
                 <LanguageIcon />
                 <button>Add Question</button>
            </div>
        </div>
    )
        
};

export default Header;