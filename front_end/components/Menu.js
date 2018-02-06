import React from 'react';

const digitalMarketingIconStyle = {
    height: '71%',
    marginTop:'-16%',
    width:'80%'
}

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
                            <img src="img/svgForNojansSite/social-network.svg" id="digitalMarketingIcon" style={digitalMarketingIconStyle} alt=""/>
                            
                        </a>
                    </li>
                    <li className="menu-2 menu-out animated">
                        <a href="#" className="menu-link" data-name="subscribe" data-toggle="tooltip" data-placement="bottom" title="subscribe">
                            <img src="img/svgForNojansSite/video-camera.svg" id="visualProductionIcon" style={digitalMarketingIconStyle} alt="" />
                        </a>
                    </li>
                    <li className="menu-3 menu-out animated">
                        <a href="#" className="menu-link" data-name="works" data-toggle="tooltip" data-placement="bottom" title="our works">
                            <img src="img/svgForNojansSite/webDevelopment.svg" id="webDevelopmentIcon" style={digitalMarketingIconStyle} alt="" />
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