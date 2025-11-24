import ArrifedItem from './ArrifedItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Arrifed({ items }) {
  return (
    <section className="flex  py-16">
      <div className="container mx-auto">
        <div className=" w-full px-4 mb-4">
          <div className="flex justify-center text-center mb-4">
            <h3 className="text-2xl capitalize font-semibold">
              Just Arrived <br className="" />
              this summer for you
            </h3>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <ArrifedItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Arrifed;
