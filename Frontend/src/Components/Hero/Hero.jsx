import React from 'react';
import './Hero.css';
import Catagories from './Catagories';
import hearoIMG1 from '../../assets/Img/hero-img1.png';
import hearoIMG2 from '../../assets/Img/hero-img2.jpg';
import hearoIMG3 from '../../assets/Img/hero-img3.jpg';
import hearoIMG4 from '../../assets/Img/hero-img-4.jpg';

function Hero({updateFilterValue}) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-2 p-0">
                <Catagories updateFilterValue={updateFilterValue} />
            </div>
            <div className="col-lg-10 p-0">
                <div className="carousel slide " id="carouselIndicators" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className='indicators active active-Indicators' data-bs-target="#carouselIndicators" data-bs-slide-to="0" aria-label="Slide 1"></button>
                        <button className='indicators' data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='indicators' data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button className='indicators' data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            heroIMG.map((heroIMG, index) =>{
                              const {img, activity} = heroIMG;
                              return(
                                <div key={index} className={`carousel-item ${activity}`}>
                                    <img src={img} alt="shopLand bd || hero section's image" />
                                </div>
                              )
                            })
                          }
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next " data-bs-target="#carouselIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;

const heroIMG = [
  {
    img : hearoIMG1,
    activity : 'active'
  },
  {
    img : hearoIMG2
  },
  {
    img : hearoIMG3
  },
  {
    img : hearoIMG4
  }
]