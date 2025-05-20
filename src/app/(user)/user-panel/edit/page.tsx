'use client'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { editUserInfoThunk } from '@/redux/slice/user/userThunks'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function page() {

    const { userName, userUsername } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const [sending, setSending] = useState(false)

    const [name, setName] = useState(userName || '')
    const [username, setUsername] = useState(userUsername || '')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function validationData() {
        if (name.trim() === '') { toast.error("لطفا نام و نام خانوادگی خود را وارد کنید."); return false };
        if (name.trim().length < 3 || name.trim().length > 20) { toast.error("نام و نام خانوادگی باید بین 3 تا 20 کاراکتر باشد."); return false };

        if (username.trim() === '') { toast.error("لطفا نام کاربری خود را وارد کنید."); return false };
        if (username.trim().length < 3 || username.trim().length > 20) { toast.error("نام کاربری باید بین 3 تا 20 کاراکتر باشد."); return false };


        if (password.trim() || confirmPassword.trim()) {
            if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) { toast.error("رمز عبور باید حداقل 8 کاراکتر و دارای حرف بزرگ و کوچک و عدد باشد."); return false };
            if (password.trim() !== confirmPassword.trim()) { toast.error("گذرواژه و تکرار گذرواژه، با هم یکسان نیستند."); return false };
        }
        return true;
    }

    async function editUserInfoFormHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)

        const validationResult = validationData()
        if (validationResult) {
            const dispatchResult = await dispatch(editUserInfoThunk({ name: name.trim(), username: username.trim(), password: password.trim(), confirmPassword: confirmPassword.trim() }))
            if ((dispatchResult.meta.requestStatus = 'fulfilled') && !dispatchResult.type.endsWith('rejected')) {
                router.replace("/user-panel")
            }
        }

        setSending(false)
    }


    return (
        <>
            <h1 className='text-center text-custom-dark-blue font-bold md:hidden mb-6'>ویرایش اطلاعات</h1>
            <form onSubmit={editUserInfoFormHandler}>
                <label className='text-custom-dark-blue' htmlFor="edituser-name-id">نام و نام خانوادگی:</label>
                <input type="text" id='edituser-name-id' placeholder='نام و نام خانوادگی را وارد کنید...' value={name} onChange={e => setName(e.target.value)}
                    className='rounded-lg text-custom-dark-blue mb-4 py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />

                <label className='text-custom-dark-blue mt-3' htmlFor="edituser-username-id">نام کاربری:</label>
                <input type="text" id='edituser-username-id' placeholder='نام کاربری را وارد کنید...' value={username} onChange={e => setUsername(e.target.value)}
                    className='rounded-lg text-custom-dark-blue py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />

                <span className='block text-red-400 mt-5 mb-3 max-sm:text-sm'>* در صورت عدم تمایل به عوض کردن گذرواژه، موارد زیر را خالی بگذارید</span>
                <label className='text-custom-dark-blue mt-3' htmlFor="edituser-password-id">گذرواژه:</label>
                <input type="text" id='edituser-password-id' placeholder='گذرواژه را وارد کنید...' value={password} onChange={e => setPassword(e.target.value)}
                    className='rounded-lg text-custom-dark-blue mb-4 py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />

                <label className='text-custom-dark-blue mt-3' htmlFor="edituser-confirmPassword-id">تکرار گذرواژه:</label>
                <input type="text" id='edituser-confirmPassword-id' placeholder='گذرواژه را دوباره وارد کنید...' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                    className='rounded-lg text-custom-dark-blue mb-4 py-2 px-1 w-full border-2 border-custom-dark-blue bg-[#166d91]/10' />

                <div className='flex items-center gap-x-2 max-md:mb-3'>
                    <Link href={'/user-panel'} className={`text-center w-full rounded-lg p-2 bg-[#adadad]/80 hover:opacity-80 !text-[#166d91] ${sending ? 'opacity-80' : 'cursor-pointer'}`}>بازگشت</Link>
                    <button disabled={sending} type='submit' className={`w-full rounded-lg p-2 bg-[#166d91]/80 hover:opacity-80 text-white ${sending ? 'opacity-80' : 'cursor-pointer'}`}>ویرایش اطلاعات</button>
                </div>

            </form>
        </>
    )
}

export default page
