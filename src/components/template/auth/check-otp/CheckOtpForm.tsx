'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import { checkOtpThunk, resendCodeThunk, resendForgetpassCodeThunk, verifyForgetCodeThunk } from '@/redux/slice/user/userThunks'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'

function CheckOtpForm() {

    const searchParams = useSearchParams()
    const forgetpassParam = searchParams.get('forgetpass') || false
    const phoneParam = searchParams.get('phone') || null
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [inputs, setInputs] = useState(Array.from({ length: 5 }, () => ""));
    // const [activeButton, setActiveButton] = useState(false);
    const [disableTimeLeft, setDisableTimeLeft] = useState(120000);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [sending, setSending] = useState(false);


    useEffect(() => {
        if (disableTimeLeft > 0) {
            const countdownTimer = setInterval(() => {
                setDisableTimeLeft((prevTime) => prevTime - 1000);
            }, 1000);
            timer.current = countdownTimer;
            return () => clearInterval(countdownTimer);
        }
    }, [disableTimeLeft]);

    useEffect(() => {
        if (disableTimeLeft === 0) {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
    }, [disableTimeLeft, timer.current]);

    const handleInputChange = (index: number, value: string) => {
        if (!/^\d$/.test(value)) {
            return;
        }

        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);


        if (index < inputs.length - 1 && value !== "") {
            const nextInput = index + 1;
            newInputs[nextInput] = "";
            document.getElementById(`input-${nextInput}`)!.focus();
        }


        // const allInputsFilled = newInputs.every((input) => input !== "");
        // setActiveButton(allInputsFilled);
    };

    const removeHandler = (e: any) => {
        if (e.code === "Backspace") {
            const inputIndex = parseInt(e.target.id.split("-")[1]);
            const newInputs = [...inputs];
            newInputs[inputIndex] = "";
            setInputs(newInputs);
        }
    };

    const submitHandler = async () => {

        if (disableTimeLeft === 0) {
            return false
        }

        const changeToString = inputs.join("").padStart(5, "0");

        const anyEmptyInput = inputs.some((input) => input === "");
        if (anyEmptyInput) {
            toast.error("کد ارسالی معتبر نمی باشد.");
            return;
        }
        setSending(true);

        const dispatchResult = forgetpassParam === 'true' ?
        (await dispatch(verifyForgetCodeThunk({ phone: `+98${String(phoneParam)}`, otpCode: changeToString,forgetpassParam: (forgetpassParam === 'true'), router }))) :
        (await dispatch(checkOtpThunk({ phone: `+98${String(phoneParam)}`, otpCode: changeToString,forgetpassParam: (forgetpassParam === 'true'), router })))
        
        if ((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected')) {
            setSending(false);
            if (forgetpassParam === 'true') {
                return router.replace(`/reset-password?phone=${phoneParam}&verifiedPhoneCode=${dispatchResult.payload.verifiedPhoneCode}`)
            } else {
                return router.replace(`/register?phone=${phoneParam}&verifiedPhoneCode=${dispatchResult.payload.verifiedPhoneCode}`)
            }
        }

        setInputs(Array.from({ length: 5 }, () => ""));
        setSending(false);
    };

    const resendCodeHandler = async () => {
        setSending(true)

        const dispatchResult = forgetpassParam === 'true' ?
        (await dispatch(resendForgetpassCodeThunk({ phone: `+98${String(phoneParam)}`}))) :
        (await dispatch(resendCodeThunk({ phone: `+98${String(phoneParam)}`})))
 
        if ((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected'))  {
            setDisableTimeLeft(120000)
        }
        setSending(false)
    }


    return (
        <form className="w-full my-3 p-2 sm:p-4 flex flex-col items-center justify-start gap-y-4 mt-8 sm:mt-12 ">
            <h1 className="font-bold text-[#0000a3] msx-sm:text-[10px] text-center">کد ارسال شده به شماره {`${phoneParam?.slice(6)}***0${phoneParam?.slice(0, 3)}`} را وارد کنید.</h1>
            <div dir='ltr' className="flex items-center justify-center sm:gap-x-5 gap-x-2">
                {inputs.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        id={`input-${index}`}
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyUp={(e) => removeHandler(e)}
                        maxLength={1}
                        className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-md flex justify-center items-center text-center bg-[#d2eeff] text-[#0000a3]"
                    />
                ))}
            </div>



            {disableTimeLeft > 0 ? (
                <div className="text-center text-sm text-gray-600">
                    زمان باقی‌مانده:
                    {Math.floor(disableTimeLeft / 60000)}:
                    {((disableTimeLeft % 60000) / 1000).toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                    })}
                </div>
            ) : <div className="text-center text-sm text-gray-600">
                زمان باقی‌مانده:0:00
            </div>}

            {disableTimeLeft > 0 ?
                <button type='button' disabled={sending} onClick={submitHandler} className="rounded-full py-2 px-4 border-4 border-solid border-[#0000a3] bg-[#d2eeff] text-[#0000a3] transition-all hover:bg-[#70baff] w-full max-w-340">ورود به حساب</button> :
                <button type='button' disabled={sending} onClick={resendCodeHandler} className="rounded-full py-2 px-4 border-4 border-solid border-[#0000a3] bg-[#d2eeff] text-[#0000a3] transition-all hover:bg-[#70baff] w-full max-w-340 ">ارسال مجدد کد</button>
            }


        </form>
    )
}

export default CheckOtpForm
