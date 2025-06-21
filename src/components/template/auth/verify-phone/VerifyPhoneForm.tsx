'use client'
import FormErrorMsg from '@/components/modules/FormErrorMsg';
import useAppDispatch from '@/hooks/useAppDispatch';
import { forgetPasswordThunk, getCaptchaThunk, verifyPhoneThunk } from '@/redux/slice/user/userThunks';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import * as Yup from "yup";

function VerifyPhoneForm({ forgetPass }: { forgetPass: boolean }) {
    const [sending, setSending] = useState(false)
    const parentCaptchaElm = useRef<HTMLDivElement>(null);
    const initailized = useRef(false);
    const [uuid, setUuid] = useState()
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!initailized.current) {
            initailized.current = true
            getCaptcha()
        }
    }, [])

    async function getCaptcha(uuid?: string) {

        const dispatchResult = await dispatch(getCaptchaThunk({ uuid }))
        if (dispatchResult.meta.requestStatus = 'fulfilled') {
            parentCaptchaElm.current && (parentCaptchaElm.current.innerHTML = dispatchResult.payload.captcha)
            setUuid(dispatchResult.payload.uuid)
        }
    }


    const FormValidation = Yup.object({
        phone: Yup.string().required("لطفا شماره تلفن را وارد کنید!.").matches(/^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/, 'لطفا یک شماره تلفن معتبر وارد کنید.'),
        captcha: Yup.string().required("لطفا کد امنیتی را وارد کنید!").max(5, 'کد امنیتی باید 5 رقم باشد.').min(5, 'کد امنیتی باید 5 رقم باشد.'),
    });

    const formik = useFormik({
        initialValues: {
            phone: '',
            captcha: '',
        },
        validationSchema: FormValidation,
        onSubmit: async (values) => {
            setSending(true)

            const dispatchResult = forgetPass ?
                await dispatch(forgetPasswordThunk({ phone: values.phone, uuid, captcha: values.captcha })) :
                await dispatch(verifyPhoneThunk({ phone: values.phone, uuid, captcha: values.captcha }))

            if ((dispatchResult.meta.requestStatus = 'rejected') && !dispatchResult.type.endsWith('rejected')) {
                setSending(false)
                return router.push(`/check-otp?phone=${values.phone}${forgetPass ? `&forgetpass=true` : '&forgetpass=false'}`)
            }
            formik.setValues({captcha:'' , phone : values.phone})
            getCaptcha(uuid)
            setSending(false)
        },
    });

    return (
        <form className="w-full my-3 p-2 sm:p-4 flex flex-col items-center gap-y-4 justify-start mt-8 sm:mt-12" onSubmit={formik.handleSubmit}>
            <h1 className="font-bold text-[#0000a3]">{forgetPass ? "بازیابی رمز عبور" : "ایجاد حساب کاربری"}</h1>
            <div className='w-full'>
                <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                    <input
                        type="number"
                        name='phone'
                        className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        placeholder="تلفن همراه"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                </div>
                {formik.touched.phone && formik.errors.phone ? (
                    <div className="w-full text-start">
                        <FormErrorMsg msg={formik.errors.phone} />
                    </div>
                ) : null}
            </div>

            <div className="w-full">
                <div className="rounded-md p-1 border-2 border-solid border-[#0000a3] bg-[#2272fc] flex overflow-hidden">
                    <div className="flex items-center bg-white">
                        <div ref={parentCaptchaElm} className="w-[120px] h-[50px] bg-white flex items-center justify-center"></div>
                        <svg onClick={() => getCaptcha(uuid)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0000a3" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name='captcha'
                        className="w-full px-4 py-2 rounded-y-full rounded-l-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        value={formik.values.captcha}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.captcha && formik.errors.captcha ? (
                    <div className="text-start w-full">
                        <FormErrorMsg msg={formik.errors.captcha} />
                    </div>
                ) : null}
            </div>

            <button type='submit' disabled={sending} className={`cursor-pointer w-full rounded-full py-2 px-4 mt-3 border-4 border-solid border-[#0000a3] bg-[#d2eeff] text-[#0000a3] transition-all hover:bg-[#70baff] ${sending ? 'opacity-50' : ""}`}>{forgetPass ? 'بازیابی رمز عبور': 'ایجاد حساب'}</button>

            <p className="text-[#0000a3] text-[9px] sm:text-sm">از قبل حسابی دارید؟ <Link href="/login" className="!text-[#0000a3] font-bold">وارد شوید.</Link></p>

        </form>
    )
}

export default VerifyPhoneForm
