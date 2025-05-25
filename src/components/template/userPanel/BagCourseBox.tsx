import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TypeBagCourseBox} from '@/utils/types'
import Swal from 'sweetalert2'

interface PageProps extends TypeBagCourseBox{
    removeFromBagHandler: (courseId: number) => void,
}

function BagCourseBox({ id, name, slug, cover, offPrice, price, removeFromBagHandler }: PageProps) {

    function removeBtnHandler() {
        Swal.fire({
            title: 'آیا از حذف دوره از سبد خرید اطمینان دارید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'تایید',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromBagHandler(id)
            }
        })
    }

    return (
        <div className="shadow-center rounded-2xl overflow-hidden">
            <div className="text-center relative">
                <Image src={cover} alt="books" width={300} height={300} className='w-full 2xl:h-[200px] xl:h-[180px] lg:h-[200px] md:h-[180px] sm:h-[200px] max-sm:max-h-[349px] max-sm:h-full' />
                <Link href={`/courses/${slug}`}
                    className="absolute w-full h-full top-0 left-0 bg-[#000]/40 opacity-0 hover:opacity-100 transition-all">
                </Link>
                <div className='backdrop-blur-[2px] p-2 rounded-b-lg absolute w-[70%] right-2/4 translate-x-2/4 top-0 text-white bg-[#185266bf]'>{name}</div>
                <div className='backdrop-blur-[2px] p-2 rounded-t-lg rounded-b-2xl absolute w-full bottom-0 text-white bg-[#185266bf] flex items-center justify-between'>
                    <div>
                        {offPrice ? (
                            <div className="flex flex-col items-start">
                                <del className="text-[12px] text-white/80">{Number(price).toLocaleString()}</del>
                                <span className="text-end text-white font-bold leading-[16px] mt-2">{offPrice}<span
                                    className="font-medium text-white mr-2">تومان</span></span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-start">
                                {Number(price) === 0 ? (
                                    <span className="text-end text-white font-bold leading-[16px]">رایگان</span>
                                ) : (
                                    <span className="text-end text-white font-bold leading-[16px]">{Number(price).toLocaleString()}<span
                                        className="font-medium text-white mr-2">تومان</span></span>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <button className='px-3 border border-red-400 hover:bg-red-400/40 cursor-pointer rounded-lg' onClick={() => removeBtnHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[25px] h-[25px] p-1 rounded-full' fill='#ff6467'>
                                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagCourseBox
