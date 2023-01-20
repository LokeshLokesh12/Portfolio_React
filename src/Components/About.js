import React,{Fragment,useEffect} from 'react'

function About() {
    useEffect(()=>{
        let intro = document.querySelector('.intro-container')
        let introHandler = (event)=>{
            let target = event.target
    // console.log(event);

    // console.log(target.tagName);
    if(target.className !== "intro-container" ){
        target.classList.add('rubberBand');
        target.classList.add('animated');
    
        setTimeout(()=>{
            target.classList.remove('rubberBand');
            target.classList.remove('animated');
        },700)      
    }
    }
        intro.addEventListener("mouseover",introHandler)
    return ()=>{
        intro.removeEventListener("mouseover",introHandler)

    }
    })
  return (
    <Fragment>
        {/* <!-- about section --> */}
        <div className="main_main">
            <div className="about" id="about">
                    <img className="bc" src="./Assets/jfbj.svg" alt="" onClick={false}/>
                    <h1 className="work-text">WORK</h1>
                    {/* <!-- my porttfolio word --> */}
                    <div className="about-intro ">
                        <h1 className="myPort intro-container green"> 
                            <span className="blas blast-" style={ {'opacity':1}}>M</span>
                            <span className="blas blast-b" style={ {'opacity':1}}>Y</span>
                            <span className="blas blast-" style={ {'opacity':1}}>P</span>
                            <span className="blas blast-" style={ {'opacity':1}}>O</span>
                            <span className="blas blast-" style={ {'opacity':1}}>R</span>
                            <span className="blas blast-" style={ {'opacity':1}}>T</span>
                            <span className="blas blast-" style={ {'opacity':1}}>F</span>
                            <span className="blas blast-" style={ {'opacity':1}}>O</span>
                            <span className="blas blast-" style={ {'opacity':1}}>L</span>
                            <span className="blas blast-" style={ {'opacity':1}}>I</span>
                            <span className="blas blast-" style={ {'opacity':1}}>O</span>
                        </h1>
                    {/* <img className="bc" src="./Assets/jfbj.svg" alt=""/> */}
                    </div>
            {/* <!-- my potyfolio para --> */}
            
            <p className="about-para">
            I studied electronic and communication engineering. In my final year,
            I realize my serious passion in web development so learned front-end technologies such as <strong className='con-a'>HTML, CSS, JAVASCRIP, REACTjs and REST API</strong> at Edureka, 
            Now I am looking for a job that improves my skills and helps me to achieve my dreams in my career,
               <br />
            And there is 
            a small gallery of recent projects chosen by me. I worked on those projects for my studies.
            I'm ready to build a website for you, So have <a href="#contact" className="con-a">contact</a> with me.
                <span className="span-bad">
                “A bad website is like a grumpy salesperson.”
                </span>
            </p>
                {/* <!-- airtel,zomato,netflix,weather box --> */}
                <div className="img-con">
                    <div className="project">
                        <a href="https://stunning-puffpuff-8cba7a.netlify.app/"  className="box">Airtel</a>
                        <a href="https://cozy-bonbon-d00cb5.netlify.app/" className="box">zomato </a>
                        <a href="https://dapper-mooncake-908bb2.netlify.app/show" className="box">netflix </a>
                        <a href="https://lokeshlokesh12.github.io/weather_app/" className="box">weather</a>
                    </div>
                </div>
               
            </div>
        </div>

    </Fragment>
  )
}

export default About