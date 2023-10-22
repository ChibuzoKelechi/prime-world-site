/* eslint-disable react/prop-types */
import Title from "./Title";
import phoneImg from '../assets/img1/atm-cards-6-768x714.png'
import { FaChartColumn, FaMedal } from "react-icons/fa6";

const WhoWeAre = () => {
    return ( 
        <section>
            <article className="">

               <Title>
                <h1 className="border-l-4 border-teal-800 px-1 text-neutral-600 text-sm font-light">
                    Who We Are
                </h1>
                    <div className="text-xl get-to-know my-2">
                        <span className="font-extralight">Get to know more about </span>
                        <span className="text-teal-600 font-semibold"> Primeworld Finance</span>? 
                    </div>
               </Title>

               <div>
                <p className="text-neutral-600 text-sm font-light">
                 Primeworld Finance Investments is a global systematic investment manager. 
                 Our centralized research focuses on the development of advanced quantitative techniques for
                  uncovering market opportunities and employs them within a disciplined framework that results in efficient exposures. 
                </p>
                <p className="text-neutral-600 text-sm font-light">
                    With a robust infrastructure and talented investment professionals, 
                    primeworldfinance Investments offers clients the scale of a large asset management firm,
                    with the benefits of a versatile investment platform – flexibility and customization.  
                </p>
               </div>

              <div>
                <img src={phoneImg} alt="hand-holding-card" />
              </div>

                
            </article>

            <article className="bg-teal-900">

              <AdditonalInfo
                icon={<FaChartColumn/>}
                title='financial planning'
                info='These days, it’s more important than ever to have a plan. Our version of financial planning not only gives you the confidence
                 to know you’re ready for anything, but is also designed to help you reach all your goals in the days ahead.'
              />

             <AdditonalInfo
                icon={<FaMedal/>}
                title='certified company'
                info='These days, it’s more important than ever to have a plan. Our version of financial planning not only gives you the confidence
                 to know you’re ready for anything, but is also designed to help you reach all your goals in the days ahead.'
              />


            </article>
        </section>
     );
}
 
export default WhoWeAre;


function AdditonalInfo({icon, title, info}) {
    return ( 
        <div className="text-white">
            <h1 className="">
                {icon}
             <span className="uppercase text-xs">{title}</span>
            </h1>
            <p className="font-light text-neutral-400">
                {info}
            </p>
        </div>
     );
}