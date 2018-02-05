import React from 'react';
import Menu from './Menu';
import MainContent from './MainContent';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- 4.0 preloader --> */}
                <div className="preloader">
                    <img src="img/grid.svg" className="centering-xy" alt="preloader" />
                </div>
                {/* <!-- end preloader --> */}

                {/* <!-- 5.0 background container --> */}
                <div className="bg-container-static"></div>
                {/* <!-- end background container --> */}

                {/* <!-- content container --> */}
            <div className="content-container">
                    <Menu />

                {/* <!-- 7.0 coming soon container --> */}
                <div className="container">
                        {/* <!-- container --> */}
                    <div className="coming-soon-container col-lg-12 col-md-12 col-sm-12 col-xs-12 centering-y">
                            {/* <!-- left side --> */}
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 left-side animated entrance">
                                <h1>We Are</h1>
                            </div>
                            {/* <!-- end left side --> */}

                        {/* <!-- right side --> */}
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right-side animated entrance">
                                <h1 id="word-rotator">Monsy</h1>
                            </div>
                            {/* <!-- end right side --> */}

                        <div className="separator animated entrance"></div>
                        </div>
                        {/* <!-- container --> */}
                </div>
                    {/* <!-- end coming soon container --> */}

                {/* <!-- main content --> */}
                <MainContent />
                {/* <!-- end main content --> */}

                {/* <!-- 15.0 footer --> */}
                <footer className="animated entrance">
                        <p>copyright 2015 <span aria-hidden="true" className="icon icon-like"></span> by SimplePixel</p>

                        {/* <!-- social media link --> */}
                    <div className="social-media-link">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                        {/* <!-- end social media link --> */}
                </footer>
                    {/* <!-- end footer --> */}
            </div>
            </div>
        )
    }
}