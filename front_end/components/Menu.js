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
                    <li><img src="img/BXAIN.png" alt="logo" className="logo animated infinite pulse" /></li>
                    {/* <!-- end logo --> */}
                    <li className="menu-1 menu-out animated">
                        <a href="#" className="menu-link" data-name="about" data-toggle="tooltip" data-placement="bottom" title="Digital Marketing">
                            <img src="img/svgForNojansSite/digi.svg" data-name="digitalMarketing" id="digitalMarketingIcon" style={digitalMarketingIconStyle} alt=""/>
                            
                        </a>
                    </li>
                    <li className="menu-2 menu-out animated">
                        <a href="#" className="menu-link" data-name="subscribe" data-toggle="tooltip" data-placement="bottom" title="Video Production">
                            <img src="img/svgForNojansSite/vid.svg" id="visualProductionIcon" style={{height: '57%', marginTop:'-16%', width:'103%'}} alt="" />
                        </a>
                    </li>
                    <li className="menu-3 menu-out animated">
                        <a href="#" className="menu-link" data-name="works" data-toggle="tooltip" data-placement="bottom" title="Web Development">
                            <img src="img/svgForNojansSite/dev.svg" id="webDevelopmentIcon" style={{height: '52%', marginTop:'-16%', width:'80%'}} alt="" />
                        </a>
                    </li>
                    <li className="menu-4 menu-out animated">
                        <a href="#" className="menu-link" data-name="contact" data-toggle="tooltip" data-placement="bottom" title="contact">
                        <img src="img/svgForNojansSite/contact.svg" data-name="digitalMarketing" id="digitalMarketingIcon" style={{height: '60%', marginTop:'-16%', width:'80%'}} alt=""/>
                        </a>
                    </li>
                </ul>
                    </nav >
        )
    }
}