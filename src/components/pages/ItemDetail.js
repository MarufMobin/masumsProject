import React, { useState } from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;


  

const Colection= function() {
    const propertiesDatas = [
        {
            name:  "Bakground",
            coler: "Yellowing Sky",
            limit:"85% have this trait"
        },
        {
            name:  "Eyes",
            coler: "Purple Eyes",
            limit:"14% have this trait"
        },
        {
            name:  "Nose",
            coler: "Small Nose",
            limit:"45% have this trait"
        },
        {
            name:  "Mouth",
            coler: "Smile Read Lip",
            limit:"61% have this trait"
        },
        {
            name:  "Neck",
            coler: "Pink Ribbon",
            limit:"27% have this trait"
        },
        {
            name:  "Hair",
            coler: "Pink Short",
            limit:"35% have this trait"
        },
        {
            name:  "Accesories",
            coler: "Heard Neclace",
            limit:"33% have this trait"
        },
        {
            name:  "Hat",
            coler: "Cute Panda",
            limit:"62% have this trait"
        },
        {
            name:  "Clothes",
            coler: "Casual Purple",
            limit:"78% have this trait"
        },
       
    ];

    //Buy Modal Are here
    const [ buyModalStatus, setBuyModalStatus ] = useState(false)
    const handleBuyModal = () =>{
        setBuyModalStatus(!buyModalStatus)
    }

    //Price a Bit Modal are here
    const [ priceModalStatus, setPriceModalStatus ] = useState(false)
    const handlePriceModal = () =>{
        setPriceModalStatus(!priceModalStatus)
    }
return (
<div>
<GlobalStyles/>
  <section className='container'>
    <div className='row mt-md-5 pt-md-4'>

    <div className="col-md-6 text-center">
                            <img src="./img/items/big-1.jpg" className="img-fluid img-rounded mb-sm-30" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                                Auctions ends in 
                                <div className="de_countdown">
                                  <Clock deadline="December, 30, 2021" />
                                </div>
                                <h2>Pinky Ocean</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                    <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                    <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                <div className="d-flex">
                                    <div className="me-5">
                                        <h6>Creator</h6>
                                        <div className="item_author">                                    
                                            <div className="author_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="author_list_info">
                                                <span>Monica Lucas</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h6>Collection</h6>
                                        <div className="item_author">                                    
                                            <div className="author_list_pp">
                                                <span>
                                                    <img className="lazy" src="./img/author/author-3.jpg" alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="author_list_info">
                                                <span>Monica Lucas</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="spacer-40"></div>

                                <div className="de_tab">
    
                                <ul className="de_nav">
                                    <li id='Mainbtn' className="active"><span>Details</span></li>
                                    <li id='Mainbtn1' className=''><span>Bids</span></li>
                                    <li id='Mainbtn2' className=''><span>History</span></li>
                                </ul>
                                <div>
                                    <h6>Owner</h6>
                                    <div className="item_author">                                    
                                        <div className="author_list_pp">
                                            <span>
                                                <img className="lazy" src="./img/author/author-4.jpg" alt=""/>
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>                                    
                                        <div className="author_list_info">
                                            <span>Stracy Long</span>
                                        </div>
                                    </div>
                                </div>
                                {/* properties */}
                                <div className="spacer-40"></div>
                                <div>
                                    <h6>Properties</h6>
                                    <div className="row">
                                        {
                                            propertiesDatas.map(( item , index) =><div key={index} className="col-md-3 bg-black  py-2 px-2 text-center m-1" >
                                               <p>{item.name}</p>
                                               <p>{item.coler}</p>
                                               <p>{item.limit}</p>
                                            </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="spacer-40"></div>
                                    {/* Pricing Section */}
                                <div>
                                        <h6>Pricing</h6>
                                        <div className="text-white">
                                            <i className="fa fa-sort" aria-hidden="true"></i>
                                            <span>0.059</span>
                                            <small>($253.67)</small>
                                            <div className="d-flex mt-3">
                                               <span className="btn-main lead me-3" onClick={handleBuyModal}>Buy Now</span>
                                               <span className="btn-main lead" onClick={handlePriceModal}>Price a Bid</span>
                                            </div>
                                        </div>
                                </div>
                                
                            </div>
                                
                            </div>
                        </div>
                                        {/* Buy Modal  are here */}
                            {
                                        
                                <div className={buyModalStatus ? `custm_modal d-block`: `d-none`}>
                                    <div className='custm_modal_body p-3'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h3 className='m-0'>Checkout </h3> 
                                            <span className='closebtn' onClick={handleBuyModal} style={{cursor:"pointer"}}>&times;</span>
                                        </div>
                                        <p className='custom_modal_title text-black'>You are about to perchase a <span>AnimeSaliorClub #304</span> From <span>Monica Luacas</span></p>
                                        <span>Enter quantity. <span>10 Available</span></span>
                                        <div className='from-group'>
                                            <input type="text" className='form-control custm_modal_field'/>
                                        </div>
                                        <div className='mb-5'>
                                            <div className='d-flex justify-content-between align-items-center'> 
                                                <span>Your balance</span>
                                                <span>10.67856 ETH</span>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'> 
                                                <span>Service Fee 2.5%</span>
                                                <span>0.000325 ETH</span>
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center'> 
                                                <span>Your will pay</span>
                                                <span>0.013325 ETH</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='w-100'>Add funds</button>
                                        </div>
                                    </div>
                                </div>
                            }

                                    {/* Price Modal Are here */}
                                    {
                                        <div className={priceModalStatus ? `custm_modal d-block`: `d-none`}>
                                            <div className='custm_modal_body p-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h3 className='m-0'>Place a Bid </h3> 
                                                    <span className='closebtn' onClick={handlePriceModal} style={{cursor:"pointer"}}>&times;</span>
                                                </div>
                                                <p className='custom_modal_title text-black'>You are about to place a bid for <span>AnimeSaliorClub #304</span> From <span>Monica Luacas</span></p>
                                                <span>Your bid (ETH) </span>
                                                <div className='from-group'>
                                                    <input type="text" className='form-control custm_modal_field' placeholder="Enter bid"/>
                                                </div>
                                                <span>Enter quantity. <span>10 Available</span></span>
                                                <div className='from-group'>
                                                    <input type="text" className='form-control custm_modal_field'/>
                                                </div>
                                                <div className='mb-5'>
                                                    <div className='d-flex justify-content-between align-items-center'> 
                                                            <span>Your bilding balance</span>
                                                            <span>0.013325 ETH</span>
                                                        </div>
                                                    <div className='d-flex justify-content-between align-items-center'> 
                                                        <span>Your balance</span>
                                                        <span>10.67856 ETH</span>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'> 
                                                        <span>Service Fee 2.5%</span>
                                                        <span>0.000325 ETH</span>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center'> 
                                                        <span>Your will pay</span>
                                                        <span>0.013325 ETH</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='w-100'>Place a bid</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
              
    </div>
  </section>

  <Footer />
</div>
);
}
export default Colection;