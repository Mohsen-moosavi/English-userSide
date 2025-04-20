'use client'
import React from 'react'
import CourseBox, { TypeCourseBox } from '@/components/modules/CourseBox'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function LastCourseSwiper({ courses }: { courses: TypeCourseBox[] }) {
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
            {courses.map((course: TypeCourseBox) => (
                <SwiperSlide key={course.id}>
                    <CourseBox {...course} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default LastCourseSwiper
