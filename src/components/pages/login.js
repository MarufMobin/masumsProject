import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from '@reach/router';
import { useState } from 'react';
import useAuth from './../../context/useAuth';

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

const LoginTwo= () => {

    const navigator = useNavigate()
    const {  user,singInUsingGoogle ,singInUsingFacebook, logInuser } = useAuth();
    console.log(user,"login ar user")
    if( user.displayName ){
      navigator('/')
    }
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const handleContactForm = e =>{
      e.preventDefault();
      logInuser(email, password)
    }
    const handleEmailField = e =>{
      setEmail(e.target.value)
    } 
    const handlePasswordField = e =>{
      setPassword(e.target.value)
    }

    //Show Password and hide password 
    const [ showIcon, setShowIcon ] = useState(true);
    const passwordIcon = () =>{
      setShowIcon(!showIcon)
    }

  return ( <div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
              <div className="spacer-10"></div>
              <h1>Create, sell or collect digital items.</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
          <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
            <div className="box-login">
              <h3 className="mb10">Sign In</h3>
              <p>Login using an existing account or create a new account <Link to="/register"><span>here</span>.</Link></p>
              <form name="contactForm" id='contact_form' className="form-border" action='#' onSubmit={handleContactForm} >
                  <div className="field-set">
           
                      <input type='text' name='email' id='email' className="form-control" placeholder="Use your email" onBlur={handleEmailField}  />
             
                  </div>
                
                 <div className="field-set onoff-icon ">
                      <input type={showIcon ? `password` : `text`} name='password' id='password' className="form-control" placeholder="Password"  autoComplete="off" onBlur={handlePasswordField}   /> 

                    <span >
                       {  showIcon ?
                          <i className="fa fa-eye-slash cursor-pointer" aria-hidden="true" onClick={passwordIcon}></i> :  <i className="fa fa-eye cursor-pointer" aria-hidden="true" onClick={passwordIcon}></i>}
                    </span>

                  </div>
                  
                
                <div className="field-set">
                  <input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2"/>
                </div>
                
                <div className="clearfix"></div>
                
                <div className="spacer-single"></div>
                  <ul className="list s3">
                      <li>Login with:</li>
                      <li><span onClick={singInUsingFacebook}>Facebook</span></li>
                      <li><span onClick={singInUsingGoogle}>Google</span></li>
                  </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

)};
export default React.memo(LoginTwo);