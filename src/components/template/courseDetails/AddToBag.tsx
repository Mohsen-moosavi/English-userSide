'use client'
import useAppSelector from '@/hooks/useAppSelector'
import { addToBagService } from '@/services/userServices'
import { changeDateToPersianLanguage } from '@/utils/date.utils'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

type PageProps = {
    courseId: number
    off: { id: number, percent: number, expire: Date } | null,
    price: string,
    slug: string,
}

function AddToBag({ courseId, off, price, slug }: PageProps) {
    const { userCourses } = useAppSelector(state => state.user)


    
    function addToBagHandler(){
        Swal.fire({
                    title:'آیا از اضافه کردن دوره به سبد خرید اطمینان دارید؟',
                    icon: 'warning',
                    showCancelButton : true,
                    confirmButtonText:'تایید',
                    cancelButtonText: 'لغو'
                }).then((result)=>{
                    if(result.isConfirmed){
                        addToBag()
                    }
                })
    }

    async function addToBag() {
        const {response,error} = await addToBagService(courseId)
        if(response){
            toast.success(response.data.message)
        }else{
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            {userCourses?.includes(courseId) ? (<></>) : (
                <>
                    {off ? (
                        <div className="my-auto flex items-cneter justify-between rounded-full border-2 border-solid border-custom-red bg-red-400/20 py-1 px-2 sm:px-3 sm:py-3 text-custom-red my-3 max-sm:text-[12px]">
                            <span>{off.percent}% تخفیف ویژه</span>
                            <div className="flex gap-x-2">
                                <span>تا {changeDateToPersianLanguage(off.expire)} ماه</span>
                            </div>
                        </div>
                    ) : null}

                </>
            )}

            {userCourses?.includes(courseId) ? (
                <div className="flex max-sm:flex-col sm:items-center sm:justify-between mt-auto gap-y-2">
                    <Link href={`/sessions/${slug}/1`}
                        className=" max-sm:order-2 px-3 py-2 bg-custom-dark-blue !text-white rounded-full hover:opacity-60 xl:text-xl">شما دانشجوی دوره هستید</Link>
                </div>
            ) : (
                <div className="flex max-sm:flex-col sm:items-center sm:justify-between mt-auto gap-y-2">
                    <button
                    onClick={addToBagHandler}
                        className="cursor-pointer max-sm:order-2 px-3 py-2 bg-custom-dark-blue text-white rounded-full hover:opacity-60 xl:text-xl">افزودن
                        به سبد خرید</button>
                    {off ? (
                        <div className="flex">
                            <del className="text-custom-gray xl:text-lg mx-2">{Number(price).toLocaleString()}</del>
                            <span className="text-custom-dark-blue font-bold xl:text-xl">{(Number(price) - Math.round((Number(price) * off.percent) / 100)).toLocaleString()} تومان</span>
                        </div>
                    ) : (
                        <div className="flex">
                            <span className="text-custom-dark-blue font-bold xl:text-xl">{Number(price) === 0 ? "رایگان" : `${Number(price).toLocaleString()}  تومان`}</span>
                        </div>
                    )}

                </div>
            )}


        </>
    )
}

export default AddToBag
