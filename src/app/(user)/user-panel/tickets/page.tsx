'use client'
import { getTicketsService } from '@/services/ticketsService'
import { TicketType } from '@/utils/types'
import moment from 'moment-jalaali'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function page() {

    const [openedTickets, setOpenedTickets] = useState<TicketType[]>([])
    const [closedTickets, setClosedTickets] = useState<TicketType[]>([])
    const [answeredTickets, setAnsweredTickets] = useState<TicketType[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTickets()
    }, [])

    async function getTickets() {
        const { response, error } = await getTicketsService()

        if (error) {
            toast.error(error.response.data.message)
            return setLoading(false)
        }
        if (response) {
            const allTickets: TicketType[] = response.data.data.tickets
            const openedTickets: TicketType[] = []
            const closedTickets: TicketType[] = []
            const answeredTickets: TicketType[] = []
            allTickets.forEach(ticket => {
                switch (ticket.status) {
                    case 'open': {
                        openedTickets.push(ticket)
                        break
                    }
                    case 'pending': {
                        openedTickets.push(ticket)
                        break
                    }
                    case 'answered': {
                        answeredTickets.push(ticket)
                        break
                    }
                    case 'closed': {
                        closedTickets.push(ticket)
                        break
                    }
                    default: {
                        openedTickets.push(ticket)
                    }
                }
            })
            setOpenedTickets(openedTickets)
            setAnsweredTickets(answeredTickets)
            setClosedTickets(closedTickets)
            return setLoading(false)
        }

    }

    return (
        <>
            <h1 className='text-center text-custom-dark-blue font-bold md:hidden mb-6'>تیکت ها</h1>
        {
            loading ? (
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
            ) : (
                <div>
                    <Link href={'/user-panel/tickets/create'} className='cursor-pointer w-full border-2 border-custom-dark-blue bg-[#166d91]/10 hover:bg-[#166d91]/20 rounded-lg flex items-center justify-between p-2'>
                        <span className='text-custom-dark-blue font-bold'>ارسال تیکت جدید</span>
                        <div className='rounded-full border border-custom-dark-blue bg-[#166d91]/20 p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-[20px] h-[20px]' fill='#166d91'>
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                            </svg>
                        </div>
                    </Link>

                    <div className='mt-10'>
                        {(!openedTickets.length && !closedTickets.length && !answeredTickets.length) ? (
                            <div className='h-[100px] flex items-center justify-center'>
                                <span className='text-red-400 font-bold'>شما تا کنون تیکتی ارسال نکرده اید!</span>
                            </div>
                        ) : (
                            <>
                                {openedTickets.length ? (
                                    <div>
                                        <div className='relative top-[2px] z-100 inline-block mr-5 text-sm text-blue-700 p-1 border-2 border-b-[3px] bg-blue-500/30 border-blue-500 border-b-[#bfcec4] rounded-t-lg'>در انتظار پاسخ</div>
                                        <div className='ticket-blue-gradient rounded-t-lg border-t-2 border-blue-500 p-3'>
                                            {openedTickets.map(ticket=>(
                                                <Link key={ticket.id} href={`/user-panel/tickets/${ticket.id}`} className='mb-2 cursor-pointer hover:bg-blue-500/20 flex items-center justify-between p-2 border-2 border-blue-500 rounded-lg'>
                                                <span className='text-sm text-blue-700'>{ticket.title}</span>
                                                <span className='text-sm text-blue-700'>{moment(ticket.updated_at).format('jYYYY-jMM-jDD')}</span>
                                            </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}

                                {answeredTickets.length ? (
                                <div className='mt-3'>
                                <div className='relative top-[2px] z-100 inline-block mr-5 text-sm text-green-700 p-1 border-2 border-b-[3px] bg-green-500/30 border-green-500 border-b-[#b3dd8a] rounded-t-lg'>پاسخ داده شده</div>
                                <div className='ticket-green-gradient rounded-t-lg border-t-2 border-green-500 p-3'>
                                    {answeredTickets.map(ticket=>(
                                        <Link key={ticket.id} href={`/user-panel/tickets/${ticket.id}`} className='mb-2 cursor-pointer hover:bg-green-500/20 flex items-center justify-between p-2 border-2 border-green-500 rounded-lg'>
                                        <span className='text-sm text-green-700'>{ticket.title}</span>
                                        <span className='text-sm text-green-700'>{moment(ticket.updated_at).format('jYYYY-jMM-jDD')}</span>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                                ) : null}

                                {closedTickets.length ?(
                                <div className='mt-3'>
                                <div className='relative top-[2px] z-100 inline-block mr-5 text-sm text-red-700 p-1 border-2 border-b-[3px] bg-red-500/30 border-red-500 border-b-[#fdab80] rounded-t-lg'>بسته شده</div>
                                <div className='ticket-red-gradient rounded-t-lg border-t-2 border-red-500 p-3'>
                                {closedTickets.map(ticket=>(
                                    <Link key={ticket.id} href={`/user-panel/tickets/${ticket.id}`} className='mb-2 cursor-pointer hover:bg-red-500/20 flex items-center justify-between p-2 border-2 border-red-500 rounded-lg'>
                                        <span className='text-sm text-red-700'>{ticket.title}</span>
                                        <span className='text-sm text-red-700'>{moment(ticket.updated_at).format('jYYYY-jMM-jDD')}</span>
                                    </Link>
                                ))}
                                </div>
                            </div>
                                ) :null}
                            </>
                        )}
                    </div>
                </div>
            )
        }
        </>
    )
}

export default page
