import React from 'react';

const Home = () => {
    return (
        <div>
            {/* Header banner section start */}
            <div className='h-[700px] bg-[url("https://i.ibb.co/6XwgXqv/header-bg.jpg")] bg-cover bg-left bg-no-repeat'>
                <div className='flex justify-around container'>
                    <div className='md:w-1/2'></div>
                    <div className='text-white md:w-1/2 flex items-center h-[650px] px-6'>
                        <div>
                            <h3 className='font-bold text-5xl '> Discover a new world of wilding...</h3>
                            <p className='text-lg my-5'>I'm here for your. Travel with me in the wild. You will never forget the experience. Easy booking. You can book easily by card or mobile banking. You can stay with me in the forest if you want </p>
                            <div>
                                <button className=' text-lg bg-indigo-600 text-white py-2 px-8 rounded-full'>Book Now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header banner section end */}
        </div>
    );
};

export default Home;