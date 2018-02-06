import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="animated entrance">
                <p>copyright 2018 <span aria-hidden="true" className="icon icon-like"> BXAIN</span></p>

                {/* <!-- social media link --> */}
                <div className="social-media-link">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-behance"></i></a>
                </div>
                {/* <!-- end social media link --> */}
            </footer>
        )
    }
}