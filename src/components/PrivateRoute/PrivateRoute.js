// import { Route } from "react-router-dom";
// import React from 'react';
// import useAuth from './../../context/useAuth';
// import { Redirect, Router, useNavigate } from '@reach/router';
// import LoginTwo from './../pages/login';
// import home from './../pages/home';


// const PrivateRoute = ({ children,...rest }) => {
//     const navigation = useNavigate()
//     const {user} = useAuth();
//     return  user ? navigation('/home') : <LoginTwo />
// };

// export default PrivateRoute;

// /* 
//  return (
//         <Router>

//                 <Route
//                         {...rest}
//                         render ={ ({location})=> user.name ? children : <Redirect to={{ 
//                             pathname:'/login',
//                             state:{ from: location }
//                         }}></Redirect>} 
//                 >
                    
//                 </Route>

//         </Router>

// */