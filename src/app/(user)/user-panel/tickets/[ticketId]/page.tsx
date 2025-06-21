'use client'
import TextBox from '@/components/template/userPanel/TextBox';
import TicketBox from '@/components/template/userPanel/TicketBox';
import { answerTicketService, closeTicketService, getSingleTicketService } from '@/services/ticketsService';
import { TicketDetailsType } from '@/utils/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

function page() {

    const { ticketId } = useParams();

    const [loading, setLoading] = useState(true)
    const [loadingCloseTicket, setLoadingCloseTicket] = useState(false)
    const [ticketDetails, setTicketDetails] = useState<TicketDetailsType | null>(null)
    const [textBoxReseter, setTextBoxReseter] = useState(false)

    useEffect(() => {
        getTicketDetails()
    }, [])

    async function getTicketDetails() {
        const { response } = await getSingleTicketService(Number(ticketId))
        if (response) {
            setTicketDetails(response.data.data.ticket)
        }
        setLoading(false)
    }

    async function closeTicketHandler() {
        Swal.fire({
            title: 'آیا از بستن تیکت اطمینان دارید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'تایید',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                closeFunc()
            }
        })

        async function closeFunc() {
            setLoadingCloseTicket(true)
            const { response, error } = await closeTicketService(Number(ticketId))

            if (response) {
                setTicketDetails(response.data.data.ticket)
                toast.success(response.data.message)
            }

            if (error) {
                toast.error(error.response.data.message)
            }

            setLoadingCloseTicket(false)
        }
    }

    async function sendAnswerHandler(message: string) {
        if (ticketDetails?.status === 'closed') {
            return toast.error("این تیکت قبلا بسته شده است!")
        }
        if (!message?.trim()) {
            return toast.error("ابتدا یک متن وارد کنید!")
        }
        setLoading(true)
        const { response, error } = await answerTicketService(Number(ticketId), message)

        if (response) {
            setTicketDetails(response.data.data.ticket)
            toast.success(response.data.message)
        }

        if (error) {
            toast.error(error.response.data.message)
        }
        setLoading(false)
    }


    return (
        <>
            {loading ? (
                <div className="h-[300px] w-full flex items-center justify-center">
                    <svg className='animate-spin' fill="#166d91" height="60px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
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
                </div>
            ) :
                (
                    <>
                        {!!ticketDetails ? (
                            <div className='flex flex-col min-h-[300px] max-md:mb-5'>
                                <div className='flex justify-between items-center sm:mt-3 md:mt-0 mb-3'>
                                    <Link href={'/user-panel/tickets'} className='flex justify-between items-center gap-x-1 text-custom-dark-blue hover:opacity-70'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[20px]' fill='#166d91'>
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                        </svg>
                                        <span>بازگشت</span>
                                    </Link>
                                    <div>
                                        {ticketDetails.status !== 'closed' ? (
                                            <button
                                                disabled={loadingCloseTicket}
                                                className={`text-white text-[12px] sm:text-sm rounded-lg py-1 px-2 transition-all bg-[#a94646] ${loadingCloseTicket ? '' : 'hover:opacity-70 cursor-pointer'} `}
                                                onClick={closeTicketHandler}
                                            >
                                                بستن تیکت
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='text-center mb-5'>
                                    <h3 className='text-custom-dark-blue font-bold inline'>{`${ticketDetails.title} `}</h3>
                                    <h4 className='text-custom-dark-blue text-lg inline'>
                                        {ticketDetails?.subject === 'fiscal' ? '(مالی)' :
                                            ticketDetails?.subject === 'scholastic' ? '(درسی)' :
                                                ticketDetails?.subject === 'counseling' ? '(مشاوره)' :
                                                    ticketDetails?.subject === 'offer' ? '(پیشنهادات و انتقادات)' :
                                                        ticketDetails?.subject === 'support' ? '(پشتیانی سایت)' :
                                                            '(غیره)'
                                        }
                                    </h4>
                                </div>
                                <div>
                                    {ticketDetails.messages?.map((message, index) => (
                                        <TicketBox key={index} ticketMessage={message} isUser={ticketDetails.user_id === (message.sender?.id)} />
                                    ))}
                                </div>
                                {ticketDetails.status === 'closed' ? null : (
                                    <div className='justify-self-end mt-auto'>
                                        <TextBox sendAnswerHandler={sendAnswerHandler} textBoxReseter={textBoxReseter} isloading={loading} />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="h-[300px] w-full flex items-center justify-center">
                                <span className='text-red-400 text-md'>اطلاعات تیکت مورد نظر یافت نشد!</span>
                            </div>
                        )}
                    </>

                )}
        </>
    )
}

export default page
