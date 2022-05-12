import React, { Component } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

export default class Createpage extends Component {

constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    document.getElementById("file_name").style.display = "none";
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

render() {
    return (
      <div>
      <GlobalStyles/>

        <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Edit Profile</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container'>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 mb-5">
              <form id="form-create-item" className="form-border" action="#">
                  <div className="field-set">
                    {/* Tab */}
                      <div className="">
                        <button className="profileBtn">
                            <i className="fa fa-user" aria-hidden="true"></i>
                           <span className="icon-space">profile</span>
                        </button>
                        <button className="profileBtn mx-3">
                        <i className="fa fa-exclamation" aria-hidden="true"></i>
                          <span className="icon-space">Notification</span>
                        </button>
                        <button className="profileBtn">
                        <i className="fa fa-paint-brush" aria-hidden="true"></i>
                          <span className="icon-space">Apparance</span>
                        </button>
                      </div>

                      {/* Edit field */}
                      <div className="spacer-single"></div>
                      <h5>Username</h5>
                      <input type="text" name="item_title" id="item_title" className="form-control" placeholder="Enter Username" />

                      <div className="spacer-10"></div>

                      <h5>Custom URL</h5>
                      <input type="text" name="item_title" id="item_title" className="form-control" placeholder="Enter Your URL" />

                      <div className="spacer-10"></div>

                      <h5>Bio</h5>
                      <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="Tell The Word Who are you!"></textarea>

                      <div className="spacer-10"></div>

                      <h5>Email Address*</h5>
                      <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="Enter Email" />

                      <h5><i className="fa fa-link" aria-hidden="true"></i>
                          <span className="icon-space">Your site</span>
                            </h5>
                      <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="Enter Website URL" />

                      <h5><i className="fa fa-twitter" aria-hidden="true"></i>
                          <span className="icon-space">Twitter Username</span>
                                </h5>
                      <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="Enter Twitter Username" />

                      <h5><i className="fa fa-instagram" aria-hidden="true"></i>
                          <span className="icon-space">Instragram Username</span>
                            </h5>
                      <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="Enter Instragram Username" />

                      <div className="spacer-10"></div>

                      <input type="button" id="submit" className="btn-main" value="Update Profile"/>
                  </div>
              </form>
          </div>

          {/* Profile */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="mb-5">
                      <h5 className="mb-2"><i className="fa fa-info-circle" aria-hidden="true"></i>
                            <span className="icon-space">Profile image</span>
                            </h5>
                        <img src='./img/author/author-1.jpg' alt="" className="rounded-pill" />
                  </div>
                  <div>
                    <h5><i className="fa fa-info-circle" aria-hidden="true"></i>
                      <span className="icon-space">Profile Banner</span>
                      </h5>
                    <img src="./img/collections/coll-1.jpg" alt="" className="img-fluid" />
                  </div>
           </div>                                         
      </div>

      </section>

        <Footer />
      </div>
   );
  }
}