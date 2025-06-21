'use client'
import FormErrorMsg from '@/components/modules/FormErrorMsg';
import useAppDispatch from '@/hooks/useAppDispatch';
import { loginThunk } from '@/redux/slice/user/userThunks';
import { useFormik } from 'formik';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup";


function LoginForm() {

    const [sending, setSending] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useAppDispatch()
    const router = useRouter()

    const FormValidation = Yup.object({
        phone: Yup.string().required("لطفا شماره تلفن را وارد کنید!.").matches(/^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/, 'لطفا یک شماره تلفن معتبر وارد کنید.'),
        password: Yup.string().required("لطفا گذرواژه را وارد کنید!").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "گذرواژه باید حداقل 8 کاراکتر و دارای حرف بزرگ و کوچک و عدد باشد."),
    });

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: FormValidation,
        onSubmit: async (values) => {
            setSending(true)

            const resultAction = await dispatch(loginThunk({phone : values.phone , password: values.password}))

            if (resultAction.meta.requestStatus === 'fulfilled') {
                if(isChecked){
                    localStorage.setItem("phone", values.phone);
                }
                setSending(false)
                return router.replace('/')
            }
            setSending(false)
        },
    });

    useEffect(() => {
        const savedPhone = localStorage.getItem("phone");
        if (savedPhone) {
          formik.setValues({phone : savedPhone , password:''},true);
        }
      }, []);

  return (
    <form className="w-full my-3 p-2 sm:p-4 flex flex-col items-center justify-start gap-y-4 mt-8 sm:mt-12" onSubmit={formik.handleSubmit}>
    <h1 className="font-bold text-[#0000a3]">ورود به حساب کاربری</h1>

    <div className='w-full'>
        <div className="rounded-md border-2 border-solid border-[#0000a3] p-1 bg-[#2272fc] relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[20px] h-[20px] absolute right-3 bottom-2/4 translate-y-[50%]" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <input
                name='phone'
                type="number"
                className="w-full pl-3 pr-8 py-2 rounded-full bg-[#d2eeff] text-[#0000a3] placeholder-[#0000a3]"
                placeholder="تلفن همراه"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />

        </div>
        {formik.touched.phone && formik.errors.phone ? (
            <div className="w-full text-start">
                <FormErrorMsg msg={formik.errors.phone} />
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

    <div className="w-full flex items-center gap-x-1 text-[#0000a3]">
        <input type="checkbox" className='cursor-pointer' id="remember-me-id" onChange={()=>setIsChecked(prevValue=>!prevValue)} />
        <label htmlFor="remember-me-id">من را به خاطر بسپار</label>
    </div>


    <button type='submit' disabled={sending} className={`cursor-pointer w-full rounded-full py-2 px-4 border-4 border-solid border-[#0000a3] bg-[#d2eeff] text-[#0000a3] transition-all hover:bg-[#70baff] ${sending ? 'opacity-60' : ''}`}>ورود</button>

    <div className="flex items-center justify-center gap-x-5 w-full max-w-[400px] max-sm:text-[10px]">
        <Link href="/forget-password" className="!text-[#0000a3] font-bold">فراموشی رمز عبور</Link>
        <p className="text-[#0000a3] text-[9px] sm:text-sm">حساب کاربری ندارید؟ <Link href="/verify-phone" className="!text-[#0000a3] font-bold">ثبت نام کنید</Link></p>
    </div>



</form>
  )
}

export default LoginForm
