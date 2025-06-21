import React from 'react'
import graduationImage from '@images/graduation.png'
import logo1Image from '@images/logo1.png'
import logo2Image from '@images/logo2.png'
import Image from 'next/image'
import HeaderMobileMenuContainer from './HeaderMobileMenuContainer'
import HeaderMenuBtn from './HeaderMenuBtn'
import Link from 'next/link'
import LoginBtn from '../template/header/LoginBtn'
import HeaderLink from './HeaderLink'
import MobileLoginMenu from '../template/header/MobileLoginMenu'
import HeaderRightLink from '../template/header/HeaderRightLink'

function Header() {

    return (
        <header className="font-bold py-3 ">
            <div className="container mx-auto">
                <div>
                    <div className="relative flex justify-between items-center">
                        <HeaderMenuBtn/>
                        <ul className="hidden md:flex justify-between items-center text-[12px] lg:text-sm gap-x-3 lg:gap-x-5">
                            <li>
                                <Link href="/courses" className="">دوره ها</Link>
                            </li>
                            <li>
                                <Link href="/books">کتاب ها</Link>
                            </li>
                            <li>
                                <Link href="/articles">مقالات</Link>
                            </li>
                            <li>
                                <Link href="/contact">تماس با ما</Link>
                            </li>
                            <li>
                                <Link href="/about-us">درباره ما</Link>
                            </li>
                        </ul>
                        <Image src={logo2Image} alt="logo" className="w-[80px] sm:w-[120px] md:hidden" />
                        <div className="max-md:hidden gap-x-1 lg:gap-x-2 flex justify-between items-center text-sm">
                            <span className="text-gray-600 font-bold">پشتیبانی سریع <span
                                className="text-custom-dark-blue">7771111</span> 021</span>
                            <LoginBtn/>
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
                                        <HeaderLink title='دوره های کودکان' category={'children'}/>
                                    </li>
                                    <li>
                                        <HeaderLink title='سطح مقدماتی' category={'ease'}/>
                                    </li>
                                    <li>
                                        <HeaderLink title='سطح متوسط' category={'medum'}/>
                                    </li>
                                    <li>
                                        <HeaderLink title='سطح پیشرفته' category={'high'}/>
                                    </li>
                                    <li>
                                        <HeaderLink title='دوره های رایگان' category={'free'}/>
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
                        {/* <Image src={logo1Image} alt="logo" className="w-[150px] self-center" /> */}
                        <div className='absolute top-0 left-0 w-full'>
                        <div className='w-full h-[100px] bg-[#166d91]'></div>
                        <div className='w-full overflow-hidden' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[full] w-[full]'><path d="M-3.61,-5.41 C108.12,179.61 346.84,-12.29 502.03,154.03 L500.90,-2.46 L-3.05,-6.40 Z" className='border-none' fill='#166d91'></path></svg></div>
                        </div>
                        <MobileLoginMenu/>
                        <ul className="px-4 flex flex-col items-stretch justify-start gap-y-2 font-medium w-full mobile-menu z-100">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 448 512"><path d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8l0-36.8c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1l75.2 0c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z"/></svg>
                                <HeaderLink title='دوره های کودکان' category={'children'}/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 320 512"><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400l160 0L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32l-8.5 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4z"/></svg>
                                <HeaderLink title='سطح مقدماتی' category={'ease'}/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 448 512"><path d="M192 0c17.7 0 32 14.3 32 32l0 112-64 0 0-112c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80-64 0 0-80zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 52.3-25.1 98.8-64 128l0 96c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-78.4c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267l0-27c0-35.3 28.7-64 64-64l88 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72z"/></svg>
                                <HeaderLink title='سطح متوسط' category={'medum'}/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
                                <HeaderLink title='سطح پیشرفته' category={'high'}/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
                                <a href="/courses">همه دوره ها</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 512 512"><path d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"/></svg>
                                <HeaderLink title='دوره های رایگان' category={'free'}/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                <HeaderRightLink title='کتاب ها' url='/books'/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 512 512"><path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"/></svg>
                                <HeaderRightLink title='مقالات' url='/articles'/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                <HeaderRightLink title='درباره ما' url='/about-us'/>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px]' fill='#fff' viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>
                                <HeaderRightLink title='تماس با ما' url='/contact'/>
                            </li>
                        </ul>
                    </>
                </HeaderMobileMenuContainer>
            </div>
        </header>
    )
}

export default Header
