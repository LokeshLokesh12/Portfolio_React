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
                            <span className="blas blast-" style={ {'opacity':1}}>Y</span>
                            <span className="blast blast---" style={ {'opacity':1}}></span>
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
            I hold a degree in Electronic and Communication Engineering. During my final year, I discovered a deep passion for web development, 
            which led me to enhance my skills in front-end technologies, including HTML, CSS, JavaScript, React.js, and REST API, through training at Edureka. Currently, I am pursuing 
             <strong className='con-a'>HTML, CSS, JAVASCRIP, REACTjs and REST API</strong>, through training at Edureka. Currently, I am pursuing a B.Tech in Information Technology to further refine my expertise and advance my career goals. And,
            <br />
            There is 
            a small gallery of recent projects chosen by me. I worked on those projects for my studies.
            am eager to assist you in building a website tailored to your needs. Please don't hesitate to <a href="#contact" className="con-a">contact</a> me for further collaboration.
            <br />
                <span className="span-bad">
                “A bad website is like a grumpy salesperson.”
                </span>
            </p>
                {/* <!-- airtel,zomato,netflix,weather box --> */}
                <div className="img-con">
                    <div className="project">
                        <a href="https://stunning-puffpuff-8cba7a.netlify.app/"  className="box">Airtel</a>
                        <a href="https://cozy-bonbon-d00cb5.netlify.app/" className="box">zomato </a>
                        <a href="https://crosby-demo.netlify.app/" className="box">crosby </a>
                        <a href="https://react-clone-tesla.netlify.app/" className="box">tesla</a>
                        {/* <a href="https://lokeshlokesh12.github.io/weather_app/" className="box">weather</a> */}
                        {/* <a href="https://lokeshlokesh12.github.io/weather_app/" className="box">weather</a>
                        <a href="https://lokeshlokesh12.github.io/weather_app/" className="box">weather</a>
                        <a href="https://lokeshlokesh12.github.io/weather_app/" className="box">weather</a> */}
                    </div>
                </div>
               
            </div>
        </div>

    </Fragment>
  )
}

export default About