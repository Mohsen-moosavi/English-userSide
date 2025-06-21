import Link from 'next/link'
import React from 'react'

function notFoundPage() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <p className='text-custom-dark-blue font-bold text-[lg] sm:text-[20px]'>صفحه مورد نظر یافت نشد!</p>
        <h1 className='text-custom-dark-blue font-bold text-[100px] sm:text-[200px] sm:leading-[210px] not-found-404 not-found-text-shadow'>404</h1>
        <Link href={'/'} className='p-2 rounded-lg bg-blue-500 !text-white mt-10 max-sm:text-sm'>بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default notFoundPage
