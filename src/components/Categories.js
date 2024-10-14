import React from 'react'

export default function Categories() {
  return (
    <div className='grid-container'>
      <div className='sidebar'>
        <div className='categoties-container'>
          <b>Categories</b>
          <ul className='designUlBlock'>
            <li>House Plants <span>(33)</span></li>
            <li>Potter Plants <span>(12)</span></li>
            <li>Seeds <span>(65)</span></li>
            <li>Small Plants <span>(39)</span></li>
            <li>Big Plants <span>(23)</span></li>
            <li>Succulents <span>(17)</span></li>
            <li>Trerrariums <span>(19)</span></li>
            <li>Gardening <span>(13)</span></li>
            <li>Accessories <span>(18)</span></li>
          </ul>
        </div>
        <div className='price-range-container'>
          <b>Price Range</b>
          <p>Price:</p>
          <button>Filter</button>
        </div>
        <div className='size-container'>
          <b>Size</b>
          <ul className='designUlBlock'>
            <li>Small <span>(119)</span></li>
            <li>Medium <span>(86)</span></li>
            <li>Large <span>(78)</span></li>
          </ul>
          <div className='img-sale'></div>
        </div>
      </div>
      <div className='sort'>
        <div className='sort-text'>
          <ul className='designUlInline'>
            <li>All Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className='sorting'>
          <p>Short by:</p>
          <select>Default sorting</select>
        </div>
      </div>
      <div className='products'>
        <div className='item'>
          <img src='./img/productflower1.png'></img>
          <p>Barberton Daisy</p>
          <p>price: 119.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower2.png'></img>
          <p>Angel Wing Begonia</p>
          <p>price: 169.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower3.png'></img>
          <p>African Violet</p>
          <p>price: 199.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower4.png'></img>
          <p>Beach Spider Lily</p>
          <p>price: 129.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower5.png'></img>
          <p>Blushing Bromeliad</p>
          <p>price: 139.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower6.png'></img>
          <p>Aluminum Plant</p>
          <p>price: 179.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower7.png'></img>
          <p>Bird's Nest Fern</p>
          <p>price: 99.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower8.png'></img>
          <p>Broadleaf Lady Palm</p>
          <p>price: 59.00$</p> 
        </div>

        <div className='item'>
          <img src='./img/productflower9.png'></img>
          <p>Chinese Evergreen</p>
          <p>price: 39.00$</p> 
        </div>
      </div>
      <div className='nav'>
        <div className='nav-buttons'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>&gt;</button>
        </div>
        
      </div>
    </div>
  )
}