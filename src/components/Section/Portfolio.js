import React, { useEffect, useState } from 'react';
import PortfolioSingleItem from './PortfolioSingleItem';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])
    return (
        <div className='py-28 bg-gray-200'>
            <h3 className='text-center pb-8 text-4xl font-bold uppercase'>My Portfolio</h3>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 container mx-auto'>
                {portfolio.map(portfolioItem => <PortfolioSingleItem key={portfolioItem.id} portfolio={portfolioItem}></PortfolioSingleItem>)}
            </div>
        </div>
    );
};

export default Portfolio;