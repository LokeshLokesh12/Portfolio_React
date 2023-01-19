import React,{Fragment,useRef} from 'react'
import emailjs from '@emailjs/browser';
function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_s06ptga',
       'template_d1aol7m',
        form.current,
        'E8Fx3XiyOydkpun23')
      .then((result) => {
          console.log(result.text);
          if (result.status === 200) {
            alert("mail sent successfully")
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Fragment>
      <div className="main_main">
      <div className="contact" id='contact'>
        <h1 className="intro-container green">
            <span className="blast blast-c" style={ {'opacity':1}}>C</span>
            <span className="blast blast-o" style={ {'opacity':1}}>O</span>
            <span className="blast blast-n" style={ {'opacity':1}}>N</span>
            <span className="blast blast-t" style={ {'opacity':1}}>T</span>
            <span className="blast blast-a" style={ {'opacity':1}}>A</span>
            <span className="blast blast-c" style={ {'opacity':1}}>C</span>
            <span className="blast blast-t" style={ {'opacity':1}}>T</span>
            <span className="blast blast---" style={ {'opacity':1}}></span>
            <span className="blast blast-t" style={ {'opacity':1}}>M</span>
            <span className="blast blast-t" style={ {'opacity':1}}>E</span>
        </h1>
        <p className="about-para">
        I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.

        </p>
        <div className="form" >
          <form name='contact' className='contact_form' id='contact_form' ref={form} onSubmit={sendEmail}>
            <input type="text" id='name' placeholder='name' name='name' />
            <input type="email" id='email' placeholder='enter your email' name='email'/>
            <input type="text" placeholder='subject' id='subject' name='subject'/>
            <textarea name="message" id="body" cols="30" rows="10" placeholder='message'></textarea>
            <button className='contact-but'>send</button>
          </form>
        </div>
        {/* <div className="social">
          <a href="https://www.instagram.com/i_am_loksh_/"> 
          
          </a>
        </div> */}
       
        <div class="social">
            <a href="https://www.instagram.com/i_am_loksh_/"><i class="fa fa-instagram" aria-hidden="true"></i> instagtam</a>
            <a href="https://github.com/LokeshLokesh12"><i class="fa fa-github" aria-hidden="true"></i> github</a>
            <a href="https://www.linkedin.com/in/logeshwar-logeshwar-20295a23b/"><i class="fa fa-linkedin" aria-hidden="true"></i> linkedin</a>
        </div>
      </div>
      <p className="_html"></p>
      </div>

    </Fragment>
  )
}

export default Contact