import React from 'react';

export default class ContactComponent extends React.Component{
    render(){
        return(
            <div className="contact-details col-lg-10 col-lg-offset-2 col-md-11 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 animated entrance">
                {/* <!-- phone --> */}
                <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <span aria-hidden="true" className="icon icon-call-in"></span>
                    <span className="desc">
                        +1 (949) 351-2911
                    </span>
                </div>
                {/* <!-- end phone --> */}

                {/* <!-- email --> */}
                <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <span aria-hidden="true" className="icon icon-envelope-open"></span>
                    <span className="desc">
                        contact@bxain.com
                                        </span>
                </div>
                {/* <!-- end email --> */}

                {/* <!-- address --> */}
                <div className="detail col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <span aria-hidden="true" className="icon icon-pointer"></span>
                    <span className="desc">
                        Irvine
                                        </span>
                </div>
                {/* <!-- end address --> */}
            </div>
        )
    }
}