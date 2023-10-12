import React from 'react'
import './footer.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: '#fdfbfb', marginRight:"1rem"}} /> 
                </div>
                <div>
                  <p>sdbvkfnkjfn</p>
                  <p>sdbvkfnkjfn</p>
                </div>
                <div className='phone' >
                  <h4>
                  <FaPhone size={20} style={{color: '#fdfbfb', marginRight:"1rem"}} />
                    08109088360 
                  </h4>
                </div>
                <div className='Email' >
                  <h4>
                  <FaMailBulk size={20} style={{color: '#fdfbfb', marginRight:"1rem"}} />
                    destinyojei@gmail.com 
                  </h4>
                </div>
            </div>
            <div className='right'>
              <h4>About the company</h4>
              <p>fdvkmvk jiojtiogti gviov ioy ioyvio ioyn<br />
                dojofndjnfuc ioc fjrifjeriofjciofjcrfierf<br />
                ocjiofjriocjrioriofiorjciorjiociorciorgio<br />
                jnjkrncjrnfjkrnfjkrnfjkrnfjkrnjkrngjkrjkgjgc

              </p>
              <div className='social-link'>
              <FaFacebook size={30} style={{color: '#fdfbfb',
               marginRight:"1rem"}} /> 

              <FaTwitter size={30} style={{color: '#fdfbfb',
               marginRight:"1rem"}} /> 

              <FaLinkedin size={30} style={{color: '#fdfbfb',
               marginRight:"1rem"}} /> 

              <FaGithub size={30} style={{color: '#fdfbfb',
               marginRight:"1rem"}} /> 

              </div>
            </div>
        </div>

    </div>
  )
}

export default footer