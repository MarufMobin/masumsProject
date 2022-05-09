import React from 'react';
import SliderMain from '../components/SliderMain';
import CarouselCollection from '../components/CarouselCollection';
import CarouselNew from '../components/CarouselNew';
import AuthorList from '../components/authorList';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import '../../assets/custom.scss';


const home= () => (
  <div>
    
    //Hero Section / Banner Section here
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1-dark.jpg'})`}}>
        
        //Inner Banner Section
         <SliderMain/>
      </section>
      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='mb-5 text-white'>Browse by category</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>

        // Category Section here
        <Catgor/>
      </section>

      // New Items Section here
      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'> 
            <div className='text-center'>
              <h2 className='text-white mb-5'>New Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselNew/>
          </div>
         </div>
       </section>

       // Hot Collection Section here
      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='text-white mb-5'>Hot Collections</h2>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselCollection/>
          </div>
        </div>
      </section>
      
      //Top Seller Section here
      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='text-white mb-5'>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <AuthorList/>
          </div>
        </div>
      </section>

      // Footer Section here
    <Footer />
  </div>
);
export default home;