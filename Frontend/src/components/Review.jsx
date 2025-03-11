import React from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    text: "This NGO is doing an incredible job. The impact they have on underprivileged communities is truly commendable!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "A wonderful experience volunteering with them. Their dedication and transparency make them stand out.",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    text: "Highly recommended! The programs they run are well-organized and effective.",
    rating: 5,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -right-15 max-md:-right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-600 p-2 rounded-full hover:bg-red-700"
  >
    <ChevronRight className="text-white w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute -left-15 max-md:-left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-600 p-2 rounded-full hover:bg-red-700"
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </div>
);


const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
};

const Review = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-8">User <span className="text-red-600">Reviews</span></h2>
      <div className="max-w-[80%] max-md:max-w-[90%] mx-auto">
        <Slider {...settings} className="bg-[#d3d0d0] max-md:bg-transparent p-5 rounded-2xl">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#fff0f0] p-6 rounded-lg shadow-md max-w-[90%] min-h-[16rem] flex flex-col justify-center items-center">
              <p className="text-lg italic mt-5">"{review.text}"</p>
              <div className="flex justify-center mt-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="font-bold text-lg">- {review.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Review;
