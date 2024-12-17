import React from 'react';
import '../styles/home.scss';
import ImageSlider from '../components/ImageSlider';


function Home() {
  return (
    <div className='home'>
      <div className="home__content">
        <div className="left-section">
          <h2>vanilla Strawberry Caramel</h2>
          <p>Three classic flavors in one! Vanilla, Caramel, Strawberry Ice Cream
          gives your family three flavors to choose from for a perfect snack.</p>
          <button>Order</button>
        </div>
        <div className="right-section">
          <ImageSlider/>
        </div>
      </div>
    </div>
  )
}

export default Home;