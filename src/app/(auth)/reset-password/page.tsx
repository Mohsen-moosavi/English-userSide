import ResetPasswordForm from '@/components/template/auth/reset-password/ResetPasswordForm'
import React from 'react'

function page() {
  return (
    <div className="w-full h-[100vh] auth-pages z-1 bg-white fixed top-0 left-0">
    <div className='w-full h-full bg-[#ffe4012b] p-3 flex items-center justify-center overflow-y-auto'>
        <div className="relative w-full max-w-[500px] shadow-center rounded-xl border-4 border-solid border-[#0000a3] bg-[#7fb5f9]">
            <div className="flex items-center justify-center absolute top-[-30px] sm:top-[-50px] right-2/4 translate-x-[50%] w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-[#d2eeff] rounded-full border-4 border-solid border-[#0000a3]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#0000a3" className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5" />
                </svg>
            </div>
            <ResetPasswordForm />
        </div>
    </div>
</div>
  )
}

export default page
