import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import Card from "../components/card"; 
import useProducts from "../hooks/useProducts"; 

export default function Slider() {
  const { products, isLoading, error } = useProducts("limit=5&skip=30"); 

  return (
    <div>
   
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
        {products?.slice(0, 6)?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card 
              id={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              discountPercentage={item.discountPercentage}
              rating={item.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
