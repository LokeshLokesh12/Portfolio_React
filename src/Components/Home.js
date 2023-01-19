import React,{Fragment,useEffect} from 'react'
import {gsap,} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Home() {
    useEffect(()=>{
        
    },[])
  return (
    <Fragment>
        <div className="main">
        <div className="main_main">
            <div className="real">
                {/* <!-- home section --> */}
                {/* <div className="home" id="home"> */}
                    <div className="intro">
                    <p className="html"></p>
                        <h1 className="intro-text">
                            INTRO
                            
                        </h1>
                        <h1 className="intro-container">
                            <span className="blast blast-h" style={ {'opacity':1}}>H</span>
                            <span className="blast blast-i" style={ {'opacity':1}}>i</span>
                            <span className="blast blast-com-1" style={ {'opacity':1}}>,</span> <br/>
                            <span className="blast blast-i" style={ {'opacity':1}}>I</span>
                            <span className="blast blast-sq" style={ {'opacity':1}}>'</span>
                            <span className="blast blast-m" style={ {'opacity':1}}>M</span>
                            <img className="l-gli" src="./Assets/istockphoto-removebg-preview.png" alt=""/>
                            <span className="blast blast-o" style={ {'opacity':1}}>O</span>
                            <span className="blast blast-k" style={ {'opacity':1}}>K</span>
                            <span className="blast blast-k" style={ {'opacity':1}}>I</span>
                            {/* <!-- <span className="blast blast-e" style={ {'opacity':1}}>E</span>
                            <span className="blast blast-a" style={ {'opacity':1}}>S</span>
                            <span className="blast blast-h" style={ {'opacity':1}}>H</span>  --> */}
                            <span className="blast blast-com-2" style={ {'opacity':1}}>,</span> <br/>
                            <span className="blast blast-w" style={ {'opacity':1}}>W</span>
                            <span className="blast blast-e" style={ {'opacity':1}}>E</span>
                            <span className="blast blast-b" style={ {'opacity':1}}>B</span>
                            <span className="blast blast-d" style={ {'opacity':1}}>D</span>
                            <span className="blast blast-e" style={ {'opacity':1}}>E</span>
                            <span className="blast blast-" style={ {'opacity':1}}>V</span>
                            <span className="blast blast-" style={ {'opacity':1}}>E</span>
                            <span className="blast blast-" style={ {'opacity':1}}>L</span>
                            <span className="blast blast-" style={ {'opacity':1}}>O</span>
                            <span className="blast blast-" style={ {'opacity':1}}>P</span>
                            <span className="blast blast-" style={ {'opacity':1}}>E</span>
                            <span className="blast blast-r" style={ {'opacity':1}}>R    </span>
                        </h1>
                        <p className="dev-til">
                            Front-end web developer
                        </p>
                        <a className="contact-but" href="#contact">contact me !</a>
                    </div>
                {/* </div> */}
            
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Home