import "./header.css"
import img1 from "../assets/coffee1.avif"
import img2 from "../assets/coffee2.png"
import img3 from "../assets/coffee3.png"
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function Header() {
  return (
    <div className="header-container">
        <img data-aos="fade-up"
        data-aos-delay="1500" 
        data-aos-duration="1700"
        className="coffee"
        src={img3}/>
      <div className="navbar">
        <div className="navbar-links">
            <p data-aos="fade-down" className="logo">Coffee<i className="fa-solid fa-mug-hot"></i><span>Shop</span></p>
            <div data-aos="fade-down" className="links">
                <li>  Home</li>
                <li>  Menu</li>
                <li>  Pricing</li>
                <li>  Blog</li>
                <li>  About</li>
                <li>  Contact</li>
            </div>
        </div>
        <img data-aos="fade-up"
        data-aos-delay="300" 
        data-aos-duration="1700"
        className="mobile-coffee"
        src={img3}/>
        <div
         data-aos="slide-right"
         data-aos-duration="1200" 
         className="left-block">
            <p><span>Start</span> Your Day<br/>
            <span>With a Black</span><br/>
            Coffee.</p>
            <div className="price">$ 12.00 <motion.button whileHover={{scale:1.1}} transition={{stiffness:200,type:"spring"}}>Buy now<i class="fa-solid fa-arrow-right"></i></motion.button></div>
        </div>
        <div data-aos="slide-left" data-aos-delay="500" data-aos-duration="1200"  className="right-block">
            <div>
                <h1>Quick Delivery</h1>
                <p>Get your Hot or Cold Coffee<br/> Delivered to you as earliest.</p>
            </div>
            
        </div>
        <div className="last-block">
            <div data-aos="slide-right" data-aos-duration="1000" className="last-left">
                <h1>Affordable Price</h1>
                <p>Get your Hot or Cold Coffee<br/> at Affordable Price.</p>
            </div>
            <div data-aos="slide-right" className="last-right">
                <p>Enjoy Today and Everyday with Our Creamy <br/>
                Nondairy Beverage Opotions. Smooth. Delicious<br/>
                and Subtle Sweet.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
