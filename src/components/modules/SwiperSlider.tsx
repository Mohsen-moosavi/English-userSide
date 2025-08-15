'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TypeCourseBox } from '@/utils/types';
import CourseBox from './CourseBox';

function SwiperSlider({ courses }: { courses: TypeCourseBox[] }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
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
                  {courses.map((course: TypeCourseBox) => (
                <SwiperSlide key={course.id}>
                    <CourseBox {...course} />
                </SwiperSlide>
            ))}
    </Swiper>
  )
}

export default SwiperSlider
