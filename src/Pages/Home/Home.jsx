import React from 'react';
import Header from '../../Components/Header/Header';
import RecentProducts from '../../Components/RecentProducts/RecentProducts';
import { useLoaderData } from 'react-router';

const Home = () => {
   const cards = useLoaderData();
   console.log(cards);
   
    return (
        <div>
            <Header></Header>
            <RecentProducts cards={cards}></RecentProducts>
        </div>
    );
};

export default Home;