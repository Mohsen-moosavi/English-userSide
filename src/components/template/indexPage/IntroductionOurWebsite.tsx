import React from 'react'
import desc1Image from '@images/desc1.png'
import desc2Image from '@images/desc2.png'
import desc3Image from '@images/desc3.png'
import desc4Image from '@images/desc4.png'
import desc5Image from '@images/desc5.png'
import Image from 'next/image'

function IntroductionOurWebsite() {
  return (
    <section>
    <div className="container mx-auto">
        <span className="block text-center text-center text-2xl font-bold text-custom-dark-blue mt-8 mb-4">چرا کلاس
            زبان؟</span>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-y-5 sm:gap-y-2 gap-x-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                <div className="text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-[16px] max-sm:text-center">
                        دوره های آموزشی بر اساس کتاب های
                        زبان</h3>
                    <p className="text-custom-gray text-sm">در آکادمی <strong>کلاس زبان</strong> می توانید دوره های
                        مختلف بر
                        اساس هر یک از کتاب های آموزشی رایج زبان پیدا کنید. دوره های مختلف براساس سطح کلی کتاب،
                        از <strong>مبتدی</strong> تا <strong>پیشرفته</strong> دسته بندی می شود. برای شروع از
                        دوره های پایه ای تر می توانید دوره های کتاب های ساده تر شروع کنید. هر کتاب، خود دارای
                        سطح های مختلف می باشد.</p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto max-lg:mr-auto">
                    <Image src={desc1Image} alt="course"/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr,1fr] items-center">
                <div className="max-lg:order-1 text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-center max-sm:text-[16px]">
                        آزمون تعیین سطح آنلاین</h3>
                    <p className="text-custom-gray text-sm">اکر تازه می خواهید شروع کنید و نمی دانید باید از کجا
                        باید استارت
                        بزنید و کدام دوره مناسب شماست، کافیست در <strong>آمزمون تعیین سطح آنلاین</strong> ما به
                        صورت کاملا <strong>رایگان</strong> کنید و دوره مناسب با سطح خودتان را پیدا کنید.</p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto lg:mr-auto max-sm:order-2">
                    <Image src={desc2Image} alt="course"/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                <div className="text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-center max-sm:text-[16px]">
                        آموزش زبان همراه با بازی</h3>
                    <p className="text-custom-gray text-sm"><strong>بازی</strong> در فرایند <strong>آموزش</strong> و
                        <strong>یادگیری</strong> نقش بسیار مهمی دارد. در دوره های <strong>آکادمی کلاس
                            زبان</strong> به همراه هر <strong>جلسه آموزشی</strong> یک یا چند بازی مرتبط با
                        محتوای آن جلسه، برای یادگیر بهتر و عمیق تر، وجود دارد. برای دیدن لیست کامل بازی ها و
                        اطلاعات بیشتر در مورد آنها، <a href="#">اینجا</a> کلیک کنید.
                    </p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto max-lg:mr-auto">
                    <Image src={desc3Image} alt="course"/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr,1fr] items-center">
                <div className="max-lg:order-1 text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-center max-sm:text-[16px]">
                        کتاب های داستان به زبان انگلیسی
                    </h3>
                    <p className="text-custom-gray text-sm">در طول <strong>دوره های آموزشی</strong> همواره یک سری
                        <strong>داستان های کوتاه</strong> برای یادگیر عمیق تر، برای شما ارئه می گردد. همچنین در
                        کنار این داستان های کوتاه، کتاب های داستان مختلف، با سطوح متفاوت، برای مطالعه آزاد و
                        یادگیری بیشتر، برای شما وجود دارد.
                    </p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto lg:mr-auto max-sm:order-2">
                    <Image src={desc4Image} alt="course"/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
                <div className="text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-center max-sm:text-[16px]">
                        یادگیری زبان همراه با یک همراه</h3>
                    <p className="text-custom-gray text-sm">یادگیر به تنهای سخت است. در <strong>آکادمی کلاس
                            زبان</strong>
                        شما می نوانید یک همراه متناسب با سطح خودتان پیدا کرده و مراحل یادگیری را در کنار یکدیگر
                        سپری کنید.</p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto max-lg:mr-auto">
                    <Image src={desc5Image} alt="course"/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr,1fr] items-center">
                <div className="max-lg:order-1 text-justify col-span-2">
                    <h3
                        className="font-bold text-custom-dark-blue text-xl mb-3 max-sm:text-center max-sm:text-[16px]">
                        آزمون تعیین سطح آنلاین</h3>
                    <p className="text-custom-gray text-sm">اکر تازه می خواهید شروع کنید و نمی دانید باید از کجا
                        باید استارت
                        بزنید و کدام دوره مناسب شماست، کافیست در <strong>آمزمون تعیین سطح آنلاین</strong> ما به
                        صورت کاملا <strong>رایگان</strong> کنید و دوره مناسب با سطح خودتان را پیدا کنید.</p>
                </div>
                <div className="max-w-[150px] max-sm:mx-auto lg:mr-auto max-sm:order-2">
                    <Image src={desc2Image} alt="course"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default IntroductionOurWebsite
