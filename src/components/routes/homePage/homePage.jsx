import React from 'react'
import "./homePage.scss"

const HomePage = () => {
   return (
      <div className="homePage">
         <div className='textContainer'>
            <div className='wrapper'>
               <h1 className="title">
                  Find Real Esate & Get Your Dream Place
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aperiam? Illum, a. Exercitationem soluta repellendus non praesentium officia odio delectus debitis eum distinctio, optio, temporibus, veritatis itaque ratione accusantium?
               </p>

            </div>
         </div>
         <div className='imgContainer'>
            <img src="bg.png" alt="image" />
         </div>
      </div>
   )
}

export default HomePage