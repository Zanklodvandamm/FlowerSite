import React from 'react'

export default function SecondBanner() {
  return (
    <div className='second-banner'>
        <div className='second-banner-first-container'>
            <div className='second-banner-first-flower'>
                <img src='./img/secondbannerflower1.png'></img>
            </div>
            <div className='second-banner-first-text'>
                <b>Summer cactus</b>
                <b className='second-banner-b'>& succulents</b>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button>Find More</button>
            </div>
        </div>
        
        <div className='second-banner-second-container'>
            <div className='second-banner-second-flower'>
                <img src='./img/secondbannerflower2.png'></img>
            </div>
            <div className='second-banner-second-text'>
                <b>Summer cactus</b>
                <b className='second-banner-two-b'>& succulents</b>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button>Find More</button>
            </div>
        </div>
       
    </div>
  )
}
