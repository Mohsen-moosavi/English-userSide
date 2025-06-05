import React from 'react'
import woldMapImg from '@images/wold-map.png'
import Image from 'next/image'
import ContactForm from '@/components/template/contact/ContactForm'

function page() {

    return (
        <main>
            <div className="container mx-auto">
                <h1 className='text-center font-bold text-2xl text-custom-dark-blue'>ارتباط با ما</h1>
                <section className='my-5'>
                    <h4 className='font-semibold text-custom-dark-blue mb-2 max-sm:text-[12px]'>لطفا قبل از ثبت نظر، به موارد زیر توجه نمایید:</h4>
                    <ul className='!list-disc list-inside text-custom-dark-blue text-justify max-sm:text-[11px]'>
                        <li className='mb-1'>جهت ثبت پیغام، عضویت در سایت الزامی است.</li>
                        <li className='mb-1'>ایمیل وارد شده از سمت شما، جهت ارسال پاسخ به نظرتان در بستر ایمیل می باشد.</li>
                        <li className='mb-1'>گروه کلاس زبان، همواره مشتاق شنیدن پیشنهادات و انتقادات از سوی شما کاربران عزیز می باشد.</li>
                    </ul>
                </section>
                <div className='grid md:grid-cols-2 gap-x-5 gap-y-5 items-center my-8'>
                    <ContactForm />
                    <div>
                        <Image src={woldMapImg} className='w-full max-w-[500px] mx-auto' alt="world map" width={400} height={400} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
