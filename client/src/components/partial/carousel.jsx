import React from "react";
import CarouselListPath from "./carouselPhotos";


function CarouselPhoto(props){

      return(
        <div className={props.class}>
          <img src={props.imgPath} className="d-block w-100" alt={props.description}/>
        </div>
      )

}

function Carousel (){
  return (
    <div className="container-xxl container-xxl position-relative p-0">
      <div className="col-lg">
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {CarouselListPath.map((CarouselListPath)=><CarouselPhoto key={CarouselListPath.id} imgPath={CarouselListPath.path} description={CarouselListPath.description} class={CarouselListPath.class} />)}
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