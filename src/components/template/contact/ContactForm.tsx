'use client'
import { sendContactService } from '@/services/userServices'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ContactForm() {

  const [sending, setSending] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function sendContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!sending) {
      setSending(true)

      if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
        setSending(false)
        return toast.error("لطفا یک ایمیل معتبر وارد کنید!")
      }
      if (message.trim().length < 10) {
        setSending(false)
        return toast.error("طول پیغام نمی تواند کمتر از 10 کاراکتر باشد!")
      }
      if (message.trim().length > 1000) {
        setSending(false)
        return toast.error("طول پیغام نمی تواند بیشتر از 1000 کاراکتر باشد!")
      }

      const { response, error } = await sendContactService(email, message.trim())
      if (response) {
        toast.success(response.data.message)
        setEmail('')
        setMessage('')
        setSending(false)
      } else {
        setSending(false)
        return toast.error(error.response.data.message)
      }
    }
  }

  return (
    <form className='flex flex-col max-lg:text-sm' onSubmit={sendContact}>
      <label htmlFor="contact-email-input-id" className='text-custom-dark-blue opacity-90 text-sm pr-1'>ایمیل</label>
      <input type="email" id='contact-email-input-id' placeholder='لطفا ایمیل خود را وارد کنید...' className='py-1 px-2 text-custom-dark-blue border-2 border-custom-dark-blue outline-none rounded-lg bg-blue-500/10 mb-3' value={email} onChange={e=>setEmail(e.target.value)} />

      <label htmlFor="contact-message-input-id" className='text-custom-dark-blue opacity-90 text-sm pr-1'>پیام</label>
      <textarea id='contact-message-input-id' placeholder='لطفا پیغام خود را وارد بنویسید...' className='py-1 px-2 text-custom-dark-blue border-2 border-custom-dark-blue outline-none rounded-lg bg-blue-500/10 mb-3 resize-none' rows={8} value={message} onChange={e=>setMessage(e.target.value)} />

      <button disabled={sending} type='submit' className='w-full p-2 rounded-lg bg-custom-dark-blue text-white cursor-pointer hover:opacity-80'>
        {sending ? (
   <svg className='animate-spin mx-auto' fill="#fff" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330">
            <g id="XMLID_2_">
              <path id="XMLID_4_" d="M97.5,165c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60
                        C90.784,180,97.5,173.284,97.5,165z"/>
              <path id="XMLID_5_" d="M307.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"
              />
              <path id="XMLID_6_" d="M172.5,90c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v60
                        C157.5,83.284,164.216,90,172.5,90z"/>
              <path id="XMLID_7_" d="M172.501,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60
                        C187.501,246.716,180.785,240,172.501,240z"/>
              <path id="XMLID_8_" d="M77.04,48.327c-5.856-5.858-15.354-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.428
                        c2.929,2.929,6.768,4.394,10.606,4.394c3.838,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L77.04,48.327z"/>
              <path id="XMLID_9_" d="M246.746,218.034c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.858-5.857,15.355,0,21.213l42.428,42.426
                        c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L246.746,218.034z"/>
              <path id="XMLID_10_" d="M98.254,218.034L55.828,260.46c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.393,10.607,4.393
                        c3.839,0,7.678-1.464,10.606-4.393l42.426-42.426c5.858-5.858,5.858-15.355,0-21.213
                        C113.609,212.176,104.111,212.176,98.254,218.034z"/>
            </g>
          </svg>
        ) : (
          "ارسال"
        )}
      </button>
    </form>
  )
}

export default ContactForm
