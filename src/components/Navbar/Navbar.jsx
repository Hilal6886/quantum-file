import React, {useState} from 'react';
import './navbar.css'

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const ShowNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar= ()=>{
        setActive('navBar ')
    }
  
    return(
        <section className="navBarSection">
        <header className="header flex">
                <div className="logoDev">
                    <a href="/" className="logo">
                        <h1 className="flex">
                        Quantum Tour And Trevels
                        </h1>

                    </a>

                </div>
                <div className={active}>
                 <ul className="navLists flex">
                    <li className="navItem">
                        <a href="/" className="navLink">HOME</a>

                    </li>

                    <li className="navItem">
                        <a href="/" className="navLink">ABOUT</a>

                    </li>

                    <li className="navItem">
                        <a href="/" className="navLink">SERVISES</a>

                    </li>

                    <li className="navItem">
                        <a href="/" className="navLink">CONTACT</a>
                        </li>
                       
                        <li className="navItem">
                        <a href="/" className="navLink">OFFERS</a>
                        </li>
                        <li className="navItem">
                        <a href="/" className="navLink">BLOG</a>
                        </li>
                    
                        <button className="btn">
                            <a href="/">Book Now</a>
                        </button>

            

                

                 </ul>
                 <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>

                 </div>
                </div>
               
                 

                 <div onClick={ShowNav}className="toggleNavbar">
                    <TbGridDots className="icon"/>
                    
                 </div>

        </header>

        </section>
    )
}
export default Navbar