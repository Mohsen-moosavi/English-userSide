'use client'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import BookBox, { TypeBookBox } from '@/components/modules/BookBox';

function LastBookSwiper({books}:{books:TypeBookBox[]}) {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                    {books.map((book: TypeBookBox) => (
                  <SwiperSlide key={book.id}>
                      <BookBox {...book} />
                  </SwiperSlide>
              ))}
      </Swiper>
    )
}

export default LastBookSwiper
