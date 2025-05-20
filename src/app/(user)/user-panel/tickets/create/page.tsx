'use client'
import { createTicketService } from '@/services/ticketsService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function page() {

    const [subject, setSubject] = useState("")
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    const [sending, setSending] = useState(false)
    const router = useRouter()

    async function sendNewTicket(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (sending) {
            return;
        }

        if (subject.trim() === '') {
            return toast.error('لطفا یک موضوع انتخاب کنید!')
        }
        if (title.trim() === '') {
            return toast.error('لطفا عنوان پیغام را وارد کنید!')
        }
        if (title.trim().length < 4 || title.trim().length > 50) {
            return toast.error('طول عنوان وارد شده نباید بیشتر از 50 و کمتر از 4 کاراکتر باشد.')
        }
        if (message.trim() === '') {
            return toast.error('لطفا پیغام خود را وارد کنید!')
        }
        if (message.trim().length < 4 || message.trim().length > 2000) {
            return toast.error('طول پیام وارد شده نباید بیشتر از 2000 و کمتراز 4 کاراکتر باشد.')
        }


        setSending(true)

        const { response, error } = await createTicketService(title, subject, message)

        if (response) {
            toast.success(response.data.message)
            setSending(false)
            return router.replace('/user-panel/tickets')
        }
        if (error) {
            toast.error(error.response.data.message)
            setSending(false)
        }

    }

    return (
        <>
            <h1 className='text-center text-custom-dark-blue font-bold md:hidden mb-6'>ارسال تیکت</h1>
            <form onSubmit={sendNewTicket}>
                <label className='text-custom-dark-blue' htmlFor="ticket-subject-id">موضوع:</label>
                <select value={subject} onChange={e => setSubject(e.target.value)} id='ticket-subject-id' className='mb-4 cursor-pointer rounded-lg text-custom-dark-blue p-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10'>
                    <option value="" disabled>موضوع را انتخاب کنید</option>
                    <option value="fiscal">تیکت مالی</option>
                    <option value="scholastic">تیکت درسی</option>
                    <option value="counseling">تیکت مشاوره</option>
                    <option value="offer">تیکت پیشنهادات و انتقادات</option>
                    <option value="support">تیکت پشتیانی سایت</option>
                    <option value="other">غیره</option>
                </select>

                <label className='text-custom-dark-blue' htmlFor="ticket-title-id">عنوان:</label>
                <input type="text" id='ticket-title-id' placeholder='عنوان تیکت را وارد کنید...' value={title} onChange={e => setTitle(e.target.value)}
                    className='rounded-lg text-custom-dark-blue mb-4 py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />


                <label className='text-custom-dark-blue' htmlFor="ticket-body-id">پیغام:</label>
                <textarea id='ticket-body-id' placeholder='پیغام خود را بنویسید...' value={message} onChange={e => setMessage(e.target.value)}
                    className='mb-4 rounded-lg resize-none min-h-[200px] text-custom-dark-blue py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />
                <div className='flex items-center gap-x-2 max-md:mb-3'>
                    <Link href={'/user-panel/tickets'} className={`w-full rounded-lg p-2 bg-[#adadad]/80 hover:opacity-80 text-center !text-[#166d91] ${sending ? 'opacity-80' : 'cursor-pointer'}`}>بازگشت</Link>
                    <button disabled={sending} type='submit' className={`w-full rounded-lg p-2 bg-[#166d91]/80 hover:opacity-80 text-white ${sending ? 'opacity-80' : 'cursor-pointer'}`}>ارسال پیغام</button>
                </div>
            </form>
        </>
    )
}

export default page
