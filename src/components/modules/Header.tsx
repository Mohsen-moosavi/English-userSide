import React from 'react'
import graduationImage from '@images/graduation.png'
import logo1Image from '@images/logo1.png'
import logo2Image from '@images/logo2.png'
import Image from 'next/image'
import HeaderMobileMenuContainer from './HeaderMobileMenuContainer'
import HeaderMenuBtn from './HeaderMenuBtn'
import Link from 'next/link'

function Header() {
    return (
        <header className="font-bold py-3 ">
            <div className="container mx-auto">
                <div>
                    <div className="relative flex justify-between items-center">
                        <HeaderMenuBtn/>
                        <ul className="hidden md:flex justify-between items-center text-[12px] lg:text-sm gap-x-3 lg:gap-x-5">
                            <li>
                                <a href="#" className="">دوره ها</a>
                            </li>
                            <li>
                                <a href="#">کتاب ها</a>
                            </li>
                            <li>
                                <a href="#">مقالات</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                            <li>
                                <a href="#">درباره ما</a>
                            </li>
                            <li>
                                <a href="#">پرسش و پاسخ</a>
                            </li>
                        </ul>
                        <Image src={logo2Image} alt="logo" className="w-[80px] sm:w-[120px] md:hidden" />
                        <div className="gap-x-2 lg:gap-x-6 flex justify-between items-center text-sm">
                            <span className="hidden md:block text-gray-600 font-bold">پشتیبانی سریع <span
                                className="text-custom-dark-blue">7783654</span> 021</span>
                            <Link href="/login"
                                className="flex items-center py-1 px-2 sm:py-2 sm:px-3 text-custom-black bg-custom-blue rounded-lg hover:!text-black hover:opacity-60">
                                <svg className="w-[0.8rem] lg:w-[1rem] ml-3" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                                <span className="text-[10px] lg:text-sm">
                                    ورود | ثبت نام
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="hidden md:block mt-2 border-t-2 border-gray-300 border-solid">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <Image src={graduationImage} className="w-[30px] lg:w-[50px] ml-5" alt="logo" />
                            <nav>
                                <ul className="flex justify-start align-items-center gap-x-5 lg:text-lg text-sm">
                                    <li>
                                        <a href="#" className="text-custom-dark-blue hover:text-sky-500">دوره های کودکان</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-custom-dark-blue hover:text-sky-500">سطح مقدماتی</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-custom-dark-blue hover:text-sky-500">سطح متوسط</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-custom-dark-blue hover:text-sky-500">سطح پیشرفته</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-custom-dark-blue hover:text-sky-500">دوره های آیلتس</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <Image src={logo2Image} alt="logo" className="w-[100px] lg:w-[150px]" />
                        </div>
                    </div>
                </div>

                {/* <div className="fixed top-0 right-[-250px] z-10 py-4 overflow-auto h-[100vh] w-[250px] flex flex-col items-start justify-start bg-[#5e9ab5] transition-all"
                id="mobile-menu">
                <span className="absolute top-5 left-3" id="close-menu">
                    <Image src={closeImage} alt="close"/>
                </span>

            </div> */}

                <HeaderMobileMenuContainer>
                    <>
                        <Image src={logo1Image} alt="logo" className="w-[150px] self-center" />
                        <ul className="px-4 flex flex-col items-stretch justify-start gap-y-2 font-medium w-full">
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">دوره های کودکان</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">سطح مقدماتی</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">سطح متوسط</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">سطح پیشرفته</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">دوره های آیلتس</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">همه دوره ها</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">کتاب ها</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">مقالات</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">تماس با ما</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">درباره ما</a>
                            </li>
                            <li className="border-b-2 border-[#7AD6FD] border-solid pb-3">
                                <a href="#" className="text-white hover:text-sky-500">پرسش و پاسخ</a>
                            </li>
                        </ul>
                    </>
                </HeaderMobileMenuContainer>
            </div>
        </header>
    )
}

export default Header
