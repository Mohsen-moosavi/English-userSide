import { RelatedCourseType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RelatedCourseBox({name,slug,cover}:RelatedCourseType) {
  return (
    <div
    className="border-2 border-solid border-custom-dark-blue rounded-xl overflow-hidden hover:shadow-2xl">
    <Link href={`/courses/${slug}`} className="flex items-center justify-start gap-x-2">
        <Image src={cover} width={100} height={60}
            className="max-w-[80px] max-h-[48px]  md:max-w-[100px] md:max-h-[60px] m-0 border-none rounded-none" alt={name} />
        <span className='max-sm:text-sm truncate'>{name}</span>
    </Link>
</div>
  )
}
