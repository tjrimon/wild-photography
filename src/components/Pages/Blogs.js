import React from 'react';

const Blogs = () => {
    return (
        // blog page content 
        <div className='md:flex justify-center'>
            <div className='grid items-center mx-auto justify-center mb-16 lg:grid-cols-2'>
                <div className='p-8 bg-gray-200 text-center mt-24 mx-6 w-[350px]'>
                    <img className='mx-auto' src='' alt="" />
                    <h3 className='text-3xl py-5 capitalize'>Q: What is the difference between authorization and authentication</h3>
                    <p><span className='font-bold'>Ans : </span> Authorization and Authentication is totally different topic. Authentication mean need to login. That's mean you need to login to see website's private components. In Authorization, it means the level of an user can access in the website.</p>
                </div>
                <div className='p-8 bg-gray-200 text-center mt-24 mx-6 w-[350px]'>
                    <img className='mx-auto' src='' alt="" />
                    <h3 className='text-3xl py-5'>Q: Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p><span className='font-bold'>Ans : </span> Firebase is a authentication system provided by google company. I use firebase because of it has a very good safety. Top level developer maintain it form google. We can use firebase login with username and password, github,twitter,facebook,microsoft,yahoo etc.</p>
                </div>
                <div className='p-8 bg-gray-200 text-center mt-24 mx-6 w-[350px]'>
                    <img className='mx-auto' src='' alt="" />
                    <h3 className='text-3xl py-5'>Q: What other services does firebase provide other than authentication?</h3>
                    <p><span className='font-bold'>Ans : </span> IT's company that provided and maintain by google developer. They have Cloud services, Authentication, Hosting, Cloud Storage, Google Analytics, Cloud Messaging etc. Those services makes our programming live easy.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;