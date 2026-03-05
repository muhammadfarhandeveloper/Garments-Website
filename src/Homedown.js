import React from 'react'
import img3 from './images/img3.jpg';
import img1 from './images/img1.jpg';
import img7 from './images/img7.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Slider from './slider';
const Homedown = () =>{
    return(
        <>
  
  <Slider/>

        
    <h1 className="mt-5 text-center text-primary display-4 ">MEN's GARMENTS</h1>
   
     <div className="container mt-5">
     <div className="row mt-3">
     <div className="col-md-6">
     <img src={img3} width="100%" height="300px" alt='Garments Text'/>

     </div>

     <div className="col-md-6">
     
     <h2 className="pt-5">Men's Garments Awesome</h2>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
    
    <button className="btn btn-primary btn-lg">More...</button>
     </div>

     </div>

     <div className="row mt-5 pt-5">

     <div className="col-md-6">
     
     <h2 className="pt-5">Women's Garments Awesome</h2>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. </p>
    
    <button className="btn btn-primary btn-lg">More...</button>
     </div>
     <div className="col-md-6">
     <img src={img7} width="100%" height="300px" alt='Garments Text'/>

     </div>

     </div>

     </div>

     <img src={img1} className="mt-5" height="600px"  width="100%" alt='Garments Text'/>

     <Footer/>
   
        </>
    )
}



export default Homedown;