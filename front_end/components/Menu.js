import React from 'react';

export default class Menu extends React.Component{
    render(){
        return (
            < nav className = "menu animated entrance" >
                <ul>
                    {/* <!-- logo --> */}
                    <li><img src="img/bxain.png" alt="logo" className="logo" /></li>
                    {/* <!-- end logo --> */}
                    <li className="menu-1 menu-out animated">
                        <a href="#" className="menu-link" data-name="about" data-toggle="tooltip" data-placement="bottom" title="about us">
                            {/* <span aria-hidden="true" className="icon icon-info"></span> */}
                            <img src="" alt=""/>
                        </a>
                    </li>
                    <li className="menu-2 menu-out animated">
                        <a href="#" className="menu-link" data-name="subscribe" data-toggle="tooltip" data-placement="bottom" title="subscribe">
                            <span aria-hidden="true" className="icon icon-paper-plane"></span>
                        </a>
                    </li>
                    <li className="menu-3 menu-out animated">
                        <a href="#" className="menu-link" data-name="works" data-toggle="tooltip" data-placement="bottom" title="our works">
                            <span aria-hidden="true" className="icon icon-briefcase"></span>
                        </a>
                    </li>
                    <li className="menu-4 menu-out animated">
                        <a href="#" className="menu-link" data-name="contact" data-toggle="tooltip" data-placement="bottom" title="contact">
                            <span aria-hidden="true" className="icon icon-call-out"></span>
                        </a>
                    </li>
                </ul>
                    </nav >
        )
    }
}