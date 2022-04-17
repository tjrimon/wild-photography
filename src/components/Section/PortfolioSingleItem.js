import React from 'react';

const PortfolioSingleItem = ({ portfolio }) => {
    const { img } = portfolio
    return (
        <div className='text-center w-[350px] lg:w-[400px] mx-auto'>
            <img className='rounded-t-md' src={img} alt="" />
        </div>
    );
};

export default PortfolioSingleItem;