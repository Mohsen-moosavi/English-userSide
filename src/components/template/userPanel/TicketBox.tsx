import { TicketMessageType } from '@/utils/types'
import React from 'react'
import userProfile from '@images/user-profile.png'
import Image from 'next/image'
import moment from 'moment-jalaali'


type PageProps ={
    ticketMessage: TicketMessageType,
    isUser:boolean
}

function TicketBox({ ticketMessage, isUser} : PageProps) {
    return (
        <div className={`max-w-[80%] w-auto relative border-[3px] border-solid rounded-xl mb-3 ${isUser ? 'border-sky-800 bg-sky-200 mr-auto rounded-bl-none' : 'border-main-color bg-green-200 ml-auto rounded-br-none'} mb-5`}>
            <div
                className="flex items-center gap-x-2 border-b border-solid border-gray-400 mx-2 py-2">
                <Image src={ticketMessage?.sender?.avatar || userProfile} width={50} height={50} alt="user"
                    className="rounded-full w-[50px] max-md:w-[30px]" />
                <div className="flex flex-col">
                    <span className="text-main-color max-md:text-[12px] font-bold">{ticketMessage?.sender?.name}</span>
                    <div className='flex items-center gap-x-3'>
                        <span className="text-[12px] max-md:text-[8px] text-gray-500">{moment(ticketMessage?.created_at).format('jYYYY/jMM/jDD')}</span>
                    </div>
                </div>
                {/* <button className='mr-auto cursor-pointer p-2 text-white rounded-full bg-[#ca6464]' disabled={isloading} onClick={() => deleteMessageHandler(message.id)}>
                    <FaTrashAlt className='h-auto w-[10px] sm:w-[15px]'></FaTrashAlt>
                </button> */}
            </div>
            <p className="text-gray-700 text-[16px] max-md:text-[12px] my-2 px-2">{ticketMessage?.message}</p>
        </div>
    )
}

export default TicketBox
