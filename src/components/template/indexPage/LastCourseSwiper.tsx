'use client'
import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { TypeCourseBox } from '@/utils/types';
import CourseBox from '@/components/modules/CourseBox';

function LastCourseSwiper({ courses }: { courses: TypeCourseBox[] }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay:5000,
                disableOnInteraction: false
            }}
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
            modules={[Autoplay]}
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

export default LastCourseSwiper
