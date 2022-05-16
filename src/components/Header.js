import React from "react";
import img from "./img/indir.png";
import Records from "./menus.json";
import MenuItems from "./MenuItems";

const Header=()=>{
    return(
        <div className="header-top">
            <div className="brand">
                <img src={img}></img>
            </div>
            <div className="menu-bar">
                <ul>
                {
                    MenuItems.map(records=>{
                        return(
                            <li key={records}><a href={records.url}>{records.title}</a>
                            <div className="sub-menu-1">
                            <ul>
                                {
                                    records.subMenuItems.map(records2=>{
                                        return(
                                            <li key={records.id}><a href="#">{records2.title1}</a></li>
                                        )          
                                    })
                                }
                            </ul>
                            </div>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className="login-register">
                <button className="LoginButton">Login</button>
                <button className="RegisterButton">Register</button>
            </div>
        </div>
    );
}
export default Header