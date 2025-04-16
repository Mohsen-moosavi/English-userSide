'use client'
import FormErrorMsg from '@/components/modules/FormErrorMsg';
import useAppDispatch from '@/hooks/useAppDispatch';
import { registerThunk } from '@/redux/slice/user/userThunks';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import * as Yup from "yup";

function RegisterForm() {

    
    const searchParams = useSearchParams()
    const dispatch = useAppDispatch()
    const phoneParam = searchParams.get('phone') || null
    const verifiedPhoneCodeParam = searchParams.get('verifiedPhoneCode') || null

    const router = useRouter()
    const [sending, setSending] = useState(false)


    const FormValidation = Yup.object({
        name: Yup.string().required("لطفا نام نمایشی را وارد کنید!.").min(3, "نام نمایشی باید بین 3 تا 20 کاراکتر باشد.").max(20, "نام نمایشی باید بین 3 تا 20 کاراکتر باشد."),
        username: Yup.string().required("لطفا نام کاربری را وارد کنید!").max(20, "نام کاربری باید بین 3 تا 20 کاراکتر باشد.").min(3, "نام کاربری باید بین 3 تا 20 کاراکتر باشد."),
        password: Yup.string().required("لطفا گذرواژه را وارد کنید!").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "گذرواژه باید حداقل 8 کاراکتر و دارای حرف بزرگ و کوچک و عدد باشد."),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'گذرواژه و تکرار گذرواژه با هم، یکسان نیستند.')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: FormValidation,
        onSubmit: async (values, { resetForm }) => {
            setSending(true)

            const dispatchResult = await dispatch(registerThunk( {phone:`+98${String(phoneParam)}`, name: values.name, username:values.username, password:values.password, confirmPassword:values.confirmPassword,verifiedPhoneCode:String(verifiedPhoneCodeParam)}))

            if ((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected')){
                setSending(false)
                router.replace(`/`)
            }else{
                if (dispatchResult.payload === "مشکل در تشخیص شماره تلفن!") {
                    router.replace("/verify-phone")
                }
                setSending(false)
            }
        },
    });

    return (
        <form className="w-full my-3 p-2 sm:p-4 flex flex-col items-center justify-start gap-y-4 mt-8 sm:mt-12" onSubmit={formik.handleSubmit}>
            <h1 className="font-bold text-[#0000a3]">ایجاد حساب کاربری</h1>

            <div className='w-full'>
                <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <input
                        name='name'
                        type="text"
                        className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        placeholder="نام نمایشی"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />

                </div>
                {formik.touched.name && formik.errors.name ? (
                    <div className="w-full text-start">
                        <FormErrorMsg msg={formik.errors.name} />
                    </div>
                ) : null}
            </div>

            <div className='w-full'>
                <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <input
                        type="text"
                        name='username'
                        className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        placeholder="نام کاربری"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />

                </div>
                {formik.touched.username && formik.errors.username ? (
                    <div className="w-full text-start">
                        <FormErrorMsg msg={formik.errors.username} />
                    </div>
                ) : null}
            </div>

            <div className='w-full'>
                <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
                    <input
                        type="password"
                        name='password'
                        className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        placeholder="گذرواژه"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />

                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="w-full text-start">
                        <FormErrorMsg msg={formik.errors.password} />
                    </div>
                ) : null}
            </div>


            <div className='w-full'>
                <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                    </svg>
                    <input
                        type="password"
                        name='confirmPassword'
                        className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                        placeholder="تکرار گذرواژه"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />

                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="w-full text-start">
                        <FormErrorMsg msg={formik.errors.confirmPassword} />
                    </div>
                ) : null}
            </div>
            <button type='submit' disabled={sending} className={`rounded-full py-2 px-4 border-4 border-solid border-[#0000a3] bg-[#d2eeff] text-[#0000a3] transition-all hover:bg-[#70baff] ${sending ? 'opacity-60' : ''}`}>ایجاد حساب</button>


        </form>
    )
}

export default RegisterForm
