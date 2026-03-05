import React from 'react'
import Footer from './Footer';
import Slider from './slider';


const About = () =>{
    return(
        <>
               <Slider/>
        <h1 className="mt-5 display-2 text-center text-primary">ABOUT US</h1>
        <h3 className="mt-3 text-center text-primary">Welcome on About us page</h3>
       
       <div className="container mb-5">
        <div className="row mt-5">
            <div className="col-md-6">
            <img src="./images/img5.jpg" width="100%" height="400px" alt='Garments Text' />
            </div>
            <div className="col-md-6">
             <p className="mt-3">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             </p>

            </div>
        </div>

       </div>

      <div >

      </div>
     
     <Footer/>
     </>
    )
}


export default About;