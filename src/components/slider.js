import React from "react";
import slider_01 from "../assets/img/slider-01.jpg";
import slider_02 from "../assets/img/slider-02.jpg";
import slider_03 from "../assets/img/slider-03.jpg";
const Slider = () => {
    const data = [
        { name: "image 1", image: slider_01 },
        { name: "image 2", image: slider_02 },
        { name: "image 3", image: slider_03 }]
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {data.map((item, key) => (
                        <div className="carousel-item active" key={key}>
                            <img src={item.image} className="d-block w-100" alt={item.name} />
                        </div>
                    ))}
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
        </>
    )
}
export default Slider;