import Title from "./Title";

const HowWeWork = () => {
    return ( 
        <section>
            <Title>
              <h4>How We Work</h4>
              <h1> 4 Quick Steps To Use Our Services</h1>
            </Title>

            <article>
              <p className="font-light"></p>

              <Step/>
               
            </article>


        </section>
     );
}
 
export default HowWeWork;


function Step({firstIcon, secondIcon, firstTitle, secondTitle, firstInfo, secondInfo}) {
    return ( 

     );
}