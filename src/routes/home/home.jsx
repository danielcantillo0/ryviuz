import React from 'react';
import './home.css'
import Categories from '../../components/categories/categories';


const Home = () => {
    return (
    <>
        <div className="Header">
            <h1>Ryviuz</h1>
        </div>
        <div>
            <Categories/>
        </div>
        <div>
            Contact me: danielcantillo8@gmail.com
        </div>
    </>
    )
}

export default Home;