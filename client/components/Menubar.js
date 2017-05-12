import React from "react";
import Menu from './../data/menu';
import { NavLink } from 'react-router-dom';
export default class Menubar extends React.Component {
    constructor(props) {
            super(props)
        }
        render() {
          const MenuData = Menu.menu;
          const MenuComponents = MenuData.map(navlink =>
            <li key={navlink.id} className="">
              <NavLink exact to={navlink.url} activeClassName="active"><i className={navlink.icon}></i></NavLink>
            </li>
          )
            return (
              <nav className="navbar navbar-pink navbar-fixed-bottom">
              <div className="nav-table">
                <ul className="nav navbar-nav">
                  {MenuComponents}
                </ul>
              </div>
              </nav>
            );
        }
}
