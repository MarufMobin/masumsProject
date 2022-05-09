import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light custm-footer-color">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className='custon-color-whilte-footer '>Marketplace</h5>
                            <ul>
                                <li><Link to="" className="custm-color-link">All NFTs</Link></li>
                                <li><Link to="" className="custm-color-link">Art</Link></li>
                                <li><Link to="" className="custm-color-link">Music</Link></li>
                                <li><Link to="" className="custm-color-link">Domain Names</Link></li>
                                <li><Link to="" className="custm-color-link">Virtual World</Link></li>
                                <li><Link to="" className="custm-color-link">Collectibles</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className='custon-color-whilte-footer '>Resources</h5>
                            <ul>
                                <li><Link to="" className="custm-color-link">Help Center</Link></li>
                                <li><Link to="" className="custm-color-link">Partners</Link></li>
                                <li><Link to="" className="custm-color-link">Suggestions</Link></li>
                                <li><Link to="" className="custm-color-link">Discord</Link></li>
                                <li><Link to="" className="custm-color-link">Docs</Link></li>
                                <li><Link to="" className="custm-color-link">Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className='custon-color-whilte-footer '>Community</h5>
                            <ul>
                                <li><Link to="" className="custm-color-link">Community</Link></li>
                                <li><Link to="" className="custm-color-link">Documentation</Link></li>
                                <li><Link to="" className="custm-color-link">Brand Assets</Link></li>
                                <li><Link to="" className="custm-color-link">Blog</Link></li>
                                <li><Link to="" className="custm-color-link">Forum</Link></li>
                                <li><Link to="" className="custm-color-link">Mailing List</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-1">
                        <div className="widget">
                            <h5 className='custon-color-whilte-footer '>Newsletter</h5>
                            <p className='custon-color-whilte-footer '>Signup for our newsletter to get the latest news in your inbox.</p>
                            <form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> 
                                    <Link to="" className="custm-color-link" id="btn-subscribe">
                                      <i className="arrow_right bg-color-secondary"></i>
                                    </Link>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small className='custon-color-whilte-footer'>Your email is safe with us. We don't spam.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <img alt="" className="f-logo d-1" src="./img/blocpod-logo.svg" />
                                        <img alt="" className="f-logo d-3" src="./img/logo-2-light.png" />
                                        <span className="copy custm-color-link">&copy; 2022 Blocpod. All Rights Reserved</span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-facebook fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-twitter fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-linkedin fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-pinterest fa-lg"></i></span>
                                        <span onClick={()=> window.open("", "_self")}><i className="fa fa-rss fa-lg"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;