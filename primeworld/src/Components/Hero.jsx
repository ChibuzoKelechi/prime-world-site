import { motion } from "framer-motion";
import gif from '../assets/img1/netgif.svg'
import Button from "./Button";

/* eslint-disable react/prop-types */
function Hero({img}) {

    let keyword = "digital"

    return ( 
        <article className="hero relative overflow-clip" id="top">
         <div className="banner relative">
            <img src={img} alt="banner"/>
            <img src={gif} alt="animated gif" className="absolute h-60 top-[20px] lg:h-90 left-[50%]"/>

                <div className="herotext lg:px-24 text-white text-center lg:text-left grid place-items-center lg:flex lg:justify-start">
                  
                   <motion.div className="lg:mr-10 lg:py-10 lg:w-1/3">     
                    <h1 className="text-3xl py-4 uppercase lg:py-2">Exploring a new world of &nbsp;
                        <span className="text-teal-500 font-semibold">{keyword}</span> financing
                    </h1>

                    <p className="text-xs tracking-wide lg:text-sm py-2">As a global investment firm, we foster diverse perspectives and embrace innovation to help our clients navigate the uncertainty of capital markets</p>
                     
                      <Button 
                        text='get started'

                        className='bg-teal-700 uppercase text-xs font-semibold p-3 rounded-sm my-4'
                       />
                   </motion.div>
                </div>
         </div>
        </article>
     );
}
 
export default Hero;