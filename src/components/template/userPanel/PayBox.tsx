'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { setBagCount, setPayData } from '@/redux/slice/user/userSlice'
import { applyOffCodeService, payService } from '@/services/userServices'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

type PageProps = {
    totalMainPrice: number,
    totalOff: number,
    totalPrice: number,
}

function PayBox({totalMainPrice,totalOff,totalPrice}:PageProps) {

    const [loading,setLoading] = useState(false)
    const [offCode,setOffCode] = useState("")
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [priceObj,setPriceObj] = useState<{totalMainPrice:number,totalOff:number,totalPrice:number}| null >(null)

    async function offFormHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!offCode.trim()){
            return toast.error("لطفا کد را وارد کنید!")
        }

        if(offCode.trim().length < 8){
            return toast.error("کد تخفیف حداقل باید 8 کاراکتر باشد.")
        }

        setLoading(true)
        const {response,error} = await applyOffCodeService(offCode)
        if(response){
            const responseData = response.data.data
            const newPrices = {totalMainPrice:responseData.totalMainPrice,totalOff:responseData.totalOff,totalPrice:responseData.totalPrice}
            setPriceObj(newPrices)
        }
        if(error){
            toast.error(error?.response?.data?.message || 'مشکل در دریافت سبد خرید!')
        }
        setLoading(false)
    }

    async function payButtonHandler(){
   
        if((priceObj && priceObj.totalPrice > 0) || (!priceObj && totalPrice > 0)){
            dispatch(setPayData({offCode, price:priceObj? priceObj.totalPrice : totalPrice}))
            router.push('/pay')
        }else{
            const {response, error} = await payService(totalPrice,offCode)
            if(response){
                toast.success(response.data.message)
                dispatch(setBagCount(0))
                router.push('/user-panel/courses')
            }else{
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div className='relative flex flex-col border-[3px] bg-sky-300/10 border-custom-dark-blue rounded-lg p-2 text-s'>
            <div className='flex items-center'>
                <svg className="w-[17px] sm:w-[25px] bi bi-stars" xmlns="http://www.w3.org/2000/svg" fill="#288c89"
                    viewBox="0 0 16 16">
                    <path
                        d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                </svg>
                <span className='text-custom-dark-blue font-bold'>هزینه دوره ها</span>
            </div>
            <div className='flex items-center justify-between mt-2 text-custom-dark-blue'>
                <span className='t'>جمع کل:</span>
                <span className='font-bold t'>{`${priceObj ? priceObj.totalMainPrice.toLocaleString(): totalMainPrice.toLocaleString()} تومان`}</span>
            </div>

            <form className='my-3' onSubmit={offFormHandler}>
                <input type="text" id='off-code-input-id' placeholder='کد تخفیف' className='!outline-none text-custom-dark-blue w-full p-1 rounded-md border border-custom-dark-blue bg-white/60' value={offCode} onChange={e=>setOffCode(e.target.value)}/>
                <button type='submit' className='w-full bg-custom-dark-blue text-white hover:opacity-70 p-1 rounded-md mt-2 cursor-pointer'>اعمال</button>
            </form>

            <div className='flex items-center justify-between mt-2'>
                <span className='text-custom-dark-blue t'>تخفیف:</span>
                <span className='font-bold  text-red-400 t'>{`${priceObj ? priceObj.totalOff.toLocaleString(): totalOff.toLocaleString()} تومان`}</span>
            </div>


            <div className='flex items-center justify-between mt-2'>
                <span className='text-custom-dark-blue t'>قابل پراخت:</span>
                <span className='font-bold  text-green-700 t'>{`${priceObj? priceObj.totalPrice.toLocaleString() : totalPrice.toLocaleString()} تومان`}</span>
            </div>

            <button type='button' className='w-full bg-green-800 text-white hover:opacity-70 p-2 rounded-md mt-2 cursor-pointer' onClick={payButtonHandler}>پرداخت</button>

            {loading ?  (
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[#fff5ab] rounded-lg flex items-center'>
                                <div className="w-full flex items-center justify-center">
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
            </div>
            ): null}  
        </div>
    )
}

export default PayBox
