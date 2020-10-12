import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class UpcomingEvents extends Component {
render(){
  return (
<div>
    <div className="slider-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h5 className="mustard">Upcoming Events</h5>
                    
                    
                    <div className="slider-container">
                        <div className="swiper-container image-slider">
                            <div className="swiper-wrapper">
	  						
	  
	  							<AliceCarousel autoPlay={true} autoPlayInterval={3000} buttonsDisabled={true}>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/TP-Event-1.png" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/customer-logo-2.png" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/customer-logo-3.png" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/customer-logo-4.png" alt="alternative"/>
                                    </div>
                                </div>
	  							</AliceCarousel>
                            </div> 
                        </div> 
                    </div> 
                    

                </div> 
            </div> 
        </div> 
    </div> 
    </div>
  );
}
}

export default UpcomingEvents;
