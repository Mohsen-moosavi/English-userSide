'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { logoutThunk } from '@/redux/slice/user/userThunks'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

function Menu() {

    const pathName = usePathname()
    const router = useRouter()
    const dispatch = useAppDispatch()

    async function logoutHandler(){
        Swal.fire({
            title: 'آیا می خواهید از حساب خود خارج شوید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'تایید',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
            }
        })

        async function logOut() {
            try {
                await dispatch(logoutThunk())
                Swal.fire({
                    title: 'شما با موفقیت از حسابتان خارج شدید.',
                    icon: 'success',
                    confirmButtonText: 'تایید',
                }).then(() => {
                    router.replace('/')
                })
            } catch (error) {
                Swal.fire({
                    title: 'خطا در هنگام خروج از حساب! لطفا دوباره تلاش کنید.',
                    icon: 'error',
                    confirmButtonText: 'تایید',
                })
            }
        }
    }

    return (
        <ul className='flex md:flex-col max-md:flex-row-reverse pt-2 w-max font-bold text-custom-dark-blue'>
            <li className={`hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl ${(pathName==='/user-panel' || pathName==='/user-panel/edit') ? '!bg-[#50dcf5]' :''}`}>
                <Link href={'/user-panel'} className="block w-full !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm p-2">
                <span className='max-md:hidden'>مشخصات کاربر</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"/>
                </svg>
                </Link>
            </li>
            <li className={`hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl ${pathName==='/user-panel/courses' ? '!bg-[#50dcf5]' :''}`}>
                <Link href={'/user-panel/courses'} className="block w-full !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm p-2">
                <span className='max-md:hidden'>دوره ها</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/>
                </svg>
                </Link>
            </li>
            <li className={`hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl ${(pathName==='/user-panel/tickets' || pathName==='/user-panel/tickets/create' || (/^\/user-panel\/tickets\/\d+$/).test(pathName)) ? '!bg-[#50dcf5]' :''}`}>
                <Link href={'/user-panel/tickets'} className="block w-full !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm p-2">
                <span className='max-md:hidden'>تیکت ها</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/>
                </svg>
                </Link>
            </li>
            <li className={`hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl ${pathName==='/user-panel/bag' ? '!bg-[#50dcf5]' :''}`}>
                <Link href={'/user-panel/bag'} className="block w-full !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm p-2">
                <span className='max-md:hidden'>سبد خرید</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                </svg>
                </Link>
            </li>
            <li className='hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl'>
                <Link href={'/'} className="block w-full !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm p-2">
                <span className='max-md:hidden'>بازگشت به صفحه اصلی</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                </svg>
                </Link>
            </li>
            <li className='hover:bg-[#B9DCE6]/70 rounded-full md:rounded-xl'>
                <button className="p-2 block w-full text-start !text-[#166d91] !hover:text-[#166d91] max-lg:text-sm cursor-pointer" onClick={logoutHandler}>
                <span className='max-md:hidden'>خروج از حساب</span>
                <svg className='md:hidden w-[20px] h-[20px]' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/>
                </svg>
                </button>
            </li>
        </ul>
    )
}

export default Menu
