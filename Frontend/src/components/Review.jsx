import React from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
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

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Review = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-8">User <span className="text-red-600">Reviews</span></h2>
      <div className="max-w-[70%] max-md:max-w-[90%] mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#f9efef] p-6 rounded-lg shadow-md max-w-[90%] min-h-[16rem]">
              <p className="text-lg italic">"{review.text}"</p>
              <div className="flex justify-center">
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
