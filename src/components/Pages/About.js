import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faGithub, faLinkedin, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import person from '../../images/person.png'

const About = () => {
    return (
        <div className=' bg-gray-200'>
            <div className='grid grid-cols-1 md:grid-cols-2 py-20 md:py-32 container justify-center mx-auto items-center'>
                <div className='mx-auto md:text-left text-center order-2 mt-12 md:mt-0 md:order-none'>
                    <h3 className='text-4xl font-semibold font-mono '>TJ Rimon</h3>
                    <p className='w-[300px] py-3 text-lg'>Hello everyone, I'm a front-end developer. My goal is to get a intern or job under a good team where I can learn properly. In future I'll learn PHP, Laravl, Wordpress for full-stack development.</p>
                    <h4 className='text-black font-semibold text-lg pb-3'>Contact Me</h4>
                    <div>
                        <FontAwesomeIcon className='pr-2 text-3xl text-[#1877F2]' icon={faFacebook} />
                        <FontAwesomeIcon className='pr-2 text-3xl text-[#1D9BF0]' icon={faTwitter} />
                        <FontAwesomeIcon className='pr-2 text-3xl text-blacks' icon={faGithub} />
                        <FontAwesomeIcon className='pr-2 text-3xl text-[#3FABD4]' icon={faVimeo} />
                        <FontAwesomeIcon className='pr-2 text-3xl text-blacks' icon={faBehance} />
                        <FontAwesomeIcon className='pr-2 text-3xl text-[#0073B1]' icon={faLinkedin} />



                    </div>

                </div>
                <div className='mx-auto'>
                    <img className='w-[400px] md:w-[550px]' src={person} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;