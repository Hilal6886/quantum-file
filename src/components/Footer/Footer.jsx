import React, {useEffect} from 'react';
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
        }, [])
    return (
  <div className="footer">
    <div data-aos="fade-up" className="secContaine  grid">
        <div className="logoDiv">
            <div  data-aos="fade-up"className="footerLogo">
                <a href='/' className='logo'>
                    Quantum Tour & Trevels
                </a>
            </div>
        </div>
        <div data-aos="fade-up" className="socials flex">
            <ImFacebook className="iconv"/>
            <AiOutlineInstagram className="iconv"/>
            <CiTwitter className="iconv"/>


        </div>


    <div data-aos="fade-up"className="footerLinks">
        <span className="linkTitle">
            INFORMATION
        </span>
        <li>
            <a href='/'> DESTINATION</a>
        </li>
        <li>
            <a href='/'>SUPPORT</a>
        </li>
        <li>
            <a href='/'>OFFERS</a>
        </li>
        <li>
            <a href='/'>PRAVACY</a>
        </li>
    </div>
    <div  data-aos="fade-up"className="footerLinks">
        <span className="linkTitle">
            HELPFUL LINKS
        </span>
        <li>
            <a href='/'>HOME</a>
        </li>
        <li>
            <a href='/'>EXPLORE</a>
        </li>
        <li>
            <a href='/'>TRAVEL</a>
        </li>
        <li>
            <a href='/'>BLOG</a>
        </li>
    </div>
    <div  className="footerLinks">
        <span className="linkTitle">
            CONTACT US
        </span>
       <span className='phone'> +919149626415</span>
       <span className='email'> ratherhilal68@gmail.com</span>
    </div>
    <div className="footerDev flex">
        <small>  © COPYRIGHTS RESERVED--- RATHER HILAL-- 2022 . All Rights Reserved</small>
    </div>
  </div>
  </div>
    )
}
export default Footer