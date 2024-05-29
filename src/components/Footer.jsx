import "./footer.css"

import shop1 from "../assets/sop1.jpg"
import shop2 from "../assets/shop2.webp"
import shop3 from "../assets/shop3.jpg"
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function Footer() {
    return( 
      <div className="footer-container">
        <div className="first-row">
            <h1>Get Your Cup Of Coffee Now!</h1>
            <p>Don't let your coffee get cold. Let's go to Coffee Shop and get your coffee and boost your day now.</p>
            <button>Our Location</button>
        </div>
        <div className="second-row">
            <div className="location">
                <h1>Coffeeee</h1>
                <p>A coffee shop that serves many variants of coffee alongside dishes with different flavours</p>
            </div>
            <div className="lists">
                <ul>
                    <li><h3>Facility</h3></li>
                    <li>Private Room</li>
                    <li>Meeting Room</li>
                    <li>Event Room</li>
                    <li>Creative Studio</li>
                    <li>Custom Room</li>
                </ul>
                <ul>
                    <li><h3>Product</h3></li>
                    <li>Coffee</li>
                    <li>Beverages</li>
                    <li>Dishes</li>
                </ul>
                <ul>
                    <li><h3>Support</h3></li>
                    <li>About Us</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Help Me</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p><i class="fa-regular fa-copyright"></i>2024 Coffeeee. All Rights Reserved.</p>
        </div>
      </div>
      )
    ;
  }
  
  export default Footer;
  