import "./shop.css"

import shop1 from "../assets/sop1.jpg"
import shop2 from "../assets/shop2.webp"
import shop3 from "../assets/shop3.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function Shop() {
    return( 
      <div className="shop-container">
        <div className="our-shop">
            <h1 data-aos="slide-down"
            data-aos-duration="1200" >Our Shop</h1>
            <p data-aos="slide-right"
            data-aos-duration="1200" >Don't let your coffee get cold. Let's go to Coffee Shop and get your coffee and boost your day now. </p>
            <div class="flex-container">
                <div data-aos="slide-right"
                data-aos-duration="1200"  class="flex-item">
                    <img src={shop2} alt="Image 2"/>
                </div>
                <div data-aos="slide-left"
                data-aos-duration="1200"  class="flex-item">
                    <img src={shop1} alt="Image 1"/>
                </div>
                <div data-aos="slide-up"
                data-aos-duration="1200"  class="flex-item">
                    <img src={shop3} alt="Image 3"/>
                </div>
            </div>
        </div>
      </div>
      )
    ;
  }
  
  export default Shop;
  