// import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../../config/axios";

function Carousel (){
  // const [caro, setCaro] = useState([])
  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //       try{
  //           const res = await axiosInstance.get(`/caro/`)
  //           setCaro(res.data)
  //       }catch(err){
  //           console.log(err)
  //       }
  //   }
  //   fetchData()
  // })

  return (
    <div className="container-xxl container-xxl position-relative p-0">
      <div className="col-lg">
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active"><img src="./carousel/c01.jpg" className="d-block w-100" alt="first carousel"/></div>
              <div className="carousel-item"><img src="./carousel/c02.jpg" className="d-block w-100" alt="carousel"/></div>
              <div className="carousel-item"><img src="./carousel/c03.jpg" className="d-block w-100" alt="carousel"/></div>
              <div className="carousel-item"><img src="./carousel/c04.jpg" className="d-block w-100" alt="carousel"/></div>
              <div className="carousel-item"><img src="./carousel/c05.jpg" className="d-block w-100" alt="carousel"/></div>
                {/* {caro.map((carousel)=>(carousel.id>1 && <div key={carousel.id} className="carousel-item"><img src={carousel.path} className="d-block w-100" alt={carousel.description}/></div>))} */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>
    </div>

  )
}

export default Carousel;