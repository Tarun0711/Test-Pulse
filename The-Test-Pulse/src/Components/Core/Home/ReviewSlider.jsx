import React, { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";

import ReviewsCard from "./ReviewsCard";

const reviews = [
    {
      id: 1,
      Uname: "John Doe",
      review: "This is a great product!",
      rating: 5,
    },
    {
      id: 2,
      Uname: "Jane Doe",
      review: "I love this product!",
      rating: 4,
    },
    {
      id: 3,
      Uname: "Bob Smith",
      review: "This product is amazing!",
      rating: 5,
    },
    {
      id: 4,
      Uname: "Alice Johnson",
      review: "I'm so happy with this product!",
      rating: 4,
    },
    {
      id: 5,
      name: "Mike Brown",
      review: "This product is the best!",
      rating: 5,
    },
    {
      id: 6,
      Uname: "John Doe",
      review: "This is a great product!",
      rating: 5,
    },
    {
      id: 7,
      Uname: "Jane Doe",
      review: "I love this product!",
      rating: 4,
    },
    {
      id: 8,
      Uname: "Bob Smith",
      review: "This product is amazing!",
      rating: 5,
    },
    {
      id: 9,
      Uname: "Alice Johnson",
      review: "I'm so happy with this product!",
      rating: 4,
    },
    {
      id: 10,
      name: "Mike Brown",
      review: "This product is the best!",
      rating: 5,
    },
  ];

function ReviewSlider() {
  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full "
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <ReviewsCard review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewSlider;