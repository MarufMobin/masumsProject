import React,{useState} from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from '@reach/router';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

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



const Register= () => {
  const navigation = useNavigate();
  const auth = getAuth();
  // Error Massage
  const [ error , setError ] = useState('');
  //User Fill up Fields are here
  const [ phone, setPhone ] = useState('');
  const [ username, setUserName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ rePassword, setRePassword ] = useState('');

  const handleRegister = e =>{
    e.preventDefault();
    console.log("letest Datas", name, username, email, password,phone,rePassword )
    registerNewUser(email, password)
  }

  const handleField = e =>{
    if( e.target.name === 'name' ){
        setName(e.target.value)
    }
    if( e.target.name === 'email' ){
        setEmail(e.target.value)
    }
if( e.target.name === 'username' ){
        setUserName(e.target.value)
    }
  if( e.target.name === 'password' ){
      setPassword(e.target.password)
    }
  if( e.target.name === 'rePassword' ){
    setRePassword(e.target.rePassword)
    }
    if( e.target.name == 'phone' ){
        setPhone(e.target.value)
    }
  
    
  }
  // Register User 

  const registerNewUser = ( email, password ) =>{
    console.log("emialpass",email,password)
      createUserWithEmailAndPassword(auth,email,password)
      .then( result =>{
          const user = result.user;
          console.log(user);
          userNameSet();
          setError('');
          navigation('/login')
      }).catch( error =>{
          console.log(error.massage)
      })
  }
  // Set User Name 
    const userNameSet  = () =>{
        updateProfile(auth.currentUser, {
          displayName: name
        }).then( result => {
            console.log(result)
        }).catch((error) => {
            setError(error.massage)
        });
    }
    console.log(error)
  const passwordField = e =>{
      setPassword(e.target.value)
  }
  const rePasswordField = e =>{
      setPassword(e.target.value)
  }

  
 
return (
<div>
<GlobalStyles />

  <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12 text-center">
              <h1>Register</h1>
              <p>Anim pariatur cliche reprehenderit</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
    <div className="row">

    <div className="col-md-8 offset-md-2">
      <h3>Don't have an account? Register now.</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <div className="spacer-10"></div>

      <form name="contactForm" id='contact_form' className="form-border" action='#' onSubmit={handleRegister}>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Name:</label>
                                    <input type='text' name='name' id='name' className="form-control" onBlur={handleField}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Email Address:</label>
                                    <input type='text' name='email' id='email' className="form-control" onBlur={handleField} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Choose a Username:</label>
                                    <input type='text' name='username' id='username' className="form-control" onBlur={handleField} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Phone:</label>
                                    <input type='text' name='phone' id='phone' className="form-control" onBlur={handleField} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Password:</label>
                                    <input type='password' name='password' id='password' className="form-control" onBlur={passwordField}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Re-enter Password:</label>
                                    <input type='password' name='rePassword' id='re-password' className="form-control" onBlur={rePasswordField} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id='submit' className="pull-left me-3">
                                    <input type='submit' id='send_message' value='Register Now' className="btn btn-main color-2" />
                                </div>
                                <div className="cutom-p">
                                   Are You Already Member? Click <span className='custom-link-btn'> <Link to="/login">Here</Link></span>
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </form>
      </div>

    </div>
  </section>

  <Footer />
</div>

)};
export default Register;