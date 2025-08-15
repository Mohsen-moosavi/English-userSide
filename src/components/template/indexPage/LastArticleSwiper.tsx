'use client'
import ArticleBox, { TypeArticleBox } from '@/components/modules/ArticleBox'
import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function LastArticleSwiper({ article }: { article: TypeArticleBox[] }) {
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
            {article.map((article: TypeArticleBox) => (
                <SwiperSlide key={article.id}>
                    <ArticleBox {...article} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default LastArticleSwiper
