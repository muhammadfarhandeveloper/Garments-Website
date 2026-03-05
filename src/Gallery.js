import React from 'react'
import Data from './data.json'
import Footer from './Footer';
import Slider from './slider';

const Gallery = () =>{
      

    return(
        <>
               <Slider/>

        <h2 className="mt-5 mb-5 display-4 text-primary text-center">Image Gallery </h2>
        <div className="container mb-5">
                  <div className="row">

      {
          Data.map((res) =>{
         return(
         <>
         <div className="col-md-4 mt-5">
                    <div id="card">
                    <div className="card-img">
                    <img src={res.imgsrc}  width="100%" height="300px" alt='Garments Text' />
                    </div>
                    <div className="card-body">
                    <h3> {res.img_title}</h3>
                    <p>{res.img_para}</p>
                    <button className="btn btn-primary btn-block" >Add to Cart</button>

                    </div>
                    </div>
                    </div>

         </>
         )
          })


      }
          </div>

          </div>

          <Footer/>



        </>
    )
}

export default Gallery;