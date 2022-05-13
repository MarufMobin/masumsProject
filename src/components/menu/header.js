import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";
import useAuth from './../../context/useAuth';



setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header= function() {
  
  //use Fire base using here 
  const {user,logOut } = useAuth();
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = (): void => {
      setOpenMenu2(!openMenu1);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    const closeMenu2 = (): void => {
      setOpenMenu2(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item cursor-pointer'>
                <NavLink to="/">
                <img
                    src="./img/blocpod-logo.svg"
                    className="img-fluid d-block"
                    alt="#"
                  />
                  <img
                    src="./img/blocpod-logo.svg"
                    className="img-fluid d-3"
                    alt="#"
                  />
                  <img
                    src="./img/blocpod-logo.svg"
                    className="img-fluid d-none"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                    <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Marketplace
                            <span className='lines'></span>
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/nftdetails">All NFTs</NavLink>
                                <NavLink to="#">Art</NavLink>
                                <NavLink to="#">Music</NavLink>
                                <NavLink to="#">Photography</NavLink>
                                <NavLink to="#">Video</NavLink>
                                <NavLink to="#">Sports</NavLink>
                                <NavLink to="#">Trading Cards</NavLink>
                                <NavLink to="#">Virtual Worlds</NavLink>
                                <NavLink to="#">Utility</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                    <div ref={ref1}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                            Status
                            <span className='lines'></span>
                            {openMenu1 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="#">Activity</NavLink>
                              <NavLink to="#">Rankings</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className="navbar-item">
                      <NavLink to="/wallet">
                            <img src="./img/items/icon-wallet.svg" alt=""  className="cursor-pointer"/>
                        </NavLink>
                    </div>
                    <div className='mainside'>
                      <span className="custm-mini-button  lead ">SIGN IN</span>
                   </div>
                  </div>
                  
                  }
                </Breakpoint>
                 
                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                        <div ref={ref}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                            Marketplace
                            <span className='lines'></span>
                            {openMenu && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu}>
                                <NavLink to="/nftdetails">All NFTs</NavLink>
                                <NavLink to="#">Art</NavLink>
                                <NavLink to="#">Music</NavLink>
                                <NavLink to="#">Photography</NavLink>
                                <NavLink to="#">Video</NavLink>
                                <NavLink to="#">Sports</NavLink>
                                <NavLink to="#">Trading Cards</NavLink>
                                <NavLink to="#">Virtual Worlds</NavLink>
                                <NavLink to="#">Utility</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                          <div className="dropdown-custom dropdown-toggle btn" 
                             onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                            Status
                            <span className='lines'></span>
                            {openMenu1 && (
                            <div className='item-dropdown'>
                              <div className="dropdown" onClick={closeMenu1}>
                              <NavLink to="#">Activity</NavLink>
                              <NavLink to="#">Rankings</NavLink>
                              </div>
                            </div>
                          )}
                          </div>
                          
                        </div>
                    </div>

                    <div className="navbar-item">
                      <NavLink to="/wallet">
                          <img src="./img/items/icon-wallet.svg" alt="" className="cursor-pointer"/>
                      </NavLink>
                    </div>

                    <div className="navbar-item">
                    { user.displayName ? 
                      <div className='mainside d-flex'>
                          { user?.photoURL ?
                            <span>
                                <div ref={ref2}>
                                  <div className="dropdown-custom btn" 
                             onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                                    <img src={user?.photoURL} style={{width: "35px", height: "35px", borderRadius: "50%", marginTop:'-5px'}} className="cursor-pointer" alt="" /> 
                                      <span className='lines line-none'></span>
                                      {openMenu2 && (
                                      <div className='item-dropdown profile-dropdown'>
                                        <div className="dropdown" onClick={closeMenu2}>
                                        <div className="pt-3 "><span className="text-white">{user?.displayName}</span> </div>
                                        <NavLink to="/create" className="py-3" style={{border: "1px solid red !important"}}>Edit Profile</NavLink>
                                        <div to="#" onClick={logOut} className="pb-3 text-white">Sign Out</div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              
                              </span> : <span>
                                <div ref={ref2}>
                                    <div className="dropdown-custom btn" 
                              onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                                       <i style={{color:"#03FFB3"}} className="fa fa-user fs-4 me-3 d-block">
                                </i>  
                                    <span className='lines line-none'></span>
                                    {openMenu2 && (
                                    <div className='item-dropdown profile-dropdown'>
                                      <div className="dropdown" onClick={closeMenu2}>
                                      <div className="pt-3 "><span className="text-white">{user?.displayName}</span> </div>
                                      <NavLink to="/create" className="py-3" style={{border: "1px solid red !important"}}>Edit Profile</NavLink>
                                      <div to="#" onClick={logOut} className="pb-3 text-white">Sign Out</div>
                                      </div>
                                    </div>
                                  )}
                                    </div>
                                  </div>

                                {/* <span style={{color: "#03FFB3"}}>{user?.displayName}</span> */}
                                </span> }
                      </div> : 
                        <NavLink to="/login" className="custom-design">
                              <span className="custm-mini-button  lead">SIGN IN</span>
                        </NavLink>
                      }
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>

              
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line"></div>
          <div className="menu-line1"></div>
          <div className="menu-line2"></div>
        </button>

      </div>     
    </header>
    );
}
export default Header;