import { TypeCourseBox } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function CourseBox({name,slug,cover,levelName,levelId,score,teacherName,teacherId,offPercent,price} : TypeCourseBox) {
  return (
    <div className="w-[full] rounded-xl overflow-hidden shadow-center p-2 transition-all hover:-translate-y-2">
    <Link href={`/courses/${slug}`}>
        <div className="overflow-hidden rounded-xl shadow-center">
            <Image src={cover} width={300} height={300} className="w-full 2xl:max-h-[270px] xl:max-h-[220px] lg:max-h-[170px] md:max-h-[196px] sm:max-h-[158px] max-h-[340px]" alt="course img"/>
        </div>
    </Link>
    <div className="flex flex-col justify-start px-3">
        <div className="relative text-center">
            <Link href={`/courses/${slug}`}>
                <h4 className="p-3 bg-[#166d91]/20 rounded-xl text-custom-dark-blue font-bold max-sm:text-sm">{name}</h4>
            </Link>
            <span className="absolute bottom-[-10px] bg-custom-dark-blue !text-white hover:!text-sky-500 rounded-xl px-3 h-[19px] leading-[20px] sm:h-[25px] sm:leading-[27px] left-[15%] max-sm:text-[10px] text-[12px]">{levelName}</span>
            <span className="absolute flex gap-x-1 items-center justify-center bottom-[-10px] right-[15%] bg-custom-dark-blue rounded-xl px-1 sm:px-2 h-[19px] leading-[20px] sm:h-[25px] sm:leading-[27px] max-sm:pt-1 text-white max-sm:text-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="pb-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <span>{Number(score) === 5 ? '5': Number(score).toFixed(1)}</span>
            </span>
        </div>
        <div className="flex items-center justify-between mt-5 h-[58px]">
            <div className="flex justify-start items-center">
                <div className="p-3 bg-custom-dark-blue rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#eee" className="bi bi-person-video3" viewBox="0 0 16 16">
                        <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
                    </svg>
                </div>
                <span className="p-1 bg-[#166d91]/20 rounded-l-xl text-custom-dark-blue max-sm:text-sm">{teacherName}</span>
            </div>
            {offPercent ? (
            <div className="flex flex-col items-end">
            <del className="text-[12px] text-custom-gray">{Number(price).toLocaleString()}</del>
            <span className="text-end text-custom-dark-blue font-bold leading-[16px] mt-2">{Number(price) - Math.round((Number(price)*Number(offPercent))/100)}<br/><span
                    className="font-medium text-custom-gray">تومان</span></span>
        </div>
            ):(
                <div className="flex flex-col items-end">
                    {Number(price)===0 ? (
                        <span className="text-end text-custom-dark-blue font-bold leading-[16px] mt-2">رایگان</span>
                    ) :(
                        <span className="text-end text-custom-dark-blue font-bold leading-[16px] mt-2">{Number(price).toLocaleString()}<br/><span
                        className="font-medium text-custom-gray">تومان</span></span>
                    )}
            </div>
            )}

        </div>
    </div>
</div>
  )
}

export default CourseBox