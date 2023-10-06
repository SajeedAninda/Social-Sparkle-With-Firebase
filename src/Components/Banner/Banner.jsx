import React from 'react';
import banner1 from "../../assets/BannerImg/Banner1.jpg";
import banner2 from "../../assets/BannerImg/Banner2.jpg";
import banner3 from "../../assets/BannerImg/Banner3.jpg";
import banner4 from "../../assets/BannerImg/Banner4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[85vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-fit md:min-h-[50vh] lg:min-h-[70vh] relative"
                    style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="absolute w-full h-full bg-[#85D7A9] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content lg:-mt-20">
                        <div className="">
                            <h1 className="mb-5 text-white text-3xl lg:text-7xl font-extrabold">Where Every Event <br /> Finds Its Digital Stage <br /> Crafted with Care</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-white text-black border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white text-black border-none">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-fit md:min-h-[50vh] lg:min-h-[70vh] relative"
                    style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="absolute w-full h-full bg-[#85D7A9] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content lg:-mt-20">
                        <div className="">
                            <h1 className="mb-5 text-white text-3xl lg:text-7xl font-extrabold">Turning Ideas <br /> Into <br /> Unforgettable Events</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-white text-black border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white text-black border-none">❯</a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-fit md:min-h-[50vh] lg:min-h-[70vh] relative"
                    style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="absolute w-full h-full bg-[#85D7A9] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content lg:-mt-20">
                        <div className="">
                            <h1 className="mb-5 text-white text-3xl lg:text-7xl font-extrabold">Your Events, Our Expertise <br /> Crafting Unforgettable <br /> Memories Online.</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-white text-black border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-white text-black border-none">❯</a>
                </div>
            </div>



            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-fit md:min-h-[50vh] lg:min-h-[70vh] relative"
                    style={{ backgroundImage: `url(${banner4})` }}>
                    <div className="absolute w-full h-full bg-[#85D7A9] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content lg:-mt-20">
                        <div className="">
                            <h1 className="mb-5 text-white text-3xl lg:text-7xl font-extrabold">Empowering <br /> Social Events Digitally <br /> So You Can Focus <br /> on What Matters</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-white text-black border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white text-black border-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
