import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='Banner'>
          <div className="content">
            <h1 className='title'> Movie name</h1>
              <div className="banner-buttons">
                 <button className='button'>Play</button>
                 <button className='button'>My list</button>
              </div>
              <h1 className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptate, id sed iure veniam recusandae debitis expedita mollitia rem neque consequatur eius quasi, animi reprehenderit quae inventore dolore officiis sequi.</h1>
              
          </div>
          <div className="fade">
              
          </div>
    </div>
  )
}

export default Banner