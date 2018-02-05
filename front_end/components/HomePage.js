import React from 'react';

export default class Homepage extends React.Component{
    render(){
        return (
            <div>
                {/* <!-- preloader --> */}
        <div className="preloader">
                    <img src="img/grid.svg" className="centering-xy" alt="preloader" />
                </div>
                {/* <!-- end preloader --> */}

    	{/* <!-- header --> */}
        <div id="bg-container-slideshow" className="bg-container-slideshow">
                    <div className="container">
                        <div className="row">
                            <ul className="menu">
                                {/* <!-- logo --> */}
                		<li><img src="img/logo.png" alt="logo" className="logo" /></li>
                                {/* <!-- end logo --> */}
            		</ul>
                        </div>

                        <div className="title">
                            <h1 className="col-lg-12">CHOOSE YOUR DEMO STYLE</h1>
                        </div>
                    </div>
                </div>
                {/* <!-- end header --> */}

        {/* <!-- choose demo --> */}
        <div className="choose-demo-section">
                    <div className="container">
                        <div className="col-lg-12 choose-demo-container">
                            <div className="col-lg-6 demo">
                                <a href="demo_1.html">
                                    <img src="img/demo/1.png" alt="demo_1" />
                                    <span className="title">slideshow</span>
                                </a>
                            </div>
                            <div className="col-lg-6 demo">
                                <a href="demo_2.html">
                                    <img src="img/demo/2.png" alt="demo_2" />
                                    <span className="title">kenburns slideshow</span>
                                </a>
                            </div>
                            <div className="col-lg-6 demo">
                                <a href="demo_3.html">
                                    <img src="img/demo/3.png" alt="demo_3" />
                                    <span className="title">YouTube Video</span>
                                </a>
                            </div>
                            <div className="col-lg-6 demo">
                                <a href="demo_4.html">
                                    <img src="img/demo/4.png" alt="demo_3" />
                                    <span className="title">Single Image</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}