import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "https://www4.wng.org/_1200x630_crop_center-center_82_none/1311EI-0845.jpg?mtime=1617724605",
    "https://vesti-k.ru/i/7c/7c22605a7180bdbb8091c0f94313b967.jpg",
    "https://avatars.mds.yandex.net/i?id=05bd12e8b1b246b6595d8c504f1d100ca7a0304a-8474952-images-thumbs&n=13",
    "https://i.ytimg.com/vi/Vt1tm-xYdc0/maxresdefault.jpg",
    "https://diapindia.org/assets/images/Indian-Championship.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div className="w-[100%] mx-auto mt-0 z-0 bg-gray-200">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center my-0">
            <img
                className="w-[98%] mx-auto h-[500px] md:h-[500px] object-fill rounded-sm shadow-lg my-5"
              src={img}
              alt={`slide-${index + 1}`} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
