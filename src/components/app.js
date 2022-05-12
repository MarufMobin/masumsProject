import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import Rangking from './pages/rangking';
import Auction from './pages/Auction';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Wallet from './pages/wallet';
import Login from './pages/login';
import Register from './pages/register';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import { createGlobalStyle } from 'styled-components';
import Activity from './pages/activity';
import AuthProvider from './../context/AuthProvider';
import Author from './pages/Author';


const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

// Trying purpuss



const app= () => (
  <div className="wraper">
  <GlobalStyles />
      <AuthProvider>
        <Header/>
          <PosedRouter>
          <ScrollTop path="/">
            <Home exact path="/">
              <Redirect to="/home" />
            </Home>
            <Explore path="/explore" />
            <Rangking path="/rangking" />
            <Auction path="/auction" />
            <Colection path="/author" />
            <ItemDetail path="/nftdetails" />
            <Wallet path="/wallet" />
            <Login path="/login" />
            <Register path="/register" />
            <Create path="/create" />
            <Create2 path="/create2" />
            <Create3 path="/create3" />
            <Createoption path="/createOptions" />
            <Activity path="/activity" />
            <Author path="/maruf" />
            </ScrollTop>
          </PosedRouter>
      <ScrollToTopBtn /> 
     </AuthProvider>
    
  </div>
);
export default app;