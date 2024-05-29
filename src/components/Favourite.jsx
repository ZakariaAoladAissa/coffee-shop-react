import "./favourite.css"

import img6 from "../assets/coffee6.jpg"
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function Favourite() {
    return (
      <div className="favourite-container">
        <div className="top-block">
            <img
            data-aos="slide-left"
            data-aos-duration="1200" 
            src={img6}/>
            <div data-aos="slide-left"
            data-aos-duration="1200"  className="description-text">
                <p className="title">
                <span>Coffeeee<br/></span>
                Choose Your Favourite Black Coffee</p>
                <p>The quality of coffee can vary greatly depending on  how it is processesed and how the coffeee were grown. Usually synthetic.</p>
                <div className="description-buttons">
                    <motion.button whileHover={{scale:1.1}} transition={{stiffness:200,type:"spring"}}>Get Started</motion.button>
                    <p>Read More</p>
                </div>
            </div>
        </div>
        <div data-aos="slide-up"
            data-aos-duration="1200"  className="bottom-block">
            <div className="bottom-text">
                <p>Special Features that make you Happy and cheer up!<motion.i whileHover={{scale:1.3}} transition={{stiffness:200,type:"spring"}} className="fa-solid fa-mug-saucer"></motion.i></p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Favourite;
  