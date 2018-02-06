import React from 'react';
import Menu from './Menu';
import MainContent from './MainContent';
import ComingSoon from './ComingSoon';
import Footer from './Footer';
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
                <div className="bg-container-static">
                    
                </div>
                {/* <!-- end background container --> */}

                {/* <!-- content container --> */}
            <div className="content-container">

                    {/* <!-- 6.0 menu & logo --> */}
                        <Menu />
                    {/* <!-- end menu --> */}

                    {/* <!-- 7.0 coming soon container --> */}
                         <ComingSoon />
                    {/* <!-- end coming soon container --> */}

                    {/* <!-- main content --> */}
                        <MainContent />
                    {/* <!-- end main content --> */}


                    {/* <!-- 15.0 footer --> */}
                        <Footer />
                    {/* <!-- end footer --> */}
            </div>
            </div>
        )
    }
}