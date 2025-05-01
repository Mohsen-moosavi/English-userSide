import { TypeBookBox } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BookBox({name, cover, slug, courseCount }: TypeBookBox) {
    return (
        <div className="shadow-center rounded-2xl overflow-hidden">
            <Link href={`/books/${slug}`} className="text-center relative">
                <Image src={cover} alt="books" width={300} height={300} className='w-full 2xl:h-[281px] xl:h-[231px] lg:h-[182px] md:h-[205px] sm:h-[160px] max-sm:max-h-[349px] max-sm:h-full'/>
                    <div
                        className="bg-[#000000ab] backdrop-blur-[2px] p-2 rounded-lg absolute w-[70%] right-2/4 translate-x-2/4 bottom-4">
                        <h4 className="max-sm:text-sm text-white">مجموعه آموزش کتاب های <br/><strong
                            className="text-custom-blue">{name}</strong></h4>
                        <span className="max-sm:text-[12px] text-[#ffa500]">{courseCount} بخش</span>
                    </div>
                    <div
                        className="absolute w-full h-full top-0 left-0 bg-[#166d91]/40 opacity-0 hover:opacity-100 transition-all">
                    </div>
            </Link>
        </div>
    )
}

export default BookBox
