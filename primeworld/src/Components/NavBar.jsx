// import './sidenav.css'
import { FaBars } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import logo from '../assets/img1/primeworld-l-768x163.png'

const NavBar = () => {


  function openNav() {
    document.getElementById('sidenav').style.width = '300px'
    document.getElementById('home').classList.toggle = 'dark'
  }


    return ( 
        <nav className="bg-transparent flex justify-between w-full h-16 p-4 nav z-10">
            <div>
               <img src={logo} alt="xavioenergylogo" className="w-48" /> 
            </div>

            <div className='lg:w-1/2'>
              <LargeScreenNav/>
            </div>

            <div className="flex iconbox">
              <FaBars style={{color:"teal", fontSize:'30px', cursor:'pointer'}} onClick={openNav} className='lg:hidden fill-teal-500'/>

            </div>
            
            {/* <SideNav/> */}

        </nav>
     );
}
 
export default NavBar;


// eslint-disable-next-line no-unused-vars
const SideNav = () => {

  function closeNav() {
    document.getElementById('sidenav').style.width = '0'
  }
  return ( 
      <article className="sidenav" id="sidenav">
     
        <h1 onClick={closeNav} className="cursor-pointer p-2">
          {/* <FaX/> */}
        </h1>
         <nav className='uppercase text-sm'>
         {/* <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/guide'>Guide</Link>
           </li>
           <li>
             <Link to='/why-invest-in-energy'>Why invest in energy</Link>
           </li>
           <li>
             <Link to='/investment-projects'>investment projects</Link>
           </li>
           <li>
             <Link to='/referral-program'>referral program</Link>
           </li>
           <li>
             <Link to='/terms'>Terms </Link>
           </li>
         </ul> */}
        </nav>
      </article>
   );
}


function LargeScreenNav() {
  return ( 
    <div className='lg:flex sm:hidden md:hidden desknav'>
      <ul className='lg:flex uppercase justify-evenly'>

         <li>
            contact us
           {/* <Link to='/'>Home</Link> */}
         </li>
         <li>guide</li>
         <li>about</li>
         <li>models</li>

      </ul>
    </div>
   );
}
