import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import turbineImg from '../assets/img1/environmentally-friendly-renewable-energy-12153665.jpeg'


const HomePage = () => {
    return ( 
        <section>
            <header className="z-10 absolute w-full">
              <NavBar/>
            </header>

            <main className="">
             <article className="">
             <Hero
               img={turbineImg}
              />
             </article>
            </main>

            <footer>

            </footer>

        </section>
     );
}
 
export default HomePage;